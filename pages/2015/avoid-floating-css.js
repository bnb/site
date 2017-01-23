// Packages
import CodePen from 'react-codepen'

// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Quote from '../../components/quote'
import {Snippet, Inline} from '../../components/code'
import {H2} from '../../components/heading'
import Link from '../../components/link'

const overline = {
  'text-decoration': 'overline'
}

export default () => (
  <Post>
    <Meta id="avoid-floating-css"/>

    <P>Do we still need to use it? Yes, the <Inline>float</Inline> property
    has been here for a really long time. I guess most
    of us used it for galleries, navigations
    and maybe also grids. But let{`'`}s be honest with
    ourselves, it{`'`}s a very uncomfortable way to
    align items one-after-another.</P>

    <P>Firstly, there{`'`}s this whole problem that the parent element
    of the aligned items will break down like an old house that{`'`}s currently
    being demolished by a demolition crane. <i>Okay, I{`'`}m digressing a bit, let{`'`}s
    move on.</i> So why are we still using it? I mean, pushing an inline
    image to the side and letting other
    elements (like paragraphs) flow around it is still
    a great use-case. But it clearly generates to much
    hassle in the end, if you ask me - you need to take
    care of too much other aspects like clearing floats and
    making sure they don{`'`}t affect other elements.</P>

    <P>The answer is: No, we don{`'`}t need to use this
    method for columns within content-areas anymore, there
    are some other alternatives which are way more
    easy to use and therefore create much less pain while
    developing. Until now, many web-developers
    might have argued with the fact that property-values
    like <Inline>flex</Inline> are were badly supported by browsers. But
    this time is over, every major browser
    encourages you to use it now.</P>

    <P>If you{`'`}re also tired of floating elements and want to
    try out something new, continue reading. If not, you{`'`}re completely
    free to leave this page.</P>

    <P>Alright gentlemen, then start your engines now! Thanks to
    the cool people who are contributing to the web
    standards, I{`'`}m now able to show you a few other methods
    for aligning items that are much less pain-in-the-ass
    and also way easier to use.</P>

    <H2>Flexbox</H2>

    <P>Firstly, there{`'`}s <Inline>flex</Inline> - I told you about
    it earlier. It{`'`}s a convenient manner that allows you to position
    elements with different sizes easily by providing maximum and
    minimum widths or heights for example. It will also bring
    other sub-properties which are able to calculate the size
    of an item in dependence of the other ones around it.</P>

    <Quote author="Chris Coyier - CSS Tricks">The main idea behind the flex
    layout is to give the container the ability to alter its items{`'`} width or height
    in order to best fill the available space...</Quote>

    <P>The problem with our current box model is that we{`'`}re theoretically
    not able to set three elements to the exact same
    width, for example. For this, you would technically need to
    set a width of 33,<span style={overline}>3</span>% for
    each of them (100% divided into 3 columns), and
    it{`'`}s neither possible to set periodical numbers in CSS, nor
    is it useful. Sure, there{`'`}s a practical solution for that:</P>

    <P>Browsers are built to figure things like this out and close
    the gap between theory & practice. They will always size
    the items until they{`'`}re completely equally of width. But in
    my view, that{`'`}s just a messy solution and not stable for
    the future. And yes, that{`'`}s where <Inline>flex</Inline> comes in.</P>

    <P>There are a few more things that I especially like on this
    property, everything is less confusing with it. For example, the
    container{`'`}s margins don{`'`}t collapse with the margins
    of its child elements. And even better: The parent element
    doesn{`'`}t suddenly loose it{`'`}s height and the display-order
    of it{`'`}s children is completely independent of their order
    in the source code.</P>

    <P>To start using this method now, just try it{`'`}s easy syntax
    and add the following to the parent element:</P>

    <Snippet language="css">{`display: -webkit-flex;
display: block;`}</Snippet>

    <P>For the first steps, there{`'`}s absolutely no need to add
    attributes to the child items. They will magically start
    reacting to this change and will immediately line up one
    after another. If the content elements of the container
    aren{`'`}t modified in any other way, it will look like this:</P>

    <CodePen user="mindrun" hash="1becc47f9b6b90d3dad30649e061ddbc" height="240" theme="15948"/>

    <P>But beware, there are many other cool properties
    like <Inline>justify-content</Inline> (which I also used to
    center the items in this
    preview), <Inline>align-self</Inline> and <Inline>order</Inline>. If
    you want to learn more about how to exactly use
    them, take a glimpse on
    Mozilla{`'`}s <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex">documentation</Link> (the
    other related properties are shown on the left there).</P>

    <P>However, watch out! In the current state of
    art, the <Inline>flex</Inline> property is supported
    on most browsers (like I already said), but you still need to
    use prefixes when firing it up in Chrome or Safari
    for example. The confusing thing about that is that the main
    property wants you to insert the prefix within the
    value (<Inline>-webkit-flex</Inline>) and not before
    the key (just take a look on the code example up there). All
    other properties can generally be prefixed as
    usual (e.g. <Inline>-webkit-justify-content: center</Inline>).</P>

    <H2>Blocks, but Inline</H2>

    <P>Yes, that{`'`}s kind of a weird heading but describes
    exactly what I want to talk about now: The <Inline>inline-block</Inline> value
    used in combination with the <Inline>display</Inline> property. Sure, you
    might already now about it <i>(What am I talking
    about, of course you do...)</i>, but have you ever thought
    about using it as an alternative for aligning
    columns? I mean, that{`'`}s the use-case for which you
    perhaps needed floats before, right?</P>

    <P>Okay then. I will now try to be as direct as possible when
    presenting you the pros and cons of this property. First
    off, we need to talk about whitespace, one of the
    disadvantages of this method:</P>

    <P>When setting up a portion of clean HTML code, you{`'`}ll probably
    make use of several great indention options to make the code
    easily readable. That means, you{`'`}ll put each child element
    into a new line instead of writing them all successively. And
    that{`'`}s great, please don{`'`}t do it otherwise! However, this
    indention will generate irritating space-characters between
    the elements in the output — look here:</P>

    <CodePen user="mindrun" hash="cd4a213638114aea89cbd3137b36bb19" height="240" theme="15948"/>

    <P>But of course we neither need nor want them to show up. They{`'`}re just
    completely useless when creating columns. To fix this
    issue, we need to set <Inline>font-size</Inline> to <Inline>0</Inline> or put all items
    in one line within the code. Well, you might have
    already noticed it: That{`'`}s also a hacky solution, isn{`'`}t it? And
    not something that has been covered by the creators of
    this property, so it might also be inappropriate to use
    this value for columns (I guess that{`'`}s were the opinions
    differ. Many people are arguing that this is something
    that can be overlooked without worries, other people
    might say it{`'`}s clear that it{`'`}s not the right property for this case).</P>

    <P>Anyway, don{`'`}t hold yourself back from using it just because it
    needs some more adjustments to work
    properly (this are my 2 cents). We need to use things for
    different purposes other than they have been made for and
    try them out in various scenarios to find out what we{`'`}re in
    need for and to push the web forward.</P>

    <P>In contrast to flex, the <Inline>inline-block</Inline> value doesn{`'`}t
    provide you with any other cool property which you could
    use to align the items in a special way. However, it allows
    you to treat the content elements like text when it comes
    to positioning (since they{`'`}re displayed inline). For
    example, you can push them into the left or right edge
    or the middle by using <Inline>text-align</Inline>. You could also
    use properties like <Inline>line-height</Inline> to equal the heights
    of all elements inside the container (that also depends
    on if they own padding, since it{`'`}s extending the line-height).</P>

    <P>I{`'`}m sure the most of you already know everything about this
    value, since it{`'`}s also being used for various other use-cases. But
    if you don{`'`}t, read more about
    it <Link href="http://robertnyman.com/2010/02/24/css-display-inline-block-why-it-rocks-and-why-it-sucks/">here</Link> (the
    official documentations are not really helpful now, since
    they{`'`}re too abstract for you, I guess).</P>

    <H2>Conclusion</H2>

    <P>My indention behind this article was clearly not to provide
    you with a complete guide on how to use those properties. It
    was rather a collection of recommondations you could
    use instead of the old floating-method. If I inspired
    you to think about these alternatives, I{`'`}m happy.</P>

    <P>What you should also remember is that these properties
    have initially been designed to provide easy solutions
    for creating columns within a content-area (at least
    that{`'`}s what I heard from other people and what my
    experiences told me) and not for creating complete layouts (you
    should use <Link href="/2015/css-grid">grids</Link> for this). And
    yes, I{`'`}m talking of the future. Currently, you
    would probably need to use those properties for
    layouting too, because <Inline>grid</Inline> isn{`'`}t fully ready for production yet.</P>
  </Post>
)
