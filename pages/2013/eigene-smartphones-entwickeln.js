// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import Quote from '../../components/quote'

export default () => (
  <Post>
    <Meta id="eigene-smartphones-entwickeln"/>

    <P>Vor ein paar Stunden kam ich durch einen Link auf eine ganz besondere
    Seite: <Link href="http://phonebloks.com/">Phonebloks</Link>. Diese
    repräsentiert ein ausgefuchstes Projekt eines Niederländers, welcher
    Smartphones entwickeln möchte, die um einiges länger als normale
    Handys halten und zudem in Sachen Hardware auch durch den
    Nutzer selbst anpassbar sind.</P>

    <P>Dave Hakkens - so heißt der selbsternannte Designer, welcher
    sich die Zeit genommen hat, ein wirklich interessantes Projekt
    auf die Beine zu stellen, welches verhindern soll, das Mobiltelefone
    direkt entsorgt werden sobald sie nicht mehr funktionieren.</P>

    <P>Auf der offiziellen Webseite seiner Idee beruft sich der Niederländer
    darauf, dass Smartphones meistens selbst dann beseitigt werden, wenn
    nur ein kleiner Teil der Hardware nicht mehr richtig funktioniert. Mit
    einem Handy, welches
    aus <Link href="http://phonebloks.com/">Phonebloks</Link> gebaut
    ist, soll dies nicht passieren, da die Hardware wie in einem
    App-Store ganz einfach ausgetauscht werden kann.</P>

    <Quote author="Dave Hakkens">If a blok breaks you can easily replace it, if it{`'`}s getting old just
    upgrade. — Dave Hakkens, Projektleiter Phonebloks</Quote>

    <P>Weitergehend wird auch das wohl größte Problem eliminiert: Da sich
    die Technik-Industrie und deren Produkte so rasant weiter
    entwickeln, werden einige Handys schon früh ausgetauscht, um maximale
    Funktionen/Leistung zu gewinnen. Auch das ist mit Phonebloks kein
    Problem - die Hardware-Teile können ganz leicht ausgetauscht werden.</P>

    <P>Ich bin mir nicht sicher ob das ganze wirklich so leicht realisiert
    werden kann, aber in jedem Fall halte ich seine Idee für
    sehr originell und einfallsreich. Wer Dave bei seinem Vorhaben
    unterstützen möchte, soll nach Angaben auf seiner Seite sein
    Vorhaben im Netz verbreiten.</P>
  </Post>
)
