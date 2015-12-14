---
title: Nervige SkyDrive-Option Vom Rechtsklickmenü Entfernen
date: 2013-03-31 13:20
lang: de
---

Vor kurzem hatte ich ein wenig Freizeit, und wusste nicht, was ich denn machen solle. Nach einigen Minuten intensiver Überlegung entschied ich mich, die Demo-Version von Office 365 herunterzuladen, um mir - vor dem Kauf - durch die eventuellen Features der Software eine eigene Meinung bilden zu können.

Dies erwies sich zunächst als ziemlich schwierig, da ich - um das Programm zu installieren - zunächst einmal ein Konto bei Microsoft benötigte, welches ich natürlich nicht hatte. Doch schnell tat sich der nächste Alptraum auf.

Um die heruntergeladene **Testversion** von Office 365 überhaupt verwenden zu können, wurde ich daraufhin noch gezwungen, eine der zwei gebotenen Möglichkeiten zur Zahlung auszuwählen. Dies geschah unter folgendem Vorwand:

> Der erste Monat Ihres Abonnements ist kostenlos, doch Sie müssen mögliche Zahlungsinformationen angeben. Sie können während des Zeitraums des Tests kündigen, ohne dass sie mit irgendwelchen Kosten belastet werden.

Als ich sämtliche Infos an Microsoft übermittelt, und mir noch schnell einen Tee gemacht hatte, war mein System endlich bereit, mir Office 365 vorzustellen. Alles schön und gut, doch nach wenigen Minuten sah ich etwas, was mir nicht gefiel: Office hatte in meinem Rechtsklick-Menü die Option "SkyDrivePro" untergebracht.

Da diese Option - wie ich später herausfand - eigentlich nur zur Platzierung von Produkten gedacht war, entschloss ich mich äußerst schnell, sie wieder zu entfernen. Hierfür folgte ich diesen praktischen Schritten:

1. Die CMD starten, mit dem Kommando "regedit" den registry editor öffnen.

2. Zum untenstehenden Verzeichnis mit Hilfe des linken Menüs navigieren: *HKEY_CLASSES_ROOTAllFileSystemObjectsshellSPFS.Context menu*

3. Den Ordner mit Rechtsklicks und dann einem Klick auf "Löschen" entfernen.

Als ich alle drei Aktionen sauber und nach der Reihe ausgeführt hatte, war die nutzlose Option in meinem Rechtsklick-Menü endlich wieder verschwunden.
