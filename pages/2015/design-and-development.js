// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import {Ref, FootNotes, Note} from '../../components/footnotes'

export default () => (
  <Post>
    <Meta id="design-and-development"/>

    <P>The two big Ds<Ref id="1"/> in the
    world{`'`}s most used connection-network. Completely
    different topics, but still one thing in the end. To me, it
    feels like the number of people who are doing development as
    well as design simultaneously is increasing
    rapidly. <b>Nobody wants to just be really good at one thing
    instead of being so-so great on two domains.</b></P>

    <P>When I ask them why, they mostly tell me that it{`'`}s good to know
    about development when you{`'`}re designing something, for
    example (or the other way around). Because then, you
    can shape the idea so that it{`'`}s easy to realize it
    with code - and I agree with them. I would also like
    to design more of my projects and while I learn from
    other people, I keep getting better in doing so.</P>

    <P>But I also noticed a bad aspect of the whole scenario: When I
    get an idea and I think it{`'`}s a great one, I often try
    to sketch something up and then make a screen-design out of it. The
    only problem with this approach is that while I try to
    design, my brain tries to shape the idea until it fits my development
    experiences & the knowledge I had at this time. It
    feels like my subconscious mind just cuts some parts off the initial idea.</P>

    <P>While talking about new projects and ideas with other
    people, I noticed that they{`'`}re also affected by this scenario. And I
    think many other people who work in two different topics also
    apply this way of thinking while making up an idea. So, what
    is this article for? Well, I just want you to be in the know about that.</P>

    <P>Please don{`'`}t let the limits we{`'`}re currently facing (in the
    development-area for example) or the borders of your experience
    cut off parts of your wonderful idea, it needs to fucking
    see the light of day <mark>without getting adapted</mark> to existing ones!</P>

    <FootNotes>
      <Note id="1">That{`'`}s what she said 😂 ... 😯</Note>
    </FootNotes>
  </Post>
)
