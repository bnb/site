// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Quote from '../../components/quote'
import Link from '../../components/link'

export default () => (
  <Post>
    <Meta id="bester-rss-reader"/>

    <P>Heute möchte ich euch meinen neuen Lieblings-Reader
    für RSS-Feeds vorstellen: {`"`}Feeder{`"`} heißt der gute.</P>

    <P>Als vor einigen Monaten der RSS-Reader von Google offiziell
    vom Netz genommen wurde, brauchte ich natürlich eine
    Alternative. So stieß ich nach kurzer Suche im Web
    auf {`"`}Feeder{`"`}. Hierbei handelt es sich um ein ganz einfach
    zu bedienendes Plugin für Google Chrome.</P>

    <P>Nach ein paar Wochen der Nutzung hatte ich mir schon
    die URLs zahlreicher RSS-Feeds dort abgespeichert. Mittlerweile
    verwende ich das Plugin sehr gerne, da es zunächst einmal
    kostenfrei, und zum anderen auch - wie schon oben
    beschrieben - einfach zu bedienen ist. Ich liebe das
    Interface und die Nutzerfreundlichkeit.</P>

    <Quote author="feeder.co">Your feed reading experience is about to get a
    boost. Whether you are a professional or personal user this new
    addition to feeder will enable you to faster consume your
    favorite feeds. Scroll down to learn more.</Quote>

    <P>Um das Plugin nutzen zu können, muss es im Grunde nur auf
    der <Link href="http://feeder.co">Webseite</Link> der Publisher
    heruntergeladen und installiert werden. Nach Wunsch kann man sich
    dann noch einen Konto dort erstellen, welches es dem Nutzer
    ermöglicht, die gespeicherten RSS-Feeds auch im Browser auf der
    Seite des Plugins zu lesen.</P>

    <P>Wie schon oben kurz angedeuted verfügt Feeder über ein sehr schönes
    Interface, weswegen der RSS-Reeder meiner Meinung nach schon alle
    anderen überholt hat. Weitergehend ist es sehr einfach, neue
    Feeds hinzufügen. Da das Teil ja im Browser integriert ist, ist
    ein einfacher Klick auf ein großes Plus im Plugin nötig, um
    alle URLs der Feeds aus der derzeit besuchten Seite
    herauszufiltern und zu speichern.</P>

    <P>Wenn man dann erstmal ein paar RSS-Feeds gespeichert hat, muss
    man nur auf die jeweiligen Namen der Feeds klicken, und alle
    veröffentlichten Einträge erscheinen nach Datum aufgelistet
    untereinander. Um nun einen der Beiträge zu öffnen, genügt
    ein Klick auf den jeweiligen Artikel und er öffnet sich in
    einem neuen Tab.</P>

    <P>Natürlich hat man auch die Möglichkeit, einen bestimmten Beitrag
    zu favorisieren, wodurch er in eine eigene, spezielle Liste verschoben
    wird. Ach so, ja... Man hat weitergehend die Option, den eigenen
    Account auf Pro-Stufe upzugraden, wodurch man seine Feeds dann
    auch mobil und online lesen kann. Praktischerweiße werden die
    RSS-Feeds dann auch zwischen allen Geräten synchronisiert.</P>
  </Post>
)
