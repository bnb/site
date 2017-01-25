// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {H2} from '../../components/heading'
import HR from '../../components/hr'
import Quote from '../../components/quote'

export default () => (
  <Post>
    <Meta id="next-episode"/>

    <P>More than two months have passed since I wrote
    my last post. In those two months, a lot of stuff happened:</P>

    <P>I’ve decided to leave my old
    employer <Link href="https://medienreaktor.de">medienreaktor</Link> in favour of going
    a completely different way than the one someone
    in my age would normally go. My initial idea was to start
    freelancing, and that’s also what I’m currently doing. However, I’m
    not really sure if it will stay that way. So instead of just
    going on with my work, I’ve also decided to pull some additional levers.</P>

    <P>And in the next few months, one of those might turn
    out to be better for me than just playing the lone wolf and doing
    everything alone. While I’m very proud to finally be able
    to pay for my own life by myself, I also miss how much
    fun it is to work together with a team. Nevertheless, I wanted
    to grow into a different, extended direction.</P>

    <P>So it’s still the best decision I could make. I finally have
    more time to focus on the new stuff that’s currently happening on the
    web. I’ve learned a lot about JavaScript’s latest
    standard (ES2015), web tooling, how to create such tools and
    also finally strengthened my design skills.</P>

    <P>All in all, I feel like I have more time to enjoy what
    really matters to be: Building great software.</P>

    <P>However, I definitely need to find a way to combine this new way of
    being with a better social environment than the one I currently have. It does
    make an awful lot of fun to write and design such things, but
    it makes even more fun to do so with a awesome team.</P>

    <P>But as I said: The next few months will decide how I proceed with this.</P>

    <H2>Muffin</H2>

    <P>Another big thing that happened to my life. It took me nearly
    half a year to convert my thoughts and ideas into a working product. At
    first, it was really tough. And when I say “really”, I
    mean “really”. I’ve created a lot of things on the web, but this one
    is without doubt the biggest one of all.</P>

    <P>More than four complete iterations of the design, multiple rewrites
    of the whole codebase and countless cups of tea went into it. But
    all in all, it was definitely worth it.</P>

    <P>If you want to learn more about what Muffin actually does and why
    it’s awesome, take a read at <Link href="http://muffin.cafe">this</Link>. If you’re more into the design
    part, rather than into how it works, check out
    the <Link href="https://dribbble.com/notquiteleo">Dribbble project</Link>.</P>

    <HR/>

    <P>Thanks to my new schedule, I was also able to finally start
    journaling again. For the past months, it was something I simply
    didn’t have enough time for. Text seems simple, if you can
    just read it. But if you’re writing, it consumes a lot of effort and time.</P>

    <P>Nevertheless, it’s awesome to be able to look back on what
    you’ve done in your life. And that outweighs all of
    the trouble. It allows you to...</P>

    <Quote by="Anaïs Nin">...taste life twice, in the moment and in retrospect.</Quote>

    <P>So if you haven’t tried it already, you definitely need to. Just
    grab the latest version of the beautiful app Day One
    and start right over today!</P>
  </Post>
)
