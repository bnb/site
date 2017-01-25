// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {Snippet} from '../../components/code'

export default () => (
  <Post>
    <Meta id="code-editor-160-bytes"/>

    <P>Ein paar JavaScript-Freaks aus Frankreich, Norwegen und
    Deutschland haben sich vor kurzem zusammengefunden, um
    ihre Idee des kleinsten Code-Editors der Welt zu
    verwirklichen. Dies ist ihnen anscheinend auch gelungen.</P>

    <P>Der Editor umfasst jeweils ein Textfeld für HTML-, CSS- sowie für
    JavaScript-Codes und kann mittels eines kleinen
    JS-Snippets aufgerufen werden. Das folgende Snippet umfasst
    gerade einmal 169 Bytes und erzeugt trotz dessen einen
    voll funktionsfähigen Code-Editor:</P>

    <P>Hier der gesamte Code für das Projekt:</P>

    <Snippet language="html">{`<body oninput='e.firstChild.srcdoc=t2[v="valu` +
    `e"]+"<script>"+t0[v]+"</script><style>"+t1[v]'onload='for(i=3;` +
    `i--;)e.innerHTML+="<textarea id=t"+i+" rows=9>"'id=e><iframe>`}</Snippet>

    <P>Auf der <Link href="http://xem.github.io/miniCodeEditor/minimal.html">Homepage</Link> des
    Projekts kann nach außerdem noch zwischen zwei
    weiteren Ausführungen gewählt werden, die dann je nach Variation
    auch die Möglichkeit bieten, die erzeugten Outputs
    mittels einer URL zu teilen.</P>

    <P>Hierfür ist (wie sich einige unter euch jetzt denken werden) keine
    Datenbank nötig. Warum? - Ganz einfach: Die eingegebenen
    HTML-, JS- und CSS-Codes werden formatiert und direkt in der URL gesichert.</P>

    <P>Wer möchte kann sich dann auch noch aus 6 verschiedenen Anordnungen
    der einzelnen Textboxen wählen. Andernfalls können alle Teile des
    Editors natürlich mittels CSS nach Wunsch designtechnisch angepasst werden.</P>
  </Post>
)
