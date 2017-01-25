// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import {H2} from '../../components/heading'
import HR from '../../components/hr'
import Link from '../../components/link'
import {Image} from '../../components/figure'
import {UL, LI} from '../../components/list'

export default () => (
  <Post>
    <Meta id="support"/>

    <P>I’m not a “Well, they might fix it in the future” kind
    of a person. If my process of interaction
    with a specific product is being interrupted by some
    nasty bug or a missing feature, I will make
    sure to let the creator know about this — no matter
    if it’s made by a single person or a
    company like Apple (I still believe that the folks
    over there will take their time to read
    it and sometimes even write back).</P>

    <P>And what I really like is, that many companies
    and independent creatives actually encourage
    this behaviour of mine by providing me with easy ways
    to contact them if I need help or want to provide feedback.</P>

    <P>However, there are still enough projects out
    there who’s creators don’t spend much time thinking about
    how they can leverage the user’s experience
    and make him believe in the value of his feedback.</P>

    <P>If you ask me, they’re just cutting themselves
    with this kind of not-giving-a-shit-behaviour. I mean, they
    could definitely use the user’s ideas to save
    time and therefore also money. They can make the
    product better without needing to think about how to do so.</P>

    <H2>Common Mistakes</H2>

    <P>Firstly, let’s start off with the way the user
    needs to go to contact the makers. Most companies are offering
    multiple contacting ways like e-mail, social
    networks or live-chats (and some even a hotline
    with 30 minutes waiting time). Among those methods, there’s
    also the well-known contact form. You’re basically
    forced to provide pre-defined amounts of information
    which will then mostly just be converted into
    a freaking email reaching the creator, in turn.</P>

    <P>Why? Really — why?</P>

    <P><b>I know why.</b> You’re basically afraid that the
    user is too dumb to provide the necessary amount of information
    (or you just like generating extra effort for
    your fellow developers, which will need to code
    the “Drop us a message” page), right? Okay, then
    you’re at least caring about this process a bit.</P>

    <P>But not enough! Just think about it, there’s always
    some information left. You can’t cover all
    scenarios by simply forcing the user to think about which
    category is the most fitting one for his problem
    and then allowing him to choose it from a
    select-element (as an example).</P>

    <P>You need to leave him space for creativity. You need
    to allow him to use his own ways of explaining
    to show you what he’s missing or where he needs help from
    you. You need to let him digress from the
    explanation of his initial problem to maybe also
    think about a possible solution by himself, too. And
    yes; I AM looking on you, products with only
    this one contacting-method.</P>

    <HR/>

    <P>I already mentioned the first one in the
    paragraphs above: e-mail. Why even bother setting up a
    contact form if the user is able to send out
    mails directly from his own mail-client? Therefore, he
    would be able to keep track of his sent
    messages and easily follow the conversations.</P>

    <UL>
      <LI><b>Allow the user to follow up:</b> You might see
      this as a naturalness, but I’ve experienced
      many cases in which the UI forced me to write
      my feedback or support question over a
      pre-defined contact form. And the best
      thing: After I had received the answer, it didn’t
      even contain the text I had initially sent. How
      the fuck should I know what I sent days
      ago? Exactly! I guess I’m not the only person
      who’s sending much more than just one
      message each day — please make sure to provide
      the user with the question he had asked
      before (just add it as quotation to the end
      of the mail, for example).</LI>

      <LI><b>One conversation for each question:</b> I know this
      might sound stupid, but there definitely
      are companies out there which are using some
      really neat ticketing-systems that are basically
      opening a new e-mail-conversation for each
      answer. What the heck? Just use the exact same
      thread the user wrote from to answer back.</LI>

      <LI>
        <P><b>Don’t repeat yourself:</b> I’m talking about
        information which has already been shown
        once — don’t waste space and use the same text
        again. A great example for this is the
        mail I recently automatically received
        from <Link href="http://codepen.io">CodePen</Link> because
        my test for the premium package has expired:</P>

        <Image src="/static/essays/2015/support/codepen.png"/>

        <P>Why did they add the “CodePen” lettering to
        the subject line? It’s already the content
        of the “sender” meta-item. Just leave it out, thanks!</P>
      </LI>

      <LI><b>You don’t need 30-line-long signatures:</b> I know
      you want to provide the user with all
      details about your company — but stop it, you
      don’t need to! The fact that the user
      already contacted you over e-mail means that
      he doesn’t need to know your freaking
      hotline-number or postal address (and even if he
      wants those, he just needs to open your
      website). Just be a bit more personal and use
      signatures which simply contain the name of
      the support staff who wrote the answer. For
      example: Cheers, Scott — Thats it! You
      don’t need more.</LI>
    </UL>

    <P>As I already said, please don’t force the user to
    write with you over your damn platform. He should be able
    to follow up whenever he wants to and
    shouldn’t need to log into your site to do so
    first. Just make use of things like Facebook, Twitter and the
    good-ol’ <Link href="http://www.guinnessworldrecords.com/60/images/records/1971.jpg">e-mail</Link>.</P>

    <P>Every single one of your users writes messages to
    multiple completely different services and I don’t think he
    wants to have all those messages scattered
    around different platforms (at least I personally
    don’t think that’s purposeful in any way). Take
    your time and make sending feedback and support
    questions more comfortable! You’ll quickly see
    that more users are spending their extremely
    valuable time to make your product better, because
    they want to be able to use it without disorders.</P>

    <HR/>

    <P>Regarding the “one conversation for each
    question” argument: Please also make sure to not force
    the user to proceed with the dialogue over a
    completely different medium. The conversation should
    be started and finished in one
    stream (or “thread” if that makes more sense to you).</P>

    <P>For example, if a user reports a bug over
    Twitter, don’t advise him to fill out a
    freaking bug report. That just makes the user’s effort
    on getting the feedback to you redundant. — If you’re out
    of luck, he might even loose the
    incentive of writing you once again completely.</P>

    <P><i>Thanks to <Link href="https://github.com/e2b">@e2b</Link> for letting me know about this.</i></P>

    <HR/>

    <P>When allowing users to write their feedback
    or questions via e-mail, the sender of the response
    should be set to your company’s name (or
    something similar). I saw a few bad examples
    like the following one, who basically set it to the
    real name of the guy who wrote me back:</P>

    <Image src="/static/essays/2015/support/github.png"/>

    <P>Now every time the user opens the mail app, it
    auto-completes the content of
    the “receiver”-field as soon as he starts typing in
    the company’s address. And no — even if he
    tries to remove this information, most apps
    will make sure that it stays.</P>

    <P>And technically, this info isn’t useful
    at all. I mean, if you have more than 1 single
    support staff, the user won’t write with Scott
    each time. He might also write with <i>Ann</i> or <i>Jacob</i>, since
    they use the exact same address to stay
    in contact with customers — therefore the name
    is pretty useless in this context.</P>

    <P>Yep. I do know that you can turn this off, but
    many apps have this option enabled by default. And
    if something is enabled by default, it’s very
    likely to not be disabled yet by the “average user”.</P>

    <HR/>

    <P>All in all, simply be careful when setting
    up your new company’s customer relationship mechanisms.</P>
  </Post>
)
