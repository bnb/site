// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import {Inline, Snippet} from '../../components/code'
import Link from '../../components/link'

export default () => (
  <Post>
    <Meta id="inhalte-zentrieren-css"/>

    <P>In letzer Zeit las ich im Netz einige Beitrage
    von Nutzern, die sich darüber beschwerten, dass man
    Text bzw. Inhalte in HTML per CSS nicht vertikal
    ausrichten kann. Das stimmt so eigentlich nicht, weshalb
    ich im folgenden mal eine kleine Anleitung gebe, wie
    das denn zu schaffen ist:</P>

    <P>Wir arbeiten hierbei mit dem allgemeinen
    Prinzip der Tabelle. Eine Möglichkeit, die jeweiligen
    Inhalte vertikal sauber zu zentrieren ist natürlich
    eine HTML-Tabelle zu erstellen und hinein eine Zelle
    zu packen, und ihren Inhalt mit Hilfe von CSS
    vertikal zu zentrieren.</P>

    <P>Allerdings ist dies ziemlich umständlich - ist ja
    nicht gerade praktisch wenn man eine Tabelle in den
    eigenen HTML-Code packen muss, wenn man ausschließlich
    auf ein vertikal zentriertes Element aus ist.</P>

    <P>Nun zur Anleitung: Zunächst erstellen wir uns ein
    Element (z.B. ein/e DIV), welcher/m wir mittels CSS
    100% Höhe, 100% Breite sowie folgendes Attribut
    verpassen, welches später eine Tabelle simuliert:</P>

    <Snippet language="css">display: table;</Snippet>

    <P>Als nächstes packen wir in das erstelle DIV-Element
    ein weiteres DIV-Element, welches auch den Inhalt
    enthält, der vertikal zentriert werden soll. Diesem
    weißen wir folgende CSS-Attribute zu, um eine
    Tabellen-Zelle zu simulieren und deren Inhalt
    vertikal zu zentrieren:</P>

    <Snippet language="css">{`vertical-align: middle;
display: table-cell;`}</Snippet>

    <P>Nun wird der Inhalt des als letztes genannten DIV-Element
    vertikal zentriert. Wenn nun auch noch eine horizontale
    Zentrierung gewünscht ist, kann diese natürlich ganz
    einfach mit dem <Inline>text-align: center;</Inline>-Attribut
    für letzteres Element erreicht werden. Hierzu eine
    kleine <Link href="http://codepen.io/jonsuh/pen/duvgE">Demo</Link>.</P>

    <P>Falls die vertikale Zentrierung nicht innerhalb anderer
    Elemente erfolgt, müssen die Elemente <Inline>html</Inline> und
    <Inline>body</Inline> in
    Sachen Breite und Höhe natürlich noch so angepasst
    werden, dass sie die Browser-Fläche komplett ausfüllen, wie
    in der Demo gezeigt. Viel Spaß beim Coden!</P>
  </Post>
)
