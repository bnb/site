---
title: E-Mails Mittels Linux-Shell Versenden
date: 2013-10-20 22:35
lang: de
---

Immer öfters kommt es vor, dass ich bestimmte Log-Datein von meinem Server laden muss. Um das ganze etwas zu vereinfachen hab' ich mich mal nach einer Möglichkeit umgeschaut, die Logs direkt an meine E-Mail-Adresse zu senden.

Auf sauber aufgesetzten Linux-Servern (sendmail installiert und funktionsfähig), kann mittels folgendem Kommandos eine E-Mail direkt über die Shell versendet werden:

{% highlight console %}
mail -s "Dein Betreff" mail@domain.tld
{% endhighlight %}

Nach der Eingabe sollte der Text-Cursor eine Zeile weiter nach unten verschoben werden, was einem die Möglichkeit bietet, nun den gewünschten Inhalt einzugeben. Sobald wir fertig sind muss zunächst die Eingabe-Taste gedrückt, dann das Feld mit <mark>Strg + D</mark> geschlossen werden.

Direkt nach dem Schließen des Inhalts-Editors wird die Nachricht versendet und sollte für gewöhnlich sekunden später im Posteingang des Empfängers landen.

Das ganze reicht mir jedoch nicht, da ich ja eine Datei an die Mail anhängen möchte. Hierfür fügen wir zum allgemeinen Kommando einfach noch "-a" sowie den Pfad zur Datei hinzu:

{% highlight console %}
mail -s "Betreff" -a /logs/file.log mail@domain.tld
{% endhighlight %}

Das beste an der ganzen Sachen ist ja immer noch, dass mit diesen Hilfe dieser Befehle natürlich auch Mails durch Shell-Scripte versendet werden können. Hierfür erstellen wir solches ganz einfach und setzen einen - sagen wir ... täglichen - Cronjob drauf an, welcher uns dann z.B. jeden Morgen unsere Logfiles oder ähnliches zusendet.

Natürlich müsste dann auch der Inhalt der E-Mail direkt im Script definiert werden. Dies erledigen wir, indem wir ein echo an mail weitergeben:

{% highlight console %}
echo “Deine Nachricht” | mail -s “Betreff” mail@domain.tld
{% endhighlight %}

Wem das ganze dann noch nicht genug ist, der kann sich mittels <mark>man mail</mark> alle möglichen Variablen der Funktion einsehen und natürlich auch welche Bedingungen beim Definieren dieser eingehalten werden müssen.
