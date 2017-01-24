// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import {Inline} from '../../components/code'
import Link from '../../components/link'

export default () => (
  <Post>
    <Meta id="schnelleres-web-protokoll"/>

    <P>Vor einigen Tagen hatte ich mich mit einem
    Kunden über die möglichen Varianten zur Verbesserung
    der Leistung meiner Server unterhalten. Dabei kamen
    wir zudem auf das Thema der Ladezeiten. Ich meinte, dass
    ich für weitere Arten offen währe, die es
    ermöglichen, dass Daten schneller geladen werden können.</P>

    <P>Dann hatte er mir von einer Software für Apache 2.2
    erzählt, die es ermöglicht, aus SPDY-Funktionen
    wie {`"`}stream{`"`}, {`"`}multiplexing{`"`} oder {`"`}header-compression{`"`} einen
    Vorteil zu ziehen. Somit sah ich mir die Erweiterung mal an.</P>

    <P>Zunächst einmal möchte ich überhaupt das Wirken der
    Software genauer erläutern: In Zusammenarbeit mit dem
    Programm kann Apache mit Browsern, die das
    Protokoll {`"`}SPDY{`"`} beherrschen, Daten auf diesem
    Weg austauschen. Die HTTP-Alternative {`"`}SPDY{`"`} soll die
    Ladezeit von Webseiten um rund 55 Prozent reduzieren. SPDY
    wird derzeit von Google Chrome und Firefox unterstützt.</P>

    <P>Klingt eigentlich ganz gut, nicht war? Schade ist
    nur, dass <Inline>mod_spdy</Inline> bei jeder Verbindung
    zwischen Endbenutzer und Server das HTTPS-Protokoll
    erzwingt. Wer das Modul trotzdem ausprobieren möchte, kann
    sich dieses für CentOS sowie für
    Debian <Link href="https://developers.google.com/speed/spdy/mod_spdy/">hier</Link> herunterladen. Ich
    werde es demnächst auch einmal genauer prüfen.</P>

    <P>Einer der entscheidenden Faktoren für die Steigerung der Geschwindigkeit durch SPDY ist das
    sogenannte {`"`}Multiplexing{`"`}: SPDY erlaubt es, mehrere
    HTTP-Requests in einer <b>einzigen</b> TCP-Session
    abzuwickeln. Dies reduziert die Bandbreite gegenüber
    dem heute genutzten HTTP durch Eliminierung von überflüssigen Headern
    und Komprimierung. Weniger Verbindungen müssen aufgebaut werden.</P>

    <P>Derzeit wird die Erweiterung von Google entwickelt. Diese
    nutzen das Programm für ihre Webseiten, da
    diese - selbstverständlich - einiges aushalten müssen. Im
    Dezember 2011 kündigte Google offiziell die
    Entwicklung von mod_spdy an und veröffentlichte zugleich eine
    Betaversion des Apache-Moduls.</P>

    <P>Ein kleines Video, in dem das Programm im Zusammenhang mit
    einer normalen HTML-Seite mit einigen Grafiken genutzt wird, ist
    übrigends <Link href="https://youtu.be/vEYKRhETy4A">hier</Link> zu
    finden.</P>
  </Post>
)
