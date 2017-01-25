// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {Image} from '../../components/figure'
import {H2} from '../../components/heading'
import Quote from '../../components/quote'
import {Snippet} from '../../components/code'
import {UL, LI} from '../../components/list'

export default () => (
  <Post>
    <Meta id="second-muffin-update"/>

    <P>Here we are. Exactly 28 days since the last status
    update, I’m about to tell you another nice story about what’s new, what
    had to be dropped from the project and why I
    did it like that and not just kept it like it was!</P>

    <P>Let’s start over with the biggest change:</P>

    <Image src="/static/essays/2016/second-muffin-update/terminal.png"/>

    <H2>Goodbye Yeoman, Hello Custom CLI!</H2>

    <P>First off, I’d like to encourage you to dive really deep into
    the topic of choosing between building your own CLI and
    using Yeoman if you’re currently in the process of building
    something that needs blueprints and other tasks
    to be generated/handled through the command line.</P>

    <P>Why? Because it’s important to choose a tool
    based on what you need it to do. Don’t just show
    this essay to your CTO and be like:</P>

    <Quote>Hehehe! Told ya! A custom CLI is better than that
    just letting that stupid Yeoman thingy handle most
    of the stuff for us.</Quote>

    <P>No! Addy Osmani, Sindre Sorhus and all the other
    contributors didn’t just create it for fun. They’ve actually
    solved a lot of problems by giving developers a new, easy
    way to generate their own blueprints and handle different
    other tasks for a certain type of web app.</P>

    <P>However, Muffin isn’t just another blueprint/boilerplate
    for writing unique websites. Rather than that, it’s a full-blown
    toolkit that handles all of the tasks from just
    serving your site to transferring its contents between different
    environments and even building your assets.</P>

    <P>While some of those things could be handled within
    that generator, it seemed much cleaner to me to create a whole
    new toolkit for it. Yeoman isn’t made for all that stuff. Its
    main purpose is to scaffold your site and help you set
    up the tools you’ll need in the process of developing
    it (and not to act as such a tool).</P>

    <P>Because of this I’ve decided to convert the
    core of Muffin into something similar to a command line utility.</P>

    <P>I’ve spend hours and hours pondering this, but finally came
    to the conclusion that it will save both us (the developers
    behind the project) and Muffin’s users a lot of
    time and effort if I’ll let people control it through the
    command line instead of requiring it into an existing app.</P>

    <P>This whole thing also has a nice side effect: Developers
    don’t need to install and update both Yeoman and Muffin’s generator
    anymore. They only need to download and globally
    install the core package and boom: Done!</P>

    <Image src="/static/essays/2016/second-muffin-update/broccoli.png"/>

    <H2>Broccoli.js</H2>

    <P>No, I’m not talking about the vegetable. I’m talking about
    the most awesome <Link href="http://broccolijs.com">asset pipeline/build tool</Link> I’ve seen in my
    whole career as a web dev. I’ve came across it while getting
    started with ember-cli (they’re using it too).</P>

    <P>So far, Gulp served me pretty well with all the stuff I had
    to be done in combination with Muffin. However, there’s something
    else to be considered: Allowing people to choose their
    own build tool creates a lot of room for errors. And we
    as a community would have a really hard time fixing all
    of those and responding to questions because everyone would
    have a different setup and completely different tasks to solve.</P>

    <P>By choosing Broccoli as the asset pipeline, we not
    only make sure that everything is as straightforward
    as possible, but we also <b>max out the performance</b> of
    the building process.</P>

    <P>Thanks to the fact that Muffin now also contains a
    whole, custom command line utility, it wasn’t very hard to
    integrate it into the existing workflow. I just had to
    require the module, use its API to build a few awesome
    tasks and finally implement a neat command for the whole job:</P>

    <Snippet language="bash">muffin build</Snippet>

    <P>When running this command, Muffin will now look for
    a “brocfile.js” in your site’s root directory and then use the
    tasks you’ve added within it to compile your Sass code, transpile
    your next-gen JavaScript and move the static
    files over to the “dist” directory without touching them.</P>

    <P>Broccoli gets all of this stuff done at an insanely high
    speed! Since it doesn’t have to handle all of the stuff
    that a full-blown task manager does, it currently seems to
    even be the fastest asset pipeline at all out there.</P>

    <P>And if that wasn’t awesome enough, you’re still able to
    require Broccoli plugins and completely adjust
    the “brocfile.js” to your own needs.</P>

    <H2>2.0.0</H2>

    <P>As developers, we’ve all read
    the <Link href="http://semver.org">Semantic Versioning</Link> guide. Right?
    Definitely! And because of this, it seemed like a hugely important
    thing to me to make sure that the initial development
    version of Muffin gets released under two conditions:</P>

    <UL>
      <LI>A correct version tag (not just start with 4.3.2).</LI>

      <LI>The chosen tag should leave enough space to the
      top, since I’m planning to release a lot of new features
      and fixes which of will of course require
      increasing the version number.</LI>
    </UL>

    <P>However, I wasn’t fully able to meet my own
    expectations when I released the first version of Muffin: v1.0.0</P>

    <P>See? You didn’t even knew that this version already
    went online, right? No, you probably didn’t. The reason for
    this is that I wasn’t sure if I’ll even keep this name
    or just switch to a different one.</P>

    <P>Why did I even think about that? Because I’ve wanted
    those to check those two points above so badly. And
    since someone was using the “muffin” package name before me, I
    had to start at 1.0.0 (which I didn’t like because
    I thought 1.0.0 would be too huge for the initial unstable release).</P>

    <P>And now, since I have rewritten the whole thing into
    something like a CLI, I would have to bump the version to 2.0.0.</P>

    <P>“Way too big, that version!”, I’ve told myself. I simply
    didn’t wanted to end up at 10.0.0 in two years.</P>

    <P>However, after asking a few other devs, I’ve looked at it with
    from a completely different angle: It’s not much of a
    problem to bump the version tag so far. As long as I
    make sure to fix a lot of bugs and make it as stable as possible
    before releasing that version, there will still be
    enough room for other breaking changes!</P>

    <H2>Final Words</H2>

    <P>Those changes mentioned above weren’t all ones. Just the
    biggest ones! So get ready for experiencing how Muffin
    is <Link href="https://github.com/muffin">going to meet</Link> the
    expectations generated by its slogan:</P>

    <Quote>The 21st century way of building websites.</Quote>

    <P>Oh. And as always:</P>

    <P>Thanks for caring about what will happen with the web
    in the future! The more people care about creating awesome workflows
    and tools, the easier and more fun it will get for all of us.</P>
  </Post>
)
