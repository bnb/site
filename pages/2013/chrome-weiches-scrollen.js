// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import {Inline} from '../../components/code'

export default () => (
  <Post>
    <Meta id="chrome-weiches-scrollen"/>

    <P>Vor einigen Tagen habe ich offiziell meinen Browser
    gewechselt. Damals hatte ich noch Mozilla Firefox, von
    dem ich eigentlich ziemlich überzeugt war, da er außerdem
    hervorragende Werkzeuge für Web-Entwickler wie mich
    bot. Jedoch gefiel mir auf Dauer das Interface
    nicht mehr, weshalb ich Googles Chrome zu meinem Hauptbrowser machte.</P>

    <P>Mittlerweile nutze ich den Browser schon ein paar Wochen und
    komme eigentlich ganz gut damit klar. Das Interface ist viel
    klarer aufgebaut, und hält somit den wichtigsten Teil (den
    Inhaltsbereich) im Vordergrund, wodurch man auch mehr Gefallen an Webseiten findet.</P>

    <P>Allerdings gibt es eine kleine Sache bei Google Chrome, die
    mir richtig auf die Nerven geht. In so gut wie allen neuen
    Browsern lassen sich die besuchten Webseiten schön smooth
    auf und ab scrollen. Jedoch nicht in Chrome. Deshalb
    informierte ich mich im Netz, ob es nicht eine Möglichkeit
    gibt, dieses Smooth-Scrolling zu aktivieren - notfalls auch per Plugin.</P>

    <P>Letztendlich fand ich eine Seite, auf der beschrieben wurde, wie
    das denn zu aktivieren sei. Und dies - man glaubt es kaum - sogar
    ohne Plugin! Wie das? Ganz einfach: Die Option ist in der neusten
    Version von Google Chrome bereits implementiert - nur leider
    standardmäßig deaktiviert.</P>

    <P>Somit war es nur notwendig, in einem neuen
    Tab <Inline>chrome://flags</Inline> einzugeben, enter zu drücken, und
    auf der geladenen Seite den Bereich {`"`}Optimiertes Scrollen{`"`} zu
    suchen. Sobald dieser dann gefunden ist, dort einfach
    auf {`"`}Aktivieren{`"`} klicken, und den Browser neu starten. Und
    schon klappt es - das {`"`}weiche{`"`} Scrollen.</P>

    <P>Das ganze ist allerdings nur auf Windows und Linux
    verfügbar - nicht auf Chrome OS und erst recht nicht auf
    Mac OS. Schade eigentlich, aber das liegt wohl daran, das
    bei Macs normalerweiße mit Magic Mouse und Trackpad
    gearbeitet wird und daher solch eine Funktion gar nicht nötig ist.</P>
  </Post>
)
