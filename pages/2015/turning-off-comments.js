// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'
import {H2} from '../../components/heading'
import {Ref, FootNotes, Note} from '../../components/footnotes'
import Quote from '../../components/quote'
import HR from '../../components/hr'

export default () => (
  <Post>
    <Meta id="turning-off-comments"/>

    <P>Since I started this blog using Jekyll, I knew this
    day would come. And yeah, here it is! Because this
    is a static site, there{`'`}s no way to implement a neat
    commenting system without doing many things
    client-side. Since I thought allowing people to share
    their knowledge on my site was a good
    thing, I{`'`}ve embedded Disqus - a really convenient
    way to manage comments.</P>

    <P>But over time, I noticed a few things that bugged me
    on this constellation and I never felt really happy
    about the solution I put up for this problem. Thus
    there{`'`}s now time for a change:</P>

    <P>It{`'`}s not just about the time I{`'`}ve spend with
    moderating all those comments (that{`'`}s probably
    what you were thinking of, when you first saw
    the headline). Currently, I don{`'`}t need to use much
    of my time for this. But when looking at some other
    edges of this topic, you{`'`}ll quickly notice that
    removing comments from my site is way better than keeping them.</P>

    <H2>Your Time Is Valued</H2>

    <P>Right now, there{`'`}s so much stuff happening on the web. And
    I know that I{`'`}m definitely not the only person
    you{`'`}re drawing attention to, which is why I don{`'`}t want
    to artificially encourage you to spent more time
    on a specific text if you actually want to move on
    and read the next one (or even leave my site).</P>

    <P>After finishing an article, you shouldn{`'`}t be distracted
    with the decision wether to continue scrolling down and
    reading all of those comments or to just leave the page or
    read another article. I want to give people the chance
    to keep up with all the ideas and tips that I{`'`}m putting
    up here to make their work easier and more fun.</P>

    <P>... Instead of wasting their time for no reason.</P>

    <H2>The Faster, the Better</H2>

    <P>Let{`'`}s face it: Disqus is a performance-disaster. I only
    need a simple list of comments including a text
    field which allows people to easily add their own
    opinion. But that{`'`}s not what I got and also not what
    I will ever get if I keep using this service.</P>

    <P>I don{`'`}t exactly know why they don{`'`}t care that much about
    speed, but maybe it has something to do with their own
    expectations: Maybe they just want to provide a
    convenient way for visitors to leave a comment. But if
    you ask me, loading ca. <b>21 uncached scripts, icon-fonts, images
    and stylesheets</b> (which all together make around
    253KB) + building a websocket-connection is just too much<Ref id="1"/>.</P>

    <P>Although they{`'`}re loading so much stuff for just one
    tool, they didn{`'`}t even manage to have the commenting input
    resized when the user switches to landscape-mode on mobile devices.</P>

    <P>Especially as a defender of the open and
    fast web, I simply can{`'`}t affort this amount of
    garbage on my site. If I speak or write about
    something, I want to be able to account for it.</P>

    <H2>How Disqus Makes Money</H2>

    <P>When I first started using the service, I kept searching
    for something like a {`"`}premium{`"`} or {`"`}pro{`"`} package, because I wanted
    to hide this damn branding at the bottom of the
    iframe (which itself is another argument for removing the system).</P>

    <P>But sadly, I didn{`'`}t find one. Now, a few months
    later, I found out that Disqus did so once, but basically
    doesn{`'`}t do it like this anyway. They{`'`}re now providing a
    VIP service targeted at very large sites like Fox, IGN, etc. - but do
    you really think this could pay all the
    stuff they need to run it? No.</P>

    <P>I trust them when they say the following in
    their <Link href="http://bit.ly/2jcFuwV">Privacy Policy</Link>:</P>

    <Quote>We will not rent or sell your Personally Identifiable
    Information to third parties outside Disqus and its controlled
    subsidiaries and affiliates without your consent...</Quote>

    <P>But that doesn{`'`}t mean they won{`'`}t use the tracking data
    within their own company to generate targeted ads and
    show them on your site, if you integrate their service. And
    I figured out that this is something that I
    can{`'`}t allow on my site anymore.</P>

    <P>And while we{`'`}re on it: Yes, I use Google Analytics to
    monitor my site and find out which pages take too much
    time to load (and also on which device and browser). But I
    will probably also remove this service from my site in
    the future, as soon as I find out about another app
    which does the same while agreeing to not use the
    visitors data for creating targeted ads.</P>

    <P>I also contacted GitHub a while ago and asked them to
    implement a tiny analytics tool for GitHub pages within
    the already existing tool for tracking visitors which
    you get on repos (let{`'`}s hope they will soon spin
    this something like this up).</P>

    <H2>How Does the Future Look Like?</H2>

    <P>Firstly, I usually post my articles
    on <Link href="https://news.ycombinator.com/">Hacker News</Link>, as
    well as on <Link href="https://www.designernews.co/">Designer News</Link> (and
    if I don{`'`}t do it, you{`'`}re of course free to do so). If
    you don{`'`}t know them already: They{`'`}re platforms which you
    can also use to add your own thoughts on a specific post
    of mine (e.g. on this one). Of course, you can also
    just write me on Twitter or via e-mail.</P>

    <P>Using this method, I also make sure that people are not
    confronted with the question if they should post their
    comment on the platform which led them to the article or
    on my site. I{`'`}m really looking forward to the release of
    Apple{`'`}s {`"`}News{`"`} app, maybe they will already provide
    a more convenient solution for this. And while we{`'`}re on
    it: If you already downloaded the beta of iOS 9, try
    searching for {`"`}Leo{`"`} within the News app 😅 - and let
    me know if you found me (I{`'`}m unfortunately not yet
    able to register for Apple{`'`}s new developer program
    to get the beta by myself, at least their site tells me this).</P>

    <P>Another great way to make room for your opinion is to simply
    quote the article on your own site and then let me know
    about it over social networks. If I encounter a great
    comment, I will make sure to publish it
    here (including my own statement).</P>

    <HR/>

    <P>One of the great people who inspired me to do this is John
    Gruber from Daring Fireball. He also had a few of the thoughts
    I wrote about above and
    already <Link href="http://shawnblanc.net/2007/07/why-daring-fireball-is-comment-free/">disabled</Link> them
    many years ago.</P>

    <P>I hope you{`'`}re not that disappointed about the fact that you
    wont be able to leave comments directly on my site anymore, but
    this is a step I definitely need to make. I also still value
    your opinion, only the way how you can interact with me changed, nothing else.</P>

    <FootNotes>
      <Note id="1">I know that many of them are only loaded after
      the site itself has finished loading completely, but for
      me, the difference that this fact actually makes, is fairly small.</Note>
    </FootNotes>
  </Post>
)
