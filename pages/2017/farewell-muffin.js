// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'

export default () => (
  <Post>
    <Meta id="farewell-muffin"/>

    <P>Right after quitting
    school, I <Link href="/2016/first-muffin-update">started working</Link> on
    a tiny (but very big for a single person) tool named like
    one of my favourite types of cake: <Link href="http://muffin.cafe/">Muffin</Link>.</P>

    <P>It{`'`}s ambition was to be the WordPress of the JavaScript
    world and to provide developers with a
    full <Link href="/2016/second-muffin-update">tool belt</Link> for
    making the creation of new websites and apps as
    easy as a single command.</P>

    <P>Although I didn{`'`}t really knew much about running JS anywhere
    else then in the browser, as time passed, I discovered
    the various characteristics of the Node ecosystem
    that could make the app truly unique compared with the
    existing solutions. In turn, it gave me a chance to
    solve all kinds of problems with great packages and
    knowledge spread by helpful community members.</P>

    <P>Today I{`'`}m building all kinds of products with
    JavaScript and Node at one of the most innovate startups on top
    of the industry and I{`'`}m very glad that I had the
    time to figure out all of this valuable knowledge. But it{`'`}s just
    the tip of the iceberg and there{`'`}s still a
    lot left for me to understand.</P>

    <P>And that{`'`}s why I{`'`}m writing this article today!</P>

    <P>I noticed that creating things for ZEIT not only consumes most
    of my time, but it also often requires me to focus on a
    single big project without getting distracted by small
    things. That{`'`}s just the result of me being handed a lot
    of responsibility and I like it a lot!</P>

    <P>To make this process easier for me, I completely left Muffin
    out of the equation and it just sat around.</P>

    <P>I thought I could just continue with it sometime in the
    future, but it honestly looks like this won{`'`}t happen. And because
    I don{`'`}t just want to let all of its fans down without telling them
    why, I decided to write this article.</P>

    <P>Since all of its parts are licensed under MIT, everyone
    can just fork it and maybe even continue maintaining it. But
    starting today, I personally won{`'`}t write any more code for it.</P>

    <P>The <Link href="https://github.com/muffin">code</Link> and
    the <Link href="http://muffin.cafe/">website</Link> will stay online though!</P>

    <P>Wrapping up this post, I{`'`}d like to thank all people who helped
    me shape the application with useful critique (especially my old
    teams for sharing their experience with me).</P>

    <P>Onto a new adventure!</P>
  </Post>
)
