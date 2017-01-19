// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'

export default () => (
  <Post>
    <Meta id="super-mario"/>

    <P>Vor kurzem kam ich per Zufall über ein Video von
    PewDiePie, was mir dann den Rest des Tages quasi gerettet hat.</P>

    <P>Dank ihm kann ich jetzt endlich den Klassiker auch aufm
    PC zocken - und das ganze auch noch mit Portalen. Also
    ne Art Mischung aus Portal und Super Mario - genial, finde ich... 😎</P>

    <P><b>Das beste daran:</b> Das Spiel ist sowohl auf den Platformen
    Windows und Linux, als auch auf
    OS X <Link href="http://stabyourself.net/mari0/">zu erhalten</Link>. Und
    das allerbeste daran: Anscheinend hat sich der
    Entwickler sogar die Mühe gemacht, den Sourcecode
    zu veröffentlichen. Dies gibt anderen Game-Entwicklern die
    Möglichkeit, eigene Variationen des Spiels zu kreiiren.</P>

    <P>Mal sehen, vielleicht kommen da noch ein
    paar coole Sachen in der Zukunft raus!</P>
  </Post>
)
