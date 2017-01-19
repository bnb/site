// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {H2} from '../../components/heading'
import {OL, LI} from '../../components/list'
import {Inline} from '../../components/code'

export default () => (
  <Post>
    <Meta id="symlinks"/>

    <P>Da ich es an meinem {`"`}Arbeitsplatz{`"`} ja gerne
    immer relativ ordentlich habe, musste es natürlich irgendwann
    so weit kommen, dass mir diese dummen Dinger
    einfach ins Auge stechen. Wie es der Titel schon
    unschwer vermuten lässt, zeige ich dir heute, wie
    du diese kleinen Pfeile von den Verknüpfungen
    auf deinem Win7-Desktop entfernen kannst.</P>

    <P>Gleich zu Anfang: Falls du schlicht keine Lust auf die unten
    stehende Anleitung hast, kannst du dir auch gerne
    ein <Link href="http://www.delightsoftware.com/de/ShortcutOverlayRemover">Programm</Link> laden, welches
    die Arbeit dann für dich erledigt.</P>

    <P>Da ich selbst grundsätzlich allerdings nicht so
    gerne irgendwelche Programme ausm Netz herunterlade (geschweigenden
    solche, die manuell schnell zu bewältigende
    Aufgaben für mich lösen), hab mir im Netz ein paar Fetzen
    zusammengesucht und fasse dir diese nun
    in eine kurze Anleitung zusammen:</P>

    <H2>Schritte zum Pfeil-leeren Desktop-Icon</H2>

    <OL>
      <LI>Öffne die Explorer-Suche und finde {`"`}regedit{`"`} (.exe)</LI>

      <LI>Nachdem du die Datei geöffnet hast, navigiere zu
      folgendem Verzeichnis: <Inline>HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionExplorer</Inline>. Dort
      sollte sich eine Verzeichnis mit
      dem Namen {`"`}Shell Icons{`"`} befinden. (Falls
      selbiges <b>nicht</b> vorhanden ist, erstelle es wie
      folgt: Rechtsklick auf das {`"`}Explorer{`"`}-Verzeichnis,
      dann {`"`}Neu{`"`} und dort {`"`}Schlüssel{`"`} wählen. Der
      entstandene Ordner muss dann {`"`}Shell Icons{`"`} genannt werden.)</LI>

      <LI>Nun musst du im {`"`}Shell Icons{`"`}-Verzeichnis
      die nötigen Bedingungen setzen, um den blöden Pfeil
      verschwinden zu lassen: Klicke einfach mit einem
      Rechtsklick auf den {`"`}Shell Icons{`"`}-Ordner und wähle
      dann unter {`"`}Neu{`"`} den Punkt {`"`}Zeichenfolge{`"`}. Als Titel
      für die neue Zeichenfolgen gibst du
      die Zahl <Inline>29</Inline> ein.</LI>

      <LI>Als nächstes klickst du doppelt auf die
      angelegte Zahl 29. Jetzt sollte sich ein Fenster
      öffnen, in welchem du den Pfad zum neuen
      Verknüpfungs-Pfeil eingeben kannst. Um den Pfeil ganz verschwinden
      zu lassen, gibst du z.B. folgenden Pfad an (enthält
      ein leeres Icon): <Inline>C:Windowssystem32imageres.dll,-121</Inline></LI>

      <LI><b>Achtung:</b> (Falls im {`"`}Shell Icons{`"`}-Ordner bereits
      eine Zeichenfolge mit dem Titel {`"`}(Standard){`"`} vorhanden
      ist, ignoriere diesen Schritt bitte!) - Lege mit
      dem selben Schema wie in Punkt 3 einen weitere
      Zeichenfolge an, allerdings mit dem Namen {`"`}(Standart){`"`} (Wer kann
      leer gelassen werden).</LI>

      <LI>Hast du den Pfad angegeben, kannst du ihn mit einem
      Klick auf {`"`}OK{`"`} abspeichern. Nun musst du dein System nur
      noch einmal neu starten, und schwups: Der nervige Pfeil ist weg! :)</LI>
    </OL>

    <H2>Aktion rückgängig machen</H2>

    <P>Du möchtest dein Verknüpfungs-Pfeil wiederherstellen? Kein
    Problem! Lösche einfach den Ordner {`"`}Shell Icons{`"`}, welchen
    du nach der obigen Anleitung erstellt hast, und starte deinen
    PC nochmals neu. Schon ist er wieder da!</P>

    <P>Hast du zu diesem Thema noch irgendwelche Fragen, oder
    möchtest mir sagen wies denn noch schneller oder sauberer
    geht? Dann lass doch einfach ein Kommentar da!</P>
  </Post>
)
