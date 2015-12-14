---
title: Responsive-Designs Erstellen
date: 2013-02-25 21:11
lang: de
---

Da ich mich immer mehr Leute fragen, wie das mit dem Responsive denn geht, dachte ich mir, die grundlegenden Informationen hierzu mal in einem kleinen Artikel zusammenzufassen, welcher gerade seine Gestalt annimmt.

Zunächst mal ist es wichtig, die Programmiersprache "CSS" einigermaßen gut zu beherrschen, denn darauf baut sich die ganze Optimierung des Designs auf. Jedes Design, das responsive ist, arbeitet mit sogenannten Media-Queries, welche seit der dritten CSS-Version auf fast allen Browsern verfügbar sind.

Das ganze Verfahren lässt sich wohl am besten durch verschiedene Beispiele erklären. Die folgenden Snippets können ganz einfach und ohne Probleme im CSS-Code der eigenen Webseite eingebettet werden.

Der folgende Code aktiviert die Attributierungen, die er enthält, wenn der Bildschirm des aufrufenden Benutzers kleiner als 1220 Pixel ist:

{% highlight css %}
@media only screen and (max-width: 1220px) {
  #testelement {
    display: block;
    position: relative;
  }
}
{% endhighlight %}

Es lassen sich alle Arten von Attributierungen im Code anbringen, da sind absolut keine Grenzen gesetzt. Jedenfalls werden diese aktiviert, wenn die eingestellten Anforderungen der Media-Queries mit dem Bildschirm übereinstimmen.

Das gleiche funktioniert auch umgekehrt. Das bedeuted, es können minimale Maße als Anforderungen für den Bildschirm gesetzt werden:

{% highlight css %}
@media only screen and (min-width: 660px) {
  #testelement {
    overflow: hidden;
    border: medium double #000;
  }
}
{% endhighlight %}

So können alle Code-Elemente einer Webseite angesprochen werden, bis jedes Element an die Maße des Bildschirms angepasst ist. Und schon sind sie fertig!
