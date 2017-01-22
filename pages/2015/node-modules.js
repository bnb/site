// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'
import {Image} from '../../components/figure'
import {Inline} from '../../components/code'
import {H2} from '../../components/heading'
import HR from '../../components/hr'
import {OL, LI} from '../../components/list'
import Quote from '../../components/quote'

export default () => (
  <Post>
    <Meta id="node-modules"/>

    <P>First off: I{`'`}m relatively new to node (started developing
    with it a few months ago). I{`'`}m not yet one of those
    experienced professionals in this area, so please don{`'`}t take
    my arguments to seriously. I{`'`}m just trying to
    describe what bugs me about the way, how modules in
    node currently work and what I would change.</P>

    <P>I started developing a secret project a while ago
    and I{`'`}ve immediately figured out that this is one of the
    major things which prevents me from bringing some
    logic in the structure of the project. And that{`'`}s exactly
    why I{`'`}m here now and want to talk about this.</P>

    <Image src="/static/posts/2015/node-modules/history-guy.png"/>

    <P>When talking about open source projects, I{`'`}m usually very
    concerned about doing stuff the way how it was intended
    by it{`'`}s creators (since that mostly leads to clean code and a
    faster development process). I{`'`}m also very happy about
    the fact that there are many people out there who are
    contributing to the openness and trying to make the
    standards easy to understand, so that new users like me can
    quickly get started without needing to think
    about their own structure.</P>

    <P>Anyway. Let{`'`}s talk about the problem: To me, it feels
    like the logic behind the way how modules are
    intended to be structured within apps, isn{`'`}t that
    awesome. When installing a module (or {`"`}package{`"`}, if you
    want), the developer usually has the choice between
    installing it within the app{`'`}s directory (then it
    will be put in the <Inline>node_modules</Inline> folder) or
    setting it up globally using the <Inline>-g</Inline> parameter
    when installing.</P>

    <H2>Problems and Their Solution</H2>

    <P>Why don{`'`}t we just install all modules globally by default? And
    if a module needs to require it, it will simply be
    loaded from that global directory where all modules live. Some
    advantages this method will entail:</P>

    <OL>
      <LI><b>No more duplicated modules:</b> Every time you set up
      an app that has some other modules as dependencies, those
      might also have modules as dependencies which the app
      itself already requires. Also: One of the most important
      coding-mantras is {`"`}Don{`'`}t repeat yourself!{`"`}. It doesn{`'`}t matter
      how many different node apps are operating on a
      machine, they could simply all access one single module
      rather than installing it again & again & again.</LI>

      <LI>
        <P><b>Goodbye, nesting inception:</b> Okay, let{`'`}s assume we
        want to write an app with node. Since it{`'`}s an
        environment that comes with very less functionality
        by default, we usually need a few modules to achieve
        what we want. — So let{`'`}s install the first module... Ahh, cool! Looks
        like it also has some dependencies itself and
        nice, it even installs them automatically... Great, then
        let{`'`}s have a look into the folder: Okay, those
        dependency modules of the module we{`'`}ve installed
        also have some other modules which they depend
        on, hmm. Oh, looks like the depending modules of
        the modules on which some of our depending modules
        depend on, also have some dependencies.</P>

        <P>Great! But we could avoid this whole mess by putting all
        those modules on the same level, so that we have a
        great overview rather than a folder in a folder in a folder in a folder.</P>
      </LI>

      <LI><b>Alway up-to-date:</b> If some of our apps only need 1.3.0 of a
      specific module, they will now also get a higher version
      if a different app on the system depends on it (if another
      module depends on 1.5.0 of the said module, for
      example - the above app will also get this version, since the
      only instance of this module will of course be updated to
      fit the highest dependency). — I hope that{`'`}s understandable.</LI>

      <LI>
        <P><b>Faster, more secure and easier on large deployments:</b> If there{`'`}s a
        machine with multiple apps on it, there won{`'`}t be
        hundreds of thousands instances of the same module which
        need to be updated to a specific version. There{`'`}s only
        one instance of this module on the system: The latest. And
        if you{`'`}re now thinking: {`"`}What if an app needs an older
        version of an module?{`"`} — If that{`'`}s a big point for you, what
        about creating a single, global folder for this
        module which contains multiple versions: 1.0.0, 1.0.1
        and 1.0.2 for example, etc. — Because if you ask
        me, <Inline>latest</Inline> should always be the default, there shouldn{`'`}t
        be an excuse. But if it{`'`}s really necessary, than
        the app could also require it.</P>

        <P>If a module depends on other modules, NPM will still
        install those automatically if they{`'`}re listed within
        the <Inline>package.json</Inline> file. Just
        globally (by default), rather than locally.</P>
      </LI>
    </OL>

    <HR/>

    <P>I{`'`}m not sure but I think we also wouldn{`'`}t be the first ones
    implementing this method. Just think about how Ruby does it
    with Gems. They{`'`}re all in one place. No nesting, no confusion.</P>

    <P>So what do you think about this? Aren{`'`}t you also tired
    of this never ending story of modules that are nested to
    the moon? If so, then simply write something about your
    own opinion on
    an <Link href="https://github.com/joyent/node/issues/25770">issue</Link> which I{`'`}ve created for
    this (I didn{`'`}t just wanted to link to my blog, that felt a bit stupid).</P>

    <HR/>

    <P><b>EDIT:</b> I just read about the cool
    stuff the NPM folks introduced with [3.0.0][2] - the update
    also contains a new method of making
    module-dependencies {`"`}flat{`"`}. According to their description, that means:</P>

    <Quote>... all of your dependencies, and their dependencies, and
    THEIR dependencies will be installed in
    your project{`'`}s <Inline>node_modules</Inline> folder with no nesting.</Quote>

    <P>Okay. Looks like we got this whole nesting-mess solved. I{`'`}m happy
    that they already figured that out by themselves. Now the
    only thing that{`'`}s left to making me really happy, is adding
    the ability to add global packages to the dependency-list. But that will
    probably <Link href="https://github.com/npm/npm/issues/2949#issuecomment-11408461">never happen</Link>. Maybe
    I just need to find a way around this.</P>

    <HR/>

    <P><b>EDIT 2:</b> I wrote another piece regarding
    this topic. This time suggesting a method to avoid
    version incompatibility problems: Take a read
    on it <Link href="https://github.com/nodejs/NG/issues/20">here</Link>. Why
    do you think? Leave a comment!</P>
  </Post>
)
