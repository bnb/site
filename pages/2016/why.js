// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import {Image} from '../../components/figure'
import HR from '../../components/hr'

export default () => (
  <Post>
    <Image src="/static/posts/2016/why/cover.png"/>
    <Meta title="Why I Do What I Do" date="08-03-2016"/>

    <P>I lately thought a bit about what actually drives me
    to keep doing what I do. Yes, I know that I definitely want to
    go on with it, but I nevertheless wanted to know <b>why</b>.</P>

    <P>And since it might be helpful for others who
    aren’t sure if they want to go with what they’re doing, here it is:</P>

    <HR/>

    <P>As our society grew heavily over the last
    centuries, we were introduced to a lot of complicated
    mechanisms in our everyday life.</P>

    <P>Although most of them were initially designed to protect
    both our freedom and our ability to change our
    environment based on our own expectations and ideas while still
    paying attention to each resident’s own opinion, they
    rather chained most of us to our desks for long hours. Instead of
    allowing everyone to do what they want.</P>

    <P>Technology solves these problems. We’re building more and
    more hard- and software that is able to do most of the boring work by
    itself, so that we’re able to enjoy our valuable time.</P>
  </Post>
)
