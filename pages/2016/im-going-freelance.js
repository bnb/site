// Packages
import Head from 'next/head'

// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import {H1, H2, H3} from '../../components/heading'
import {Image} from '../../components/figure'
import Link from '../../components/link'
import Meta from '../../components/meta'

export default () => (
  <Post>
    <Meta title="I’m Going Freelance" date="May 6, 2016" />

    <P>It was last year when it happened: Just before Christmas, I’ve
    slowly noticed that I wouldn’t be able to continue working
    at my <Link href="https://medienreaktor.de">previous employer</Link>. Not only
    have I been rather less satisfied with what I did there, but I simply
    had a lot of side-projects going on as well.</P>

    <P>I started working there while still attending school. But in
    the end, I knew I either had to stop doing my own stuff to be able to focus
    on working at the agency, or the other way around.</P>

    <P>The days around that time have been really hard for
    me: Firstly, I didn’t just wanted to let the guys down who offered me
    my first in-house job. Not just that, they’ve even prepared
    themselves for training me. I would have been the first trainee there!</P>

    <P>So while I still wasn’t sure whether or not this job would
    be the perfect one for me, I had to watch them do all kinds of time-expensive
    things: Finding a proper school for me and training their team
    members for being able to educate me, for example.</P>

    <P>Then, somewhere in the middle of that, I started feeling the pressure
    of decision on my shoulders. I didn’t knew what the right door was, but
    I definitely knew that I wouldn’t be able to go through both: The effort
    of running a company while working full-time for another one
    is simply too high as that I could have went on with it.</P>

    <H2>The Decision</H2>

    <P>In the end of December last year, I finally came to the conclusion that I
    rather wanted to run my own business instead of someone else’s.</P>

    <P>So after letting my bosses know, I’ve packed all of my stuff and
    said “Goodbye”. Not just to a group of people I’ve worked with, but rather
    to a bunch of friends who helped me grow and get better.</P>

    <P>In the following weeks, I’ve managed to create some really awesome projects
    for my existing clients. But at the same time, I privately
    struggled of not having a fixed schedule anymore: I went to bed very late
    and woke up at the time of lunch.</P>

    <P>But thankfully, I’ve managed to figure out the things from
    which these kinds of problems spawned from and also how to get rid of them.</P>

    <H2>December? Why Didn't You Tell Us Earlier?</H2>

    <P>Because of the things I’ve mentioned above, I wasn’t even sure
    if I wanted to go on with this. So I’ve told myself: Let’s rather
    see how it goes and then go from there.</P>

    <P>Now, after all of the legal business stuff has been set up
    properly, nearly half a year passed and a few people even offered
    me a chance to work for their own companies, I’m ready.</P>

    <P>So what now? Yep, I’m going freelance!</P>

    <P>However, you’re also free to call it a “startup”. Because although
    my main income is currently the work for others, I’ve already
    started working on some secret software projects which I’m going
    to release in the future.</P>

    <P>All in all, my long-term plan is to continue building more
    tools for creatives (like <Link href="http://muffin.cafe">muffin</Link>) and finally even
    finance my livelihood from that.</P>

    <P>But until then, I’m very proud to announce that I’m now officially
    hirable for work on an hourly basis.</P>

    <P>If you haven’t already checked out my work, simply go to my <Link href="/">site</Link> and
    click on one of platforms on the bottom. Depending on what you’re looking
    for, you can find my designs on <Link href="https://dribbble.com/notquiteleo">Dribbble</Link>, a lot of my code
    of <Link href="https://github.com/leo">GitHub</Link> and finally all of my latest essays
    on <Link href="https://medium.com/@leo">Medium</Link>. Every time I do something
    public, I also share it on <Link href="https://twitter.com/notquiteleo">Twitter</Link>.</P>

    <P>So what are you waiting for? If you’d like to work with me
    and create something really awesome, <Link href="mailto:mindrun@icloud.com">let me know</Link>! :)</P>

    <P>And finally: A big “Thank you” to all the people who encouraged
    me to make this step. Especially my friends, family and all
    of you awesome people on the web!</P>
  </Post>
)
