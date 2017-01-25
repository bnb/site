// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import {Inline, Snippet} from '../../components/code'

export default () => (
  <Post>
    <Meta id="emails-linux-shell"/>

    <P>Immer öfters kommt es vor, dass ich bestimmte
    Log-Datein von meinem Server laden muss. Um das
    ganze etwas zu vereinfachen hab ich mich mal nach
    einer Möglichkeit umgeschaut, die Logs direkt an meine
    E-Mail-Adresse zu senden.</P>

    <P>Auf sauber aufgesetzten Linux-Servern (sendmail installiert
    und funktionsfähig), kann mittels folgendem Kommandos
    eine E-Mail direkt über die Shell versendet werden:</P>

    <Snippet language="bash">{`mail -s "Dein Betreff" mail@domain.tld`}</Snippet>

    <P>Nach der Eingabe sollte der Text-Cursor eine Zeile weiter
    nach unten verschoben werden, was einem die
    Möglichkeit bietet, nun den gewünschten Inhalt
    einzugeben. Sobald wir fertig sind muss zunächst die
    Eingabe-Taste gedrückt, dann das Feld
    mit <b>Strg + D</b> geschlossen werden.</P>

    <P>Direkt nach dem Schließen des Inhalts-Editors wird
    die Nachricht versendet und sollte für gewöhnlich
    sekunden später im Posteingang des Empfängers landen.</P>

    <P>Das ganze reicht mir jedoch nicht, da ich ja eine
    Datei an die Mail anhängen möchte. Hierfür fügen wir
    zum allgemeinen Kommando einfach noch {`"`}-a{`"`} sowie
    den Pfad zur Datei hinzu:</P>

    <Snippet language="bash">{`mail -s "Betreff" -a /logs/file.log mail@domain.tld`}</Snippet>

    <P>Das beste an der ganzen Sachen ist ja immer noch, dass
    mit diesen Hilfe dieser Befehle natürlich auch Mails
    durch Shell-Scripte versendet werden können. Hierfür
    erstellen wir solches ganz einfach und setzen
    einen - sagen wir ... täglichen - Cronjob drauf an, welcher
    uns dann z.B. jeden Morgen unsere Logfiles oder ähnliches zusendet.</P>

    <P>Natürlich müsste dann auch der Inhalt der E-Mail direkt
    im Script definiert werden. Dies erledigen wir, indem wir
    ein echo an mail weitergeben:</P>

    <Snippet language="bash">{`echo “Deine Nachricht” | mail -s “Betreff” mail@domain.tld`}</Snippet>

    <P>Wem das ganze dann noch nicht genug ist, der kann
    sich mittels <Inline>man mail</Inline> alle möglichen Variablen
    der Funktion einsehen und natürlich auch welche
    Bedingungen beim Definieren dieser eingehalten werden müssen.</P>
  </Post>
)
