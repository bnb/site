// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'
import {Inline} from '../../components/code'
import {H2} from '../../components/heading'
import {UL, LI} from '../../components/list'

export default () => (
  <Post>
    <Meta id="css-grid"/>

    <P>A few minutes ago, I read a <Link href="http://bit.ly/2iQvY4g">post</Link> on
    Designer News that was created by a guy that wanted to create
    another flexbox-based grid framework for CSS. He probably
    knew that there are already many of them out there. But
    that didn{`'`}t held him back from asking for interest in another one.</P>

    <P>The reason behind that is for sure that he just likes coding
    and also sees a thin gap for really great grid
    frameworks. Because I want people to stay motivated on
    their idea (no matter how many other guys already
    made it happen), I generally think it{`'`}s not a bad
    idea to create another one. <b>BUT</b> only if he{`'`}s doing
    it for the purpose of learning and not for other people. 😉</P>

    <P><b>Why?</b> Because the need for those kinds of frameworks
    will soon be gone forever. — Okay, that might be a
    bit confusing for you know, so let{`'`}s start with a quick explanation:</P>

    <P>I don{`'`}t know how you do it, but since a few years I have
    been using grid frameworks to align content properly and
    create responsive web layouts. With the time, a couple of
    aspects on the initial idea have changed: Websites are now
    mostly being designed mobile-first (fortunately) and
    flexbox allowed us to reach our goal of creating a effective
    CSS-layout more quickly by providing us with properties
    that can help us to equate the height of columns
    lined up in a row without knowing their content{`'`}s size
    or using a mushy JS mixture that does this job.</P>

    <P>Until now, this was pretty much the best way to create a proper
    website layout (without writing a custom grid of course). Fortunately,
    we{`'`}re now finally getting redeemed from this heavy
    performance load - thanks to <Inline>grid</Inline>.</P>

    <H2>{`What's So Good about It?`}</H2>

    <P>It{`'`}s basically
    a <Link href="http://www.w3.org/TR/css-grid-1/">new CSS method</Link> that allows us
    to easily create beautiful web-layouts without a huge
    grid framework. No matter how tiny the budget of the
    client and how short your available time will be, <Inline>grid</Inline> provides
    you with many different properties which tell the browser
    how to position an element within the design.</P>

    <P>And the best thing about that: It seems like the browser
    just doesn{`'`}t care about the position of the element within
    the HTML code. For example, a column that you want to show
    on the top right edge of the browser window can be placed
    right before the body tag closes (after all other elements).</P>

    <P>It{`'`}s kind of like using <Inline>position: absolute</Inline> but
    without needing to specify the position of
    the element with pixels. <i>The grid will figure it
    out by itself.</i> — W3C describes this
    behaviour as <Link href="http://www.w3.org/TR/css-grid-1/#source-independence">source-order independence</Link>.</P>

    <H2>Browser Support</H2>

    <P>Because it{`'`}s a pretty new technology, there{`'`}s currently only
    one browser that supports it by default: You won{`'`}t believe
    me if I tell you ... *laughs* ... I just ... okay, it{`'`}s our always
    beloved friend, the Internet Explorer. But no
    worries, you won{`'`}t completely sink into confusion here: You still
    need to use the <Inline>-ms</Inline> prefix. Now it
    makes a bit more sense, right? *laughs*</P>

    <P>Anyway. If you don{`'`}t use IE (*shame on you*) you{`'`}re also
    able to enable it through the {`"`}experimental Web
    Platform features{`"`} flag
    in <Inline>chrome://flags</Inline> within Chrome or Opera.</P>

    <H2>So Just an Alternative to Flexbox?</H2>

    <P><b>No!</b> — Don{`'`}t start running and yelling {`'`}Fuck you
    flexbox{`'`} around in your office, WE STILL NEED IT!</P>

    <P>Those two properties are meant to be used for two
    completely different cases. The first - <Inline>display: grid</Inline> - can
    be used to create the general layout of
    your web- app or -site but not to align the {`"`}boxes{`"`} that contain
    the content. This is where `display: flex` claims
    your attention. It should be used to put all columns
    in one row to the same height for example.</P>

    <P>Okay, let{`'`}s sum up for which each property should be used:</P>

    <UL>
      <LI><b>grid:</b> — Layout</LI>
      <LI><b>flex:</b> — Content</LI>
    </UL>

    <P>I think that{`'`}s pretty easy to understand, isn{`'`}t it? 😸</P>

    <P>So what are you waiting for? Open Chrome, enable that
    experimental flag and try the shit out of <Inline>grid</Inline>! If you get
    stuck or simply want to know more about how the property
    exactly works and how it should be used, take a look at
    the <Link href="http://www.w3.org/TR/css-grid-1/">W3C documentation</Link>.</P>

    <P>There are much more use cases for it to discover and
    we should all participate in it{`'`}s development. I think
    it{`'`}s a really huge step into the direction of a world
    that{`'`}s free of performance- and memory-draining CSS frameworks.</P>
  </Post>
)
