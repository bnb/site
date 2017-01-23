// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'

export default () => (
  <Post>
    <Meta id="neuer-code-editor"/>

    <P>Lange ist es her, seitdem ich zum letzen mal den Editor
    gewechselt habe, mit dem ich entwickle, doch nun ist es
    mal wieder so weit. Ich habe endlich eine praktische und
    dazu noch kostenlose Alternative zu meinem
    bisherigen Code-Editor <Link href="http://notepad-plus-plus.org">Notepad++</Link> gefunden.</P>

    <P>Ich rede von <Link href="http://brackets.io">Brackets</Link>, einem
    komplett quelloffenen Editor für Entwicklungen im Web. Derzeit
    wird das Projekt offiziell von Adobe betreut und steht
    somit auch unter deren MIT-Lizenz.</P>

    <P>Das praktische an der Software ist, dass absolut
    jeder der Ahnung vom Programmieren hat, mitwirken kann. Dies
    fördert natürlich die UX des Projekts, da genau das
    geboten wird, was der Nutzer gerne hätte.</P>

    <P>Weitergehend bieten sich somit auch fast unbegrenzte
    Möglichkeiten, wenn es um das Thema Features geht. Bereits
    seit dem das Projekt ins Web ging entwickeln engagierte
    Mitglieder der Adobe-Community nützliche Addons, welche
    mit wenigen Klicks installiert werden können.</P>

    <P>Mir ist aufgefallen, dass das Projekt nicht nur unter dem
    Namen {`"`}Brackets{`"`} sondern auch
    als <Link href="http://html.adobe.com/edge/code/">Edge Code</Link> in
    der Adobe Creative Cloud angeboten wird. Adobe scheint
    hierbei eine Distribution auf Basis der Brackets-Source
    erstellt zu haben.</P>

    <P>Alles in allem funktioniert die Anwendung
    wunderbar, alles läuft flüssig. Bisher konnte ich noch
    keine Bugs oder ähnliches erkennen.</P>
  </Post>
)
