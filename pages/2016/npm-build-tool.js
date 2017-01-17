// Packages
import Tweet from 'react-tweet-embed'

// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {Image, Gist} from '../../components/figure'
import {H2} from '../../components/heading'
import {Inline} from '../../components/code'
import {UL, LI} from '../../components/list'

export default () => (
  <Post>
    <Meta title="Should npm Really Be Used as a Build Tool?" date="10-04-2016"/>

    <P>I’d like to talk about one of the web’s new “best practises” and my
    personal experiences with it. The intention behind this
    article isn’t to get as much developers as possible away from
    using npm as a build tool, but rather to contribute to a
    large, global thought process about whether or not it
    should be considered a “best practise”.</P>

    <P>I’m saying this because I definitely think that I’ve got a
    pretty good view on this whole topic. However, there
    still might be some areas in which solutions for problems
    exist, but I simply haven’t found out about them yet.</P>

    <P>So please don’t use this as an excuse for staying with
    Gulp, Grunt or Broccoli, but rather just add it to the information
    you’ve gathered from other places around the web and
    then make a decision!</P>

    <H2>Why npm?</H2>

    <P>Let’s start with the intention behind using npm as a build
    tool and why many of us came to the conclusion that it might be a
    better choice than using existing packages:</P>

    <P>First of all, I think we both agree on the fact that good
    developers are always on the path of trying to find the
    simplest, easiest and fastest way to get a certain
    task done. And this exactly where things like Gulp and Grunt
    started to become a thorn in our sides:</P>

    <P>While our builds became more and more
    complex (transpiling next-level JavaScript, compiling
    different syntax languages like SCSS or Coffeescript
    into their main language, preparing/transpiling tests
    and moving static files), our configuration files also started becoming
    much bigger and complex as well.</P>

    <P>And then, suddenly, many of us found themselves writing multiple
    hundreds of lines of code just for the process of preparing all
    files for being delivered to the user/customer (here’s a
    really <Link href="https://github.com/TryGhost/Ghost/blob/master/Gruntfile.js">extreme example</Link>, which
    also isn’t just related to build tools, but rather to task managers at all).</P>

    <P>So it didn’t take much time until some developers started
    looking for a simpler and cleaner way to handle all of this. And since
    our projects already had a “package.json” file inside
    them (which is necessary for defining a build tool’s
    dependencies), <Link href="https://docs.npmjs.com/misc/scripts">npm-scripts</Link> were
    one of the first things that seemed like a proper alternative.</P>

    <H2>The Remorse</H2>

    <P>Sadly, the joy didn’t last long. After people like me started
    converting their excitement of knowing how to simplify
    a certain task into a practical solution, it already
    started to get shitty again:</P>

    <Image src="/static/posts/2016/npm-build-tool/remorse.gif"/>

    <P>At first, I just had a single property in <Inline>package.scripts</Inline> and it was
    called <Inline>build</Inline>. And what it did
    was transpile my ES2015 code using Babel into
    ES5 code. “So far so good!”, I thought.</P>

    <P>But then, as soon as I started digging into the other stuff I
    had to take care of (like compiling SCSS, starting a livereload
    server, bundling my ES2015 modules or implementing
    a file watcher), it started getting messy:</P>

    <Gist id="1159217762212048cbc76c9067ee1699"/>

    <P>That’s how it looked before I switched back to Gulp. And remember, the
    upper example doesn’t even include tests. If you want to see how that looks,
    here’s <Link href="https://github.com/testdouble/testdouble.js/blob/d3776200f6f6cc29ae93e3bf94fcfafa94e3380a/package.json#L16">another one</Link>.</P>

    <UL>
      <LI>A lot of things are being defined multiple
      times (like paths and subcommands), which makes maintenance very hard.</LI>

      <LI>You’re required to ensure that the destination directory and
      all sub directories exist before running an actual
      build task (I’ve did that using “prebuild”). If you don’t do
      that, many compilers/transpilers will throw an error telling
      you that the destination path doesn’t exist.</LI>

      <LI>I haven’t found a way to use a single watching process and pass
      the changed files over to the respective build task instead of
      using a CLI tool like <Link href="https://github.com/keithamus/parallelshell">parallelshell</Link> to
      run multiple of those watchers in parallel.</LI>

      <LI>These watchers also won’t care if only a single SCSS
      file (for example) has been changed. Instead of that, they will
      simply trigger a rebuild of all stylesheets because
      nobody tells them which ones have changed!</LI>

      <LI>Tools like Gulp and Broccoli already include a well
      thought-out caching mechanism which reduces the build time to a few
      milliseconds (using in-memory file caches
      like <Link href="https://www.npmjs.com/package/gulp-cached">gulp-cached</Link> even
      allows you to reach a overall build time of
      just nanoseconds). When using things like node-sass or
      babel directly, you’ll get a much slower speed.</LI>
    </UL>

    <P>Not very compelling, right? That’s what I thought. So I’ve decided to switch back and go
    with <Link href="https://ember-cli.com">ember-cli</Link> for
    my latest web application (at the core, it basically
    uses <Link href="http://broccolijs.com">Broccoli</Link> to compile the code).</P>

    <P>But the same applies to Gulp and Grunt: Everything is
    cached, I don’t need to define things like paths multiple times and
    all of the basic logic is done by the tool
    itself (like ensuring that all destination paths exist).</P>

    <H2>Possible Fixes</H2>

    <P>Technically, just running watchers concurrently and
    rebuilding if necessary isn’t enough for a real web application. At the
    same time, we also have to make sure that we’re serving the
    static files and the API/server code. And all of this stuff should
    preferably happen in a single process (to avoid monitoring
    multiple terminal windows, for example).</P>

    <P>To address the above problems, awesome people like
    Justin Searls started creating ways to outsource all of that shell
    scripting within “package.json” into separated, clean
    and carefully structured files.</P>

    <P>A great example for this intention
    is <Link href="https://github.com/testdouble/scripty">scripty</Link> — a tool
    which allows you to put all of your task configurations
    into executables located in a single folder
    called “scripts” in your module’s root directory.</P>

    <P>“Isn’t that great, we’ve just found a way to solve all of
    our problems!”, you might think now. But I’d like to ask you the
    following: Are you sure that we’ve really made
    progress on this topic by choosing npm instead of
    Gulp or Grunt as a built tool?</P>

    <P>Because if you ask me, we clearly haven’t. Instead of that, we’re basically trying
    to <Link href="https://en.wikipedia.org/wiki/Reinventing_the_wheel">reinvent</Link> a
    already fine working solution by fixing
    problems which we didn’t even have before.</P>

    <Tweet id="700320306053935104"/>

    <P>What’s the next logical step after moving your tasks into
    separate files? Exactly: You’re going to find a way to share
    code between multiple tasks, implement some logic and finally
    create a package called “Gulp” which enforces a clean
    task configuration structure.</P>

    <H2>A Compromise</H2>

    <P>You know what? I’m fine with looking at
    npm as a <b>task manager</b>. But what I definitely can’t
    recommend is using it as a <b>build tool</b>.</P>

    <P>Those things might sound similar, but they’re still
    fundamentally different: While a task manager controls all
    of the tasks necessary to develop a web application, a
    build tool only covers the part of preparing your code
    for being delivered to the end user.</P>

    <P>So all in all, my personal suggestion is to stay away
    from too much shell scripting related to <Inline>package.scripts</Inline> and
    rather start “build”-ing your code
    using <Link href="http://gulpjs.com">Gulp</Link> or <Link href="http://broccolijs.com">Broccoli</Link>. But
    at the same time, feel free to control those build tools
    through the “script” property within “package.json”.</P>

    <P>However, I’m not trying to suggest the use of a
    certain build tool. Just go with what suits you and your team the best!</P>

    <P>While doing so, make sure to take a look at the configuration
    files of other awesome projects to understand what they’re doing to keep them
    as <Link href="https://github.com/muffin/cli/blob/d29e99c222e6d2276fd8d3f78f13e37389a68a67/gulpfile.js">simple as possible</Link> and
    apply it to your own code!</P>

    <P>And now a huge “Thank you!” for taking the time to read this!</P>
  </Post>
)
