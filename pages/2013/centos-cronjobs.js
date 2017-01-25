// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import {Image} from '../../components/figure'
import Meta from '../../components/meta'
import {Snippet, Inline} from '../../components/code'

export default () => (
  <Post>
    <Meta id="centos-cronjobs"/>

    <P>Vor wenigen Tagen bekam ich einen Auftrag bezüglich der Erstellung
    einer Seite für ein Unternehmen. Um hierfür eine reibungslose
    Entwicklungsumgebung erschaffen zu können, hab ich mir einen
    kleinen V-Server aufgesetzt. Auf diesem läuft mein - für kleinere
    Operationen - persönlicher Favorit Linux/Unix.</P>

    <P>Da ich derzeit leider keine unbenutzen Lizenzen für eine
    Verwaltungssoftware besitze, musste ich alle nötigen Programme
    wie eine Websoftware (Apache), PHP, MySQL sowie einen
    FTP-Server mit Mirror manuell konfigurieren.</P>

    <P>Auf der Homepage befindet sich ein ein Counter, welcher alle
    Zugriffe von Benutzern auf die Seite haargenau
    protokolliert und in eine Datenbank überträgt. Der Kunde
    äußerte den Wunsch, dass die gesamte Anzahl an Zugriffen
    täglich um 8:30 Uhr auf einen externen Sicherungs-Server
    übertragen werden sollten.</P>

    <P>Um diese Aktion zu ermöglichen, entschied ich mich für einen
    Cronjob, welcher regelmäßig und natürlich auch automatisch vom
    Hauptbenutzer des Systems ausgeführt werden sollte. Hierfür
    gilt es zunächst, die Kommandos zu verstehen:</P>

    <Snippet language="bash">{`crontab -e	[Cronjob bearbeiten / neuen erstellen]
crontab -r	[Alle Crons eines Benutzers entfernen]
crontab -u	[Besitzer eines Cronjobs ändern]
crontab -l	[Alle Cronjobs nach Erstellungsdatum auflisten]`}</Snippet>

    <P>Nun starte ich die Erstellung einer neuen Cron-Aufgabe
    mittels <Inline>crontab -e</Inline>. Dies wird den Editor
    öffnen, in den ich dann den Syntax für den gewünschten
    Cron-Task eingebe. Dieser wird mit Hilfe des folgenden Schemas aufgebaut:</P>

    <Image src="/static/essays/2013/cronjob-aufbau.png"/>

    <P>Wie oben schon beschrieben möchte ich, dass jeden Tag um genau 8:30 Uhr
    eine bestimmte Datei ausgeführt wird, welche das regelmäßige Backup
    der Zugriffe ermöglicht. Somit müssen die ersten fünf Chars des
    Kommandos wie folgt lauten:</P>

    <Snippet language="bash">{`30 8 * * * // Täglich um 8:30 Uhr wird ausgeführt`}</Snippet>

    <P>Nun fügen die gewünschte Sache ein, die ausgeführt werden soll. Dies
    kann ein Programm, ein Kommando, aber auch - wie in meinem
    Fall - ein ausführbares Script sein. Jetzt muss ich die Datei
    finden, welche es ermöglicht, mein Script zu analysieren und
    auszuführen. Der Dateipfad für die Executable ist: <Inline>/usr/bin/php</Inline>.</P>

    <P>Dahinter fügen wir den Pfad zur PHP-Datei ein, welche
    ausgeführt werden soll. In meinem Fall lautet dieser wie
    folgt: <Inline>/var/www/html/backup.php</Inline>. Somit sieht das
    Kommando, welches wir im Editor einfügen, genau so aus:</P>

    <Snippet language="bash">{`30 8 * * * /usr/bin/php /var/www/html/backup.php`}</Snippet>

    <P>Nun sind wir fast am Ende angekommen. Jedoch steht noch eine wichtige
    Frage offen: Was passiert mit möglichen Fehlern, welche von
    meinem PHP-Script ausgegeben werden? - Ganz einfach. Sie werden
    standartgemäß an die E-Mail-Adresse des System-Administrators
    versendet. Somit an meine Adresse.</P>

    <P>Da diese Art von Datenverkehr aber sehr nervig ist, möchte ich, dass
    alle Fehler in eine Log-Datei geschrieben werden. Um das zu
    ermöglichen, füge ich meinem schluss-endlichen Kommando für den
    Cron-Task einen kleinen Text hinzu.</P>

    <Snippet language="bash">{`30 8 * * * /usr/bin/php /var/www/html/backup.php
> /var/www/html/backup.log 2>&1`}</Snippet>

    <P>Nun bin ich fertig - das Script wird täglich um 8:30 Uhr
    ausgeführt, die Fehler werden in eine .log-Datei abgespeichert, und
    ich kann in Ruhe fernsehen gehen.</P>
  </Post>
)
