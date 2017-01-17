// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import {H2} from '../../components/heading'
import Link from '../../components/link'

export default () => (
  <Post>
    <Meta title="Password Managers and Their Future" date="04-03-2016" />

    <P>With computers, we got another big thing
    to worry about in our everyday life: Passwords.</P>

    <P>Many of us are faced with them daily and try to keep them
    ordered and stored in a safe place. Nevertheless
    the biggest part of all users isn’t giving a single fuck. This
    was part of the reason why a small group of developers decided to
    create a new way for handling those data bits
    using so-called “password managers”.</P>

    <P>I got upset about this myself a few years ago and decided
    to pay for 1Password on both OS X and iOS. After
    that, I immediately started caring more and more about my
    passwords. But I noticed something else too: I
    spend way more time with them.</P>

    <P>I started sorting them into groups, adding additional fields
    of information to my “vaults” and began storing things
    like credit cards, bank account data and such too. You won’t
    believe me, but I also got constantly distracted
    by those icons which showed up next to each entry.</P>

    <P>If a website didn’t add a proper icon for that, I couldn’t help
    myself and wrote them in regards to freaking add one.</P>

    <H2>Enough!</H2>

    <P>Now I’m done with it, I don’t want to spend any more time
    with passwords. Besides that: it’s 2015. Our software
    should figure out all of that by itself, don’t you think
    so too? So I did it. I went back to where it
    all started: the iCloud keychain.</P>

    <P>Two days ago, I had lunch with one of my bosses and regarding
    my question if he’s using 1Password for personal
    purposes, he denied and told me about the built-in keychain
    functionality of iCloud. Since I had many bad experiences with it
    until that day, I looked at him like he was
    crazy. I couldn’t really understand it. But then he told me
    about how seamlessly it got integrated into Safari and how
    easy both the creation of new passwords and the
    way of managing them is.</P>

    <P>On the same day, I decided to give it another try and also
    be up-to-date about what’s happening in this section of
    our industry. And I’m glad I did it. There’s one special thing
    that boils many of my remaining thoughts down to the
    essence: “It’s built to make it seem like there
    are no passwords at all”.</P>

    <P>I read that on the internet and it’s exactly what
    the iCloud keychain does better compared to 1Password or other
    competitors. Do you really think that a regular user wants
    to spent so much time filling out fields and
    ordering passwords into groups? No! And I also don’t think
    that this is what today’s software should
    do. It should think by itself and always be prepared to
    provide us with our data.</P>

    <P>And that’s exactly what Apple’s keychain functionality
    does: if you visit a website, the fields are already filled-out and
    the only thing that’s left to be done by the user
    is clicking the submission button. No need for crappy-integrated 1Password
    options. It’s the same with saving passwords: I don’t
    need a third-party extension which pops up every time it
    thinks it’s needed. It just works. All password fields on
    a login form show a little key which I only need to hit once
    to be able to choose or save a password.</P>

    <H2>For Developers</H2>

    <P>After doing a bit of research, I also found out that Apple
    now officially provides a way for third party app
    developers to access the keychain. As far as I know, the developer
    only needs to verify the ownership of the domain of
    his website and all users will be able to choose the related password directly out of
    a <Link href="https://9to5mac.com/2014/06/13/ios-8-lets-apps-access-safari-autofill-credentials-for-quick-easy-login/">selection popup</Link>. So
    easy, try it! I thing right know is the right time to make the change if you’re still
    using a third-party password manager.</P>

    <P>Just admit it: Apple doesn’t need to be that fast at making
    their software great. Because as soon as they actually
    make significant changes to it, it’s incomparable to
    third-party-apps when it comes to integration. Simply because they’re able
    to adjust the core of iOS like they want it. Of course
    that’s only one part of making great apps (besides the
    design and the actual features), but it this case, it’s the
    most important one.</P>

    <P>Regular people don’t spend time thinking about ordering
    their passwords. They want it to just work! And that’s the area
    in which we need to improve our products too.</P>

    <H2>For Teams</H2>

    <P>Oh.</P>

    <P>I forgot to mention that this solution does work
    perfectly for personal use, but teams will definitely have to
    stick to apps like <Link href="https://1password.com/teams/">1Password</Link> (since your team members
    probably won’t agree to use a single iCloud account).</P>
  </Post>
)
