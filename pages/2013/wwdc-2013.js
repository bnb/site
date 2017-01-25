// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'

export default () => (
  <Post>
    <Meta id="wwdc-2013"/>

    <P>Heute Abend war es mal wieder soweit: Apple hielt eine offizielle
    Konferenz ab, auf der neue Entwicklungen und Zukunftspläne vorgestellt
    wurden. Ich konnte das ganze zum Glück live an meinem Rechner
    mitverfolgen. Einige neue Dinge wurden vorgestellt, darunter das
    neue <Link href="https://ssl.apple.com/ios/ios7/features/">iOS 7</Link> sowie
    der neue Mac Pro.</P>

    <P>Zunächst wurde ein wenig über Apples erreichte Ziele geredet: Mehr
    als 10 Milliarden Dollar für Entwickler, die im Netz mit Hilfe des
    AppStores Einnahmen generieren können, über 900 Tausend Apps
    sowie über 50 Milliarden Downloads.</P>

    <P>Apple hat es anscheinend mal wieder geschafft, seine Nutzer und die, die
    es noch werden wollen, zu begeistern. Meiner Meinung nach viel mehr
    als nur gute Arbeit. Ich meine, man sehe sich nur einmal die
    Veränderung des Mac Pro vom platzraubenden Computer zum jetzigen
    hochleistungs-Tower mit einer Übertragungsrate
    von <b>60 GB pro Sekunde</b> (!) an. Das ist schon etwas besonderes.</P>

    <P>Ein weiteres Highlight war das neues Betriebssystem {`"`}iOS{`"`}, wessen
    siebte Version im vollen Umfang vorgestellt wurde. Mir
    persönlich gefällt das <b>neue UI-Design</b> sehr, genauso
    wie die verbesserte User-Experience und die neuen Apps.</P>

    <P>Das ganze ist nun im Grunde etwas einfacher aufgebaut, als vorher. Das
    Design wirkt strukturierter und aufgeräumter. Natürlich stehen
    auch die neuen Apps im Vordergrund, wie z.B. <i>AirDrop</i>, mit
    dessen Hilfe die Nutzer dafür vorgesehene Daten kabellos
    zwischen iOS-Geräten übertragen können.</P>

    <P>Weitergehend wurde auch der Airport Extreme sowie die hauseigene
    Netzwerk-Festplatte {`"`}Time Capsule{`"`} weiterentwickelt
    um noch leichter mit den Geräten anderer Hersteller konkurrieren zu können.</P>

    <P>Alles in allem eine sehr gelungene Konferenz! Ich freue mich schon auf
    die nächste Übertragung, und natürlich auf das neue iOS-Update, welches
    den Nutzern laut Apple voraussichtlich ab Herbst diesen Jahres zur
    Verfügung stehen soll. Weitere Informationen gibt´s natürlich auf
    der offiziellen <Link href="https://www.apple.com/de/">Apple-Seite</Link>.</P>
  </Post>
)
