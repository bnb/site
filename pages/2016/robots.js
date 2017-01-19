// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {Image} from '../../components/figure'
import {H2} from '../../components/heading'
import {UL, LI} from '../../components/list'
import {Snippet} from '../../components/code'

export default () => (
  <Post>
    <Image src="/static/posts/2016/robots/cover.png"/>
    <Meta id="robots"/>

    <P>When I attended my <Link href="http://2015.jsconf.eu">first conference</Link> at
    the end of last year, all of my expectations
    have been exceeded completely. One thing that especially
    blew my mind was how much they were talking
    about hardware, rather than just how to build
    better websites with JS.</P>

    <P>As an example, Pawel Szymczykowski was
    giving <Link href="https://www.youtube.com/watch?v=xzBloghQhO4">a talk</Link> about
    how to build a balloon carrying a payload
    of sensors and cameras driven by JavaScript that flies
    twice the height of a commercial airline. After
    that (or before, I honestly don’t remember the order), Thomas
    Watson showed us <Link href="https://www.youtube.com/watch?v=c5GlZp6L9P4">a way</Link> to hack
    Apple’s AirPlay protocol and easily setup
    a server to which we can stream music. And
    many more!</P>

    <P>Despite the fact that I already knew that
    there was a lot going on in the area of controlling hardware
    with JavaScript, I really wasn’t expecting
    it to be so easy: By taking advantage of Node’s extremely
    huge module ecosystem, you only need to write
    a few lines of code to make a servo spin, light
    up an LED or even show
    something on a LC display.</P>

    <P>These things will definitely get more complex, as you
    dive deeper into the world of building
    robots and programming hardware in general. But just for
    getting started, there’s not a lot of
    knowledge required. To proof this, I’d like to give
    you a quick overview of what you need to do
    to make something like an LED respond
    to your Node.js program.</P>

    <H2>Requirements</H2>

    <P>For the beginning, we’ll need a
    so-called “microcontroller” (or “board”). It’s a small
    and cheap device that contains a
    processor, memory and peripherals. Today’s micro-controllers
    are often embedded in things like
    automobiles, phones and washing machines.</P>

    <P>There are several different kinds of programmable
    micro-controllers out there on the market. But
    for now, we just need one: Because I had a very
    good experience with it so far, I suggest
    going with <Link href="https://www.arduino.cc">Arduino</Link> (outside
    of the US, it’s called “Genuino” because of
    a <Link href="http://www.open-electronics.org/from-arduino-to-genuino-the-reasons-for-a-choice/">trademark issue</Link>). Besides
    of that, it’s also the recommended board of
    the library we’re going to use to control it using Node.</P>

    <P>To be able to make the example project
    happening, you only need the board itself, a USB cable
    of type A/B and a set of LEDs.</P>

    <UL>
      <LI>However, I generally recommend buying
      the <b>Starter Kit</b> (<Link href="https://store-usa.arduino.cc/products/arduino-starter-kit">US</Link>/
      <Link href="https://store.arduino.cc/product/GKX00007">other countries</Link>) because
      it contains a huge varity of other components
      as well. This makes it easier for you to continue building
      various things after making it through this article.</LI>

      <LI>If you’d like to protect your USB ports from getting
      overloaded, I also suggest buying a <b>USB hub with
      overload protection</b> (like <Link href="http://amzn.to/2iBXkdX">this one</Link>). But
      if you’re using a high-quality device
      like a MacBook, this shouldn’t be necessary because the
      system will automatically shut down the port if
      something unexpected happens.</LI>

      <LI>And if you’re really into making sure that it
      gets done properly, you can also
      order <b>a case</b> (<Link href="http://amzn.to/2jokB0k">this one</Link> is
      mine) which protects the main board from
      getting damaged. In this case, you’ll also have to
      get a cross-tip screwdriver, if you don’t have one.</LI>
    </UL>

    <P>In the next section of this tutorial, I’m just going
    to assume that you’ve bought everything mentioned above. If something
    hasn’t arrived yet, make sure
    to <Link href="https://help.medium.com/hc/en-us/articles/214993247-Bookmarks">bookmark</Link> this
    article and revisit it later.</P>

    <Image src="/static/posts/2016/robots/package.png"/>

    <H2>Setup</H2>

    <P>Once all of the accessories have arrived
    in your mail, make sure to unpack the board and put it into
    the case (each of these usually comes with
    some kind of instruction paper which contains information
    on how to screw the cover to the board).</P>

    <P>Now stick the A part (the bigger one) of the USB
    cable into the external hub, the B part into
    the board and finally the hub into a female
    USB port of your computer.</P>

    <P>If you’re not using a USB hub, just plug the
    A part into the computer and the other side into the board.</P>

    <P>When everything is connected, you should see a
    small, greenish LED light up constantly on
    the Arduino or Genuino. As you can see, it says
    the word “ON” next to it. This means the
    board is powered and able to accept signals
    from your computer.</P>

    <P>But please don’t worry if that’s not the
    case! Instead of a continuously lighting up LED, there
    might also be an orange one blinking. This
    simply means that the default protocol hasn’t been
    set up correctly. You’ll learn how to do
    that later in this article!</P>

    <H2>Preparing the Board for Accepting Tasks</H2>

    <P>As I’ve mentioned above, we’re now able to tell the
    micro-controller what to do using code. So let’s
    dive into running an actual program!</P>

    <P>First off, it’s important to know that the
    Starter Kit and all of the official guides related to the
    board are designed specifically for running their
    own language on it (basically a simplified version of C++).</P>

    <P>For getting the code to run on the board, they’ve designed
    an open-source IDE that let’s you write code
    and upload it to the micro controller
    with a single click.</P>

    <P>But since we’re trying to control it with
    JavaScript, this isn’t the right approach for us. Instead
    of that, we’re going to use a Node.js library
    called “Johnny Five” that runs on your computer and
    talks to the Arduino using the
    so-called “Firmata” protocol — a standard protocol
    for computers communicating with hardware devices.</P>

    <P>Because of this, we need to make sure that the board
    is able to accept tasks over this protocol as
    the next step. To do that, we’re going
    to <Link href="https://www.arduino.cc/en/Main/Software">download</Link> the
    Arduino app (the IDE I’ve mentioned before), open
    it and select the default version of the
    protocol in the menu bar:</P>

    <Image src="/static/posts/2016/robots/protocol.png"/>

    <P>This will insert the code of the default protocol
    into the editor you’re seeing on your screen. However, the
    code isn’t on the board yet. For that, we’ll
    have to upload it. But before doing so, I suggest
    making sure that the program knows where to find the Arduino.</P>

    <P>Assuming that you’re on macOS, you can click
    on “Tools” in the menu bar, select “Board” and
    choose “Arduino/Genuino Uno”:</P>

    <Image src="/static/posts/2016/robots/tools-board.png"/>

    <P>Now the app knows which kind of micro-controller
    you’re using. However, it still isn’t able to
    connect to the board because it doesn’t know the
    port on which it’s plugged in.</P>

    <P>So please look for an item in
    the “Port” sub-menu of “Tools” that shows the “Arduino/Genuino Uno” type
    as suffix:</P>

    <Image src="/static/posts/2016/robots/tools-port.png"/>

    <P>Once you’re done setting up the basic configuration
    as mentioned above, you’re able to upload the
    protocol script to the board by clicking the tiny
    arrow on the top left in the window (the second
    icon from the left). When hovering it, a label
    saying “Upload” should appear. Click it and the program will
    move the script over to your micro controller.</P>

    <P>Yeeeha! You’ve prepared the Arduino for accepting
    the tasks you’ll be sending from the computer
    using Node. So please feel free to close the
    app and move back to your Desktop.</P>

    <P>The board should now show a green light which
    says “ON” next to it. If that’s not the case, please
    try re-connecting it to your machine and hit
    the red “RESET” button on the board. If that
    still doesn’t change make the green LED light up,
    consider <Link href="https://gitter.im/rwaldron/johnny-five">asking the community for help</Link>.</P>

    <H2>Telling the Board What to Do</H2>

    <P>Now that the hardware knows what to do with your
    commands, let’s set up a new Node project within a random
    directory and
    install <Link href="https://github.com/rwaldron/johnny-five">the library</Link> we’re
    going to use to communicate with the device:</P>

    <Snippet>{`$ npm init -y
$ npm install johnny-five -S`}</Snippet>

    <P>If you’re not completely fimilar with these commands: The
    first one creates a file called “package.json” with
    the default contents suggested by npm. The second
    one installs the Johnny Five library and saves it
    to the dependencies within the “package.json” file.</P>

    <P>Within that directory, create another file
    named “index.js” and start the first line with loading
    the library and initializing a new board by
    creating an instance of the “Board” class
    contained within Johnny Five:</P>

    <Snippet>{`const five = require('johnny-five')
const board = new five.Board()`}</Snippet>

    <P>As soon as you’ve initialized a new
    micro-controller (your Arduino) using the syntax shown
    above, you can start listening to the board’s “ready” event
    (which gets triggered once the board is able
    to accept signals).</P>

    <P>Inside of such an event listener, you can
    trigger actions on your components and make them
    do various things. In this example, we’re
    simply going to make a green LED blink.</P>

    <P>To accomplish this, you take one out of the Starter Kit
    and put the short part into the pin
    with the <b>number 13</b> and the long part into
    the pin named <b>“GND”</b> right above the another one.</P>

    <P>Now that the LED is able to draw power from the
    micro controller, we can create the event
    listener (as well as a new instance of
    the “Led” class imported from the library) and make the
    LED light up every 500 milliseconds using the “.blink” method:</P>

    <Snippet>{`board.on('ready', function() {
  const led = new five.Led(13)
  led.blink(500)
})`}</Snippet>

    <P>Ready? Great! Then let’s <b>run the program</b> using Node
    and see what happens with our micro controller...</P>

    <Snippet>{`$ node index`}</Snippet>

    <P>If everything has been configured correctly and
    the program is running without an error, you
    should see a few messages in your terminal indicating
    that the device was detected and the connection
    was opened. In turn, your Arduino should act like this:</P>

    <Image src="/static/posts/2016/robots/board.gif" origin="http://johnny-five.io"/>

    <P>Cool, huh? You’ve just managed to program your
    first hardware device using the greatest
    piece of software of today’s world: Node.</P>

    <P>And remember: What you did is only the beginning of
    what’s possible. Your Starter Kit contains many
    other electronic components like
    servos, LC displays and lots of cables.</P>

    <P>What I’m trying to say is that the possibilities
    are nearly endless when building things using an Arduino
    and Node. Just go ahead, think of something
    awesome and make it happen! It doesn’t have to be
    something that works completely fine, simply get
    started by letting your hardware dreams come
    true and you’ll learn even more about how these
    things work as time passes.</P>

    <H2>Finding Help</H2>

    <P>The accessibility of the documentation material is
    one of the key parts of an awesome community. Thankfully, the
    girls and guys who’ve contributed to Johnny Five
    have set up a complete website for the project that
    shows many <Link href="http://johnny-five.io/examples/">examples</Link>, as well as a
    full-blown <Link href="http://johnny-five.io/api/">API documentation</Link> for
    the library.</P>

    <P>And if a problem occurs that you’re not able to
    figure out by yourself, simply ask for help on
    their <Link href="https://gitter.im/rwaldron/johnny-five">Gitter room</Link>. Just
    try it, they’re <Link href="https://twitter.com/rwaldron/status/740673599246376960">so kind</Link>!</P>

    <P>If you’ve discovered a bug, also make sure to tell them by adding an issue on
    the <Link href="https://github.com/rwaldron/johnny-five">GitHub repository</Link> or
    opening a pull request. The more people are helping out
    with their knowledge, the easier, faster and better it gets!</P>
  </Post>
)
