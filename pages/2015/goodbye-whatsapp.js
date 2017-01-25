// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'

export default () => (
  <Post>
    <Meta id="goodbye-whatsapp"/>

    <P>More than 5 years have passed since WhatsApp saw the light
    of day for the first time. Now it was even acquired by
    the biggest social network out there: Facebook. But in
    my opinion, the acquisition wasn{`'`}t really useful. They
    did little or nothing to make progress and make the app
    better than it was.</P>

    <P>Okay, they changed the interface a bit and added some
    tiny new features. But the really big things like an API for
    developers or even just another app for OS X or Windows never
    entered the conversation. To me, it feels like Facebook
    just doesn{`'`}t give a shit about the app. Maybe they just bought
    it because they wanted its user-data...</P>

    <P>In my view, this had the consequence that WhatsApp now isn{`'`}t able
    to compete with all the other IM-Messengers out there
    anymore, there are many services that have well-documented
    APIs (like <Link href="http://telegram.org">Telegram</Link>) and
    much better interfaces, as well as native applications for
    desktop and also web instances (WhatsApp lately also
    got a shiny web-version, but it{`'`}s not even working for all platforms).</P>

    <P>That means to me: In the next days I{`'`}ll stop using this stupid app
    and I{`'`}ll also recommend my friends to use a
    different kind of messenger.</P>

    <P>Sorry, Facebook!</P>
  </Post>
)
