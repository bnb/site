// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'
import {Ref, FootNotes, Note} from '../../components/footnotes'

export default () => (
  <Post>
    <Meta id="keep-going-apple"/>

    <P>Over the last few years, the company I{`'`}m talking about
    didn{`'`}t contribute much when it comes to pushing the web
    forward (at least as far as I know). Their web browser {`"`}Safari{`"`} indeed
    got a new look on OS X Yosemite, but they didn{`'`}t change
    much regarding web standard support or even new features for developers.</P>

    <P>While other browsers like Chrome or Firefox quickly introduced
    many new technologies, Safari kept being stuck in the same place. Part
    of the reason for this is probably the slow release-cycle
    which only comes into play when a new OS update is released. We, as
    developers, we{`'`}re facing an app which wasn{`'`}t able to keep up
    with the new stuff. However, many of us wanted to use it
    because it{`'`}s just so beatifully integrated into Apple{`'`}s other
    products (bookmarks, read-later-articles and RSS-feeds are
    simply synced via iCloud and therefore available on all devices). I
    also think you{`'`}ll agree with me when I say that it just looks gorgeous.</P>

    <P>Since Safari is pre-installed on OS X as well as on iOS, you
    might assume that the number of people who are actually using it
    in their everyday life is very
    huge; but it{`'`}s <Link href="http://www.w3schools.com/browsers/browsers_stats.asp">not like that</Link>. And
    why? Well, even regular users started noticing that other browsers
    like the one from Google provide them with a more convenient way
    of browsing. There are many reasons for this. Firstly, it{`'`}s fast
    as hell. Secondly, it{`'`}s available on multiple platforms
    which opens it up for a wider audience. And thirdly, there
    are much more extensions for it available.</P>

    <P>And please, also don{`'`}t forget about the effort that Google made
    to promote it{`'`}s browser. As you might still know, they{`'`}ve created hundreds
    of different ads and scattered them all over the web - they even
    bought space for
    their <Link href="https://youtu.be/N8gvf60RWgw">TV ads</Link>. But now, after many
    years, I feel like Apple finally decided to pay more attention to
    the whole web thing. They{`'`}ve announced the support for many
    new web-technologies like unprefixed CSS 3 properties and
    ECMAScript 6 contents. Besides that, they even re-designed the web
    inspector and added a some new Force Touch Events to support
    the whole functionality of the new Trackpad. — Not to mention
    that they{`'`}ll even open source Swift<Ref id="1"/>.</P>

    <P>And no, that wasn{`'`}t even the full list of things they{`'`}ve implemented
    in Safari 9. I came to the decision that explaining them all in full
    detail wouldn{`'`}t be wort it since Apple already created a
    neat documentation for all implementations. If that{`'`}s not
    enough for you, I recommend
    watching <Link href="https://developer.apple.com/videos/wwdc/2015/?id=501">the video</Link> of
    the last conference about this topic.</P>

    <P>While I{`'`}m very happy about this huge step into the right
    direction, I also hope that they won{`'`}t stop here and let Safari fall
    asleep a second time. They really need to make sure to keep up
    with all the stuff that is happening around them if they
    want to compete against others in this scene.</P>

    <P>Let{`'`}s hope the best!</P>

    <FootNotes>
      <Note id="1">Some people said that Apple might use it
      to create a self-made alternative to JavaScript (since it{`'`}s now
      open-source and the Syntax not differs that much
      from JS). But if you ask me, that will probably never happen. So
      many people out there contributed so much to
      the growth of JS, it{`'`}s very unlikely that a single company could
      replace it with something that was initially created to
      be a compiled language.</Note>
    </FootNotes>
  </Post>
)
