// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {Image} from '../../components/figure'
import HR from '../../components/hr'

export default () => (
  <Post>
    <Meta id="jekyll-to-medium"/>

    <P>I’m a huge fan of Open Source in general. Because of this
    love, I’ve decided to put my blog on GitHub using
    Jekyll and some Markdown. However I think it’s time to move
    into a different direction.</P>

    <P>Medium has been on my radar since it went online. But until now, I wasn’t
    quite sure if it will last the journey and not
    get bought by one of those big players in our industry. Of course I’ll never
    be fully sure if my stories have found a new, independent
    place to grow. But since it looks and works so
    beautifully now, I’ll take that risk.</P>

    <P>The main reasons why I’ve decided to make the move, is, that writing
    posts “like a Hacker” (Jekyll’s most known motto) DOES make fun, but
    sadly often gets into your way of writing great pieces.</P>

    <P>Since it’s based on Git and plain code, there’s no real
    place to write. So far, I’ve been writing most of my
    posts in <Link href="https://ia.net/writer">iA Writer</Link>, a beautiful app for
    Mac OS and iOS that lets you write
    without distractions. But until now, I had to copy each post, move
    it into the repository and add all kinds of so-called <Link href="https://jekyllrb.com/docs/frontmatter/">Front Matter</Link> fields
    which defined the meta information of each post. Of
    course I also had to adjust the filename to make it compatible
    with Jekyll’s preferred way of parsing posts.</P>

    <P>Not to mention writing essays on the way: As I said, iA Writer DOES provide
    a iOS app. However there’s still this stupid workflow for actually
    deploying my posts. So all in all I still need to take my MacBook
    with me if I want to publish something. And that’s just not acceptable.</P>

    <P>Now that I’m on Medium, the only thing I need to do is
    wake one of my devices from sleep, open the app and start writing. Awesome!</P>

    <P>And the best thing about this: iA Writer now even
    provides an easy way to publish to Medium by simply clicking a menu item:</P>

    <Image src="/static/posts/2016/jekyll-to-medium/share.png"/>

    <P>All of those tiny workflow improvements make Medium a much
    more convenient platform to write on. And if you ask me, that’s one of the
    most important things to keep in mind when setting up your
    own blog: Nothing should get in your way while writing.</P>

    <P>Because if something does, you’ll loose both the fun that it
    makes and the ability to convert your thoughts into something helpful for others.</P>

    <HR/>

    <P>While I don’t yet know what I’ll be writing about here, you can probably
    expect a lot of technical talk about my projects and what I’ve learned. Besides of
    that, I might even republish a few of my older posts
    in here, if they seem like they’re not related to their time of publication to me.</P>

    <P>So, what can I say? “Stay tuned!”, I guess.</P>
  </Post>
)
