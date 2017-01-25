// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'
import {H2} from '../../components/heading'
import {Ref, FootNotes, Note} from '../../components/footnotes'
import {Snippet, Inline} from '../../components/code'

export default () => (
  <Post>
    <Meta id="iframes-external-content"/>

    <P>If you{`'`}re moving around the web once in a while, you certainly
    already know about them: iframes. They have been accompanying
    us since Netscape 2 and still haven{`'`}t lost much of their
    popularity (although there are many other ways to load content
    of other websites into your site). Even big players
    like Twitter, Facebook or Google are using them to provide
    easy implementations of their data for developers.</P>

    <P>The reason behind that is, that iframes have been the
    best way to embed content that can{`'`}t be modified
    by the existing styling of the site which it is
    getting loaded in. — But no longer!</P>

    <H2>CSS3 to the Rescue...!</H2>

    <P>While digging through Mozilla{`'`}s CSS docs, I was searching
    for a proper way to allow other developers to use a
    JS library<Ref id="1"/> I was planning without needing to embed
    an iframe. It{`'`}s the same problem that Twitter has
    with it{`'`}s <Link href="https://dev.twitter.com/web/embedded-tweets">embedded tweets</Link>, I
    just don{`'`}t want my plugin{`'`}s styling to get changed by the existing.</P>

    <P>So after looking around a bit, I
    found <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/all">all</Link>. I
    literally cried tears of joy. The guys over at W3C finally
    managed to create a stable solution to reset all stylings
    for an element. And that{`'`}s exactly what the
    property does, in a nutshell.</P>

    <P>It helps you to get rid of every decleration. And when I
    say every, I mean every. You might think it resets the styling
    to match the default formatting... Hehe, nope! Every
    property is getting removed.</P>

    <P>Okay, let me explain that with an example:</P>

    <Snippet language="css">{`h1 {
  all: unset;
}`}</Snippet>

    <P>... doesn{`'`}t just change the heading{`'`}s (let{`'`}s say) font-size
    to 2em (which is the default one in
    HTML5). <i>No!</i> It set{`'`}s the font size to 100%.</P>

    <P>Now you got it, right? Cool! Then let{`'`}s talk about the
    possible cases in which we could use this property. One could be
    to solve the problem with iframes: They require your
    content to be completely put together in a HTML document
    on your server, before you can serve it. Then people are
    able to embed it into their site. But what if you don{`'`}t want that?</P>

    <P>Instead of providing a fixed iframe for their embedded
    tweets, Twitter (as an example) could also supply developers with
    a JS script that pulls the tweet through their JSON API and
    then put it into a simple div (or maybe into an <Inline>blockquote</Inline> tag, if
    you want it to be semantic). There would only be one
    problem: Twitter couldn{`'`}t provide a pre-defined styling for
    the embedded Tweet because it would be overridden.</P>

    <P>But they could! — If they start using the {`'`}all{`'`}-property now!</P>

    <P>Doing so, would remove all styles set by the site itself and
    give Twitter the change to apply their own beautiful tweet-like style.</P>

    <H2>Other Use-Cases</H2>

    <P>As I already indicated, using the property as a faster alternative
    for iframes is not the only possible case where it can find
    application. Just think about how great it would be to be able
    to code a jQuery plugin which styles can{`'`}t be overriden, for example.</P>

    <P>As many CSS properties I like to talk of, this one is
    very new<Ref id="2"/>. Nevertheless all major browsers (except Safari of
    course) are already able to interpret it. So
    let{`'`}s go, start using it today!</P>

    <FootNotes>
      <Note id="1">It{`'`}s written in ES6 and will be
      published soon, so stay up-to-date! 😉</Note>

      <Note id="2">No, seriously. It{`'`}s not even
      on <Link href="http://caniuse.com/#search=all">Can I Use</Link>.</Note>
    </FootNotes>
  </Post>
)
