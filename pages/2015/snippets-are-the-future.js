// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'
import {Ref, FootNotes, Note} from '../../components/footnotes'

export default () => (
  <Post>
    <Meta id="snippets-are-the-future"/>

    <P>The last time I wrote about this
    problem (in <Link href="/2015/developer-friendliness">this post</Link>), I
    was thinking that the web just isn{`'`}t built for the maximum
    performance when using pre-made libraries from other
    people. And yes, I still think that{`'`}s a major obstacle for
    which we still need to find a proper fix.</P>

    <P>Okay, let me explain that before we go on. To me, it
    looks like developers are caring more and more about frameworks
    and pretty libraries which speed up the development-process
    and enable them to do more in less time (which of course saves
    money, but that{`'`}s not why were here, right?). The
    disadvantage of this method is that while they{`'`}re doing
    so, they{`'`}re losing the sense for being able to squish out the
    maximum of performance. This leads to a much
    slower www, but helps agencys - and other companies that are
    creating websites for money - to finish more
    orders within the same time.</P>

    <P>But I{`'`}m not here to help you with doing so. I{`'`}m here to
    encourage you to think about how we can make the web
    faster while keeping the same level of awesomeness<Ref id="1"/>.</P>

    <P>Great, then let{`'`}s talk about the best compromise I found
    out about: <b>Snippets</b>. While allowing developers to use
    code from other coders, we still keep the mountain of
    unnecessary clutter that{`'`}s being loaded on each page-request as
    tiny as possible. Stop making clunky libraries, start
    sharing snippets! This will avoid many unused
    functions, helpers, etc. and reduce the size of the code that{`'`}s getting
    presented to the client (which speeds up the
    painting-process within the browser).</P>

    <P>Cool, huh? Yes, it is.<br/>But I know, it{`'`}s far away from perfect.</P>

    <P>But in my view, it{`'`}s currently the biggest place for our
    fat, effort-shy, fast-clearance-loving asses on the fine
    line between performance and developer-friendliness. Trust me.</P>

    <P><i>{`"`}Why isn{`'`}t it perfect?{`"`}</i>, you may ask. Easy: While mixing together
    multiple snippets and self-made code, there{`'`}s still the
    possibility of the same code occurring multiple times. To get
    the best result, those occurrences should normally be combined
    into functions, that{`'`}s why they{`'`}re here (the functions). But
    before we build an extremely complex engine that combines
    multiple occurrences of the same code into neat
    functions (or do this by ourselfes, of course), there{`'`}s
    no {`"`}perfect{`"`} answer to this. But however, please try my
    suggestion, you{`'`}ll see that it{`'`}s both convenient and performance-improving.</P>

    <FootNotes>
      <Note id="1">We shouldn{`'`}t limit our options in this area, developers
      should still be able to build completely
      crazy, dynamic and stunning web-apps.</Note>
    </FootNotes>
  </Post>
)
