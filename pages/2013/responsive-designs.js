// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import {Snippet} from '../../components/code'

export default () => (
  <Post>
    <Meta id="responsive-designs"/>

    <P>Da ich mich immer mehr Leute fragen, wie das mit dem
    Responsive denn geht, dachte ich mir, die grundlegenden Informationen
    hierzu mal in einem kleinen Artikel zusammenzufassen, welcher
    gerade seine Gestalt annimmt.</P>

    <P>Zunächst mal ist es wichtig, die Programmiersprache {`"`}CSS{`"`} einigermaßen
    gut zu beherrschen, denn darauf baut sich die ganze Optimierung
    des Designs auf. Jedes Design, das responsive ist, arbeitet mit
    sogenannten Media-Queries, welche seit der dritten CSS-Version auf
    fast allen Browsern verfügbar sind.</P>

    <P>Das ganze Verfahren lässt sich wohl am besten durch verschiedene
    Beispiele erklären. Die folgenden Snippets können ganz einfach und
    ohne Probleme im CSS-Code der eigenen Webseite eingebettet werden.</P>

    <P>Der folgende Code aktiviert die Attributierungen, die er enthält, wenn
    der Bildschirm des aufrufenden Benutzers kleiner als 1220 Pixel ist:</P>

    <Snippet language="css">{`@media only screen and (max-width: 1220px) {
  #testelement {
    display: block;
    position: relative;
  }
}`}</Snippet>

    <P>Es lassen sich alle Arten von Attributierungen im Code anbringen, da
    sind absolut keine Grenzen gesetzt. Jedenfalls werden diese
    aktiviert, wenn die eingestellten Anforderungen der Media-Queries
    mit dem Bildschirm übereinstimmen.</P>

    <P>Das gleiche funktioniert auch umgekehrt. Das bedeuted, es
    können minimale Maße als Anforderungen für den
    Bildschirm gesetzt werden:</P>

    <Snippet language="css">{`@media only screen and (min-width: 660px) {
  #testelement {
    overflow: hidden;
    border: medium double #000;
  }
}`}</Snippet>

    <P>So können alle Code-Elemente einer Webseite angesprochen
    werden, bis jedes Element an die Maße des Bildschirms
    angepasst ist. Und schon sind sie fertig!</P>
  </Post>
)
