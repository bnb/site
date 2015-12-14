---
title: CSS 3 Media Querys
date: 2013-03-30 19:16
lang: de
---

Vor einigen Tagen hatte ich einen Artikel über Responsive Design auf meinem persönlichen Blog veröffentlicht. Darin wurde kurz aber knackig erklärt, wie man denn am besten sein eigenes Design erstellt, was dann auch auf mobilen Endgeräten sauber angezeigt wird, sodass man die Inhalte aufnehmen kann.

Um die genannte Möglichkeit (CSS Media Queries) für seine eigene Webseite nutzen zu können, muss sich der Entwickler den Maßen der Bildschirme bewusst sein, auf die die Webseite in visueller Hinsicht optimiert werden soll.

Da es sehr anstrengend ist, sämtliche Maße der - sich derzeit auf dem Markt befindlichen - Geräten herauszufinden, habe ich mir ein paar Gedanken gemacht, wie man diese Sache den Designern denn etwas einfacher machen könnte. Im Folgenden sind die Media Queries für einige bekannte, mobile Geräte zu finden:

{% highlight css %}
@media screen and (device-aspect-ratio: 40/71) {} // iPhone 5
@media only screen and (-webkit-device-pixel-ratio: 2) {} // Galaxy S3
@media screen and (max-device-width: 480px) {} // BlackBerry Torch
@media screen and (max-device-width: 480px) {} // HTC HD2, Thunderbolt
{% endhighlight %}

Nun kommen wir zu den etwas größeren Geräten wie z.B. Tablets. Bei solchen sind mehrere verschiedene Media Queries vonnöten, da die Maße des Bildschirms zwischen der Portrait- und der sogenannten "Landscape"-Position variieren.

{% highlight css %}
@media (max-device-width: 1024px) and (orientation: landscape) {}
@media (max-device-width: 768px) and (orientation: portrait) {}
{% endhighlight %}

Wie es den oberen CSS-Codes bereits entnommen werden kann, stehen die beiden Media Queries jeweils für die Landscape- sowie für die Portrait-Position des Gerätes. In unserem Fall handelt es sich um ein [iPad 3][1] aus dem Hause Apple.

Ich hoffe ich konnte mit diesem Artikel denjenigen helfen, die es leid sind, das Internet nach den passenden Snippets zur Optimierung ihrer Webseite zu suchen. Weitere praktische Snippets sind übrigends auch [hier][2] gratis zu finden.

[1]: http://www.apple.com/de/ipad/
[2]: http://nmsdvid.com/snippets/
