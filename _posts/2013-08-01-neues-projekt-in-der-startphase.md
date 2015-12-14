---
title: Neues Projekt in Der Startphase
date: 2013-08-01 21:30
lang: de
---

Eigentlich hätte ich euch schon viel früher darüber informieren sollen, aber das Projekt hat einen ziemlich großen Teil meiner Zeit gefressen. Ich rede von Uptime-Monitor, einem schlanken, einfach zu bedienenden Dienst, welcher es Besitzern einer Homepage möglich macht, über den Status ihrer Webseite auf dem Laufenden bleiben zu können, ganz egal wo auch immer sie gerade sind.

Das Verfahren ist eigentlich ganz einfach zu verstehen: Zunächst erstellt der Nutzer auf unserer Seite einen - wie wir ihn nennen - “Monitor”, indem er die URL, IP oder Domain seiner Webseite sowie einen kurzen Projektnamen (Dient zur Unterscheidung von anderen Monitoren) angibt.

Dann hat der User die Möglichkeit, ein Intervall festzulegen, indem die angegebene Adresse von unserem Dienst geprüft werden soll. Hierbei kann er zwischen <mark>60, 30, 15, 10</mark> und den für Premium-Nutzer freigegebenen 5 und einer Minute wählen. Dann werden alle Einstellungen gespeichert und die genannte Adresse fortan von unserer Infrastruktur auf Verfügbarkeit geprüft.

Alle Monitore, die der Nutzer in seinem Konto erstellt hat, werden auf der Übersicht untereinander aufgelistet. Nun die Erklärung des Sinn und Zweckes des Projektes mit Hilfe eines kleinen Beispiels: Die Webseite des Nutzers erleidet einen schweren DDoS-Angriff, oder hält ganz einfach nicht stand, da zu viele andere User die Seite besuchen. Jetzt kommt Uptime-Monitor ins Spiel. Durch die regelmäßige Prüfung der Adresse erfährt unser System, dass die Webseite des Nutzers nicht mehr erreichbar ist, da bei Zugriff eine Zeitüberschreitung erfolgt.

Unsere Infrastruktur reagiert nun sofort und sendet an den Nutzer eine E-Mail, oder kontaktiert in wahlweiße ganz einfach per SMS aufs Handy. Nun kann der Administrator reagieren und entsprechende Schritte einleiten, damit seine Webseite wieder einwandfrei erreichbar ist. Um die SMS-Funktion nutzen zu können, wird dem Nutzer ein sogenanntes Premium-Upgrade geboten, welches er für günstige 30€ für ein Jahr via Zahlung per PayPal erwerben kann.

Natürlich bieten wir für Entwickler auch eine API. Diese dient als Schnittstelle zu unseren Systemen und ermöglicht es dem User, die gesammelten Daten z.B. auch auf seiner eigenen Homepage auszugeben. Für Nutzer mit einem Premium-Konto gibt es die API v2, mit der auf Wunsch auch neue Monitore erstellt, oder bereits bestehende bearbeitet werden können. User mit einem kostenfreien Account müssen sich hierbei mit der API v1 begnügen, welche ausschließlich die Abfrage von Daten erlaubt, und das nur im Bereich bestimmter Limits. Nutzer, welche im Besitz eines Premium-Kontos sind, können bis zu 50 Monitore hinzufügen, wobei sich “Free-User” mit maximal 3 Stück zufrieden geben müssen.

Selbstverständlich müssen auch wir unsere Infrastruktur irgendwie finanzieren, bzw. unsere Dienstleistung aufrecht erhalten. Mit dem Kauf eines Premium-Accounts für 1 Jahr unterstützen sie unser Projekt. Wir können unsere Leistung somit weiterhin aufrecht erhalten, sowie weitere Funktionen einbauen und leichter auf Kundenwünsche eingehen. In seinem jetzigen Status wird das ganze Projekt voll und ganz durch die Einnahmen finanziert, die durch den Verkauf von Premium-Paketen generiert werden können. In diesem Sinne bedanken wir uns sehr für jegliche Unterstützung! Man bedenke hierbei folgendes: Auf einen einzigen Nutzer kommen pro Monitor täglich bis zu 1440 Abfragen.

So, ich denke das sind für Heute genug Infos. Das Projekt geht offiziell voraussichtlich gegen Ende Juli online. Wer direkt informiert werden möchte, wenn das Projekt erreichbar ist, kann derzeit unter uptime-monitor.net seine E-Mail-Adresse eintragen, an die am Release-Tag eine Nachricht gesendet wird. (Keine Angst, die Adresse wird nach dem einmaligen Versand der Veröffentlichungs-Nachricht direkt von unserem System entfernt, es erfolgt kein Newsletter-Abo oder Ähnliches. Für weitere Neuigkeiten und Informationen über das Projekt bietet sich übrigends mein [Twitter-Account][1] an.

[1]: https://twitter.com/lmprht
