// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import {Snippet} from '../../components/code'
import Link from '../../components/link'

export default () => (
  <Post>
    <Meta id="homepage-optimieren"/>

    <P>Im heutigen Zeitalter, indem die Medien schon
    fast die Oberhand ergriffen haben, ist es sehr
    wichtig, die eigene Webseite an die bekanntesten
    Dienste zu optimieren. Es bietet sich somit die
    Möglichkeit, spezielle Informationen für die
    jeweiligen Dienste wie zum Beispiel Facebook
    oder Google Plus vorzubereiten.</P>

    <P>Zunächst einmal ist es wichtig, die Programme und Online-Dienste
    einzugrenzen, für die das Werk optimiert werden soll. Dort
    muss mit Bedacht gewählt werden, da die Optimierung natürlich
    nicht zuviel Arbeit machen sollte.</P>

    <P>Ich habe mir für mein <Link href="http://www.frewhost.net">Hosting-Projekt</Link> den
    sogenannten OpenGraph, welcher von Facebook
    verwendet wird, sowie Windows 8 vorgenommen. Um eine Optimierung
    vorzunehmen, ist natürlich ein Zugriff auf die Datein der
    jeweiligen Homepage vonnöten. Dann kann es aber auch schon
    mit der Optimierung los gehen:</P>

    <P>Facebook bietet glücklicherweiße einen Generator, indem im
    Grunde nurnoch die nötigen Informationen bereitgestellt werden
    müssen, bevor der fertige Code in den Head-Bereich der eigenen
    Webseite eingebaut werden kann. Dieser ist seit einigen Monaten
    im <b>zweiten Teil</b> der
    offiziellen <Link href="https://developers.facebook.com/docs/reference/plugins/like/">Social
    Plugins-Doku</Link> zu finden.</P>

    <P>Nun kommen wir zur Optimierung an Windows 8. Dort lassen
    sich im Kasten-Modus Links abspeichern, die dann von dort aus
    direkt aufgerufen werden können. Wie die jeweilige Homepage dort
    dargestellt werden soll, lässt sich über ein paar kleine Codes
    im Head-Bereich der Seite bestimmen. Zum Beispiel bieten diese
    die Möglichkeit, die Hintergrundfarbe oder das Vorschaubild des
    Links beliebig zu wählen. Falls keine Optimierungen vorgenommen
    werden, sucht sich das Betriebssystem wahllos Farben sowie eine
    Grafik aus der jeweiligen Seite aus.</P>

    <Snippet language="html">{`<meta name="application-name" content="Name der Webseite"/>
<meta name="msapplication-TileColor" content="#000000"/>
<meta name="msapplication-TileImage" content="windowsico.png"/>`}</Snippet>

    <P>Zunächst wird der Titel der Seite gesetzt, dann die Hintergrundfarbe
    der Vorschau, und zuletzt die Grafik, welche dargestellt werden
    soll. Bei dieser ist eine Größe von 250 x 250 Pixeln sowie
    die Dateiendung {`"`}.png{`"`} optimal.</P>
  </Post>
)
