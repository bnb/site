---
title: Weg Mit Diesen Blöden Verknüpfungs-Pfeilen Auf Windows 7
date: 2014-01-27 19:33
lang: de
---

Da ich es an meinem "Arbeitsplatz" ja gerne immer relativ ordentlich habe, musste es natürlich irgendwann so weit kommen, dass mir diese dummen Dinger einfach ins Auge stechen. Wie es der Titel schon unschwer vermuten lässt, zeige ich dir heute, wie du diese kleinen Pfeile von den Verknüpfungen auf deinem Win7-Desktop entfernen kannst.

Gleich zu Anfang: Falls du schlicht keine Lust auf die unten stehende Anleitung hast, kannst du dir auch gerne ein [Programm][1] laden, welches die Arbeit dann für dich erledigt.

Da ich selbst grundsätzlich allerdings nicht so gerne irgendwelche Programme ausm Netz herunterlade (geschweigenden solche, die manuell schnell zu bewältigende Aufgaben für mich lösen), hab mir im Netz ein paar Fetzen zusammengesucht und fasse dir diese nun in eine kurze Anleitung zusammen:

## Schritte zum Pfeil-leeren Desktop-Icon

1. Öffne die Explorer-Suche und finde "regedit" (.exe)

2. Nachdem du die Datei geöffnet hast, navigiere zu folgendem Verzeichnis: `HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionExplorer` Dort sollte sich eine Verzeichnis mit dem Namen "Shell Icons" befinden. (Falls selbiges **nicht** vorhanden ist, erstelle es wie folgt: Rechtsklick auf das "Explorer"-Verzeichnis, dann "Neu" und dort "Schlüssel" wählen. Der entstandene Ordner muss dann "Shell Icons" genannt werden.)

3. Nun musst du im "Shell Icons"-Verzeichnis die nötigen Bedingungen setzen, um den blöden Pfeil verschwinden zu lassen: Klicke einfach mit einem Rechtsklick auf den "Shell Icons"-Ordner und wähle dann unter "Neu" den Punkt "Zeichenfolge". Als Titel für die neue Zeichenfolgen gibst du die Zahl <mark>29</mark> ein.

4. Als nächstes klickst du doppelt auf die angelegte Zahl 29. Jetzt sollte sich ein Fenster öffnen, in welchem du den Pfad zum neuen Verknüpfungs-Pfeil eingeben kannst. Um den Pfeil ganz verschwinden zu lassen, gibst du z.B. folgenden Pfad an (enthält ein leeres Icon): `C:Windowssystem32imageres.dll,-121`

5. **Achtung:** (Falls im "Shell Icons"-Ordner bereits eine Zeichenfolge mit dem Titel "(Standard)" vorhanden ist, ignoriere diesen Schritt bitte!) - Lege mit dem selben Schema wie in Punkt 3 einen weitere Zeichenfolge an, allerdings mit dem Namen "(Standart)" (Wer kann leer gelassen werden).

6. Hast du den Pfad angegeben, kannst du ihn mit einem Klick auf "OK" abspeichern. Nun musst du dein System nur noch einmal neu starten, und schwups: Der nervige Pfeil ist weg! :)

## Aktion rückgängig machen

Du möchtest dein Verknüpfungs-Pfeil wiederherstellen? Kein Problem! Lösche einfach den Ordner "Shell Icons", welchen du nach der obigen Anleitung erstellt hast, und starte deinen PC nochmals neu. Schon ist er wieder da!

Hast du zu diesem Thema noch irgendwelche Fragen, oder möchtest mir sagen wies denn noch schneller oder sauberer geht? Dann lass doch einfach ein Kommentar da!

[1]: http://www.delightsoftware.com/de/ShortcutOverlayRemover
