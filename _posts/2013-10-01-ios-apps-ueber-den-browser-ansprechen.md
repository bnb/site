---
title: iOS-Apps über Den Browser Ansprechen
date: 2013-10-01 10:57
lang: de
---

Wie einige von euch sicher schon gemerkt haben, sind die generierten Buttons zum Twittern und Flattrn meiner Artikel vom unteren Teil der Beiträge verschwunden.

Weshalb? Zum einen verlängern die geladenen Scripte die Ladezeit um einige wertvolle Millisekunden - ein viel wichtiger Grund zur Abschaffung war jedoch folgender: Ich möchte direkt installierte iOS-Apps ansprechen, falls diese vorhanden sind.

Also habe ich mich auf die Suche gemacht und bin auf eine [Website][1] gestoßen, die URL-Schemes einiger bekannter iOS-Apps kostenfrei auflistet. Dort habe ich mir dann z.B. das ensprechende URL-Schema zum Ansprechen der offiziellen Twitter-App gegriffen.

Im Grunde lassen sich die URLs nach dem modifizieren mit eigenen Inhalten ganz einfach durch Javascript oder HTML-Links absprechen. Jedoch tut sich nun ja folgendes Problem auf: Was wenn der Nutzer über seinen Desktop-PC / Mac zugreift?

Hierfür währe das URL-Schema ja nutzlos, da keine Twitter-App vorhanden ist, welche die URLs verarbeitet. Mein Ziel: Falls iOS-App vorhanden, diese ansprechen. Falls nicht vorhanden, URL des Twitter Webclients aufrufen.

Vom Browser aus zu prüfen, ob eine App auf dem eigenen Gerät installiert ist, klappt bei iOS leider noch nicht. Aus diesem Grund bedienen wir uns hierbei mit Javascript. Zunächst versuchen wir die App zu erreichen...

{% highlight js %}
window.location = "twitter://post?message=zu teilender Text";
{% endhighlight %}

...falls diese nicht erreicht werden kann, soll der Webclient aufgerufen werden. (Inklusive zeitlichen Puffer von 300 Millisekunden, damit genügend Zeit für die Prüfung der App bleibt.)

{% highlight js %}
setTimeout(function () {
  window.location = "https://twitter.com/intent/tweet?source=webclient&amp;text=zu teilender Text";
}, 300);
{% endhighlight %}

Das ganze packen wir dann am besten noch in eine eigene Funktion, welche wir mit Hilfe des "OnClick"-Eventhandlers z.B. durch einen HTML-Link ansprechen. Nun versucht der Browser die iOS-App zu öffnen - wenn diese nicht erreicht werden kann, wird der Link des Webclients gecallt.

Solange sie URL-Schemes bieten klappt das Ganze auch mit allen anderen iOS-Apps. Im meinem Fall muss dann natürlich auch ein Webclient vorhanden sein, falls der Nutzer die entsprechende App nicht verwendet.

[1]: http://wiki.akosma.com/IPhone_URL_Schemes
