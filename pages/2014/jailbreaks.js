// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {OL, LI} from '../../components/list'
import Space from '../../components/space'

export default () => (
  <Post>
    <Meta title="Alle Arten Von Jailbreaks Von iOS 7 Entfernen" date="09-01-2014"/>

    <P>Am 22. Dezember des letzten Jahres gaben Entwickler
    auf ihrem Twitter-Profil den Link zum ersten
    Jailbreak für Apples iOS 7 bekannt. Auch ich habe
    mir das Teil direkt danach heruntergeladen, um
    das System mal auf meinem iPhone 5 ausprobieren zu können.</P>

    <P>Mittlerweile brauche ich den Jailbreak jedoch nicht
    mehr und möchte ich deshalb vom Gerät entfernen. Die
    Entfernung des Jailbreaks kann durch zwei Dinge erfolgen:</P>

    <P>Entweder aktualisiert du dein Gerät auf die neuste
    Firmware, oder du befolgst die unten stehenden Schritte. Erstere
    Option können weder ich, noch die Entwickler des
    Jailbreaks empfehlen, da das Gerät dadurch meist in den
    Recovery-Modus versetzt wird, und deine Daten verloren gehen.</P>

    <P>Aus diesem Grund habe ich mich mal für dich nach einer
    Möglichkeit erkundigt, wie der Jailbreak
    vom iPhone/iPod/iPad entfernt werden kann, ohne dass irgendwelche
    wichtigen Daten flöten gehen oder gar das ganze
    Gerät in Sachen Software zerhack-stückelt wird.</P>

    <P>Im folgenden wird in wenigen Schritten erklärt, wie du
    den Jailbreak ganz einfach von deinem
    iPhone, iPod oder iPad entfernst.</P>

    <OL>
      <LI>Bestimme das Modell deines Geräts (<Link href="http://support.apple.com/kb/ht3939?viewlocale=de_DE">iPhone</Link>,
      <Space/><Link href="http://support.apple.com/kb/HT1353?viewlocale=de_DE">iPod</Link>,
      <Space/><Link href="http://support.apple.com/kb/HT5452?viewlocale=de_DE">iPad</Link>).</LI>
      <LI>Lade die entsprechende <Link href="http://www.evasionjailbreak.org/ios-firmware-download/">Kopie von iOS 7</Link> herunter.</LI>
      <LI>Öffne iTunes an deinem PC/Mac und schließe dein Gerät per USB an.</LI>
      <LI>Erstelle ein Backup deines Geräts (Button {`"`}Jetzt sichern{`"`}).</LI>
      <LI>Drücke und halte Shift auf deiner PC-/Mac-Tastatur und klicke auf {`"`}Nach Update suchen{`"`}. Im sich öffnenden Fenster wählst du die anfangs heruntergeladene Kopie von iOS 7.</LI>
      <LI><b>FERTIG!</b></LI>
    </OL>

    <P>Hast du die oben stehenden Schritte befolgt, kannst du nun
    ein Backup auf dein Gerät laden. {`"`}Bringt das denn
    nicht den Jailbreak zurück?{`"`} - Nein, das wird nicht
    passieren. Aus dem einfachen Grund, dass bei Backups nicht
    die Firmware, sondern ausschließlich deine persönlichen
    Daten (Apps, Musik, Fotos, etc.) gesichert werden.</P>
  </Post>
)
