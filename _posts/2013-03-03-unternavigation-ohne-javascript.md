---
title: Unternavigation Ohne Javascript
date: 2013-03-03 18:13
lang: de
---

Schon wieder ein Thema, bei dem man einige unbrauchbare Scripte und Funktionen weglassen kann. Denn diese verlängern die Ladezeiten und lassen die Navi nicht wirklich gut auf gleichgesinnte Webentwickler und Coder wirken.

In diesem Beitrag werde ich ihnen ganz einfach vorstellen, wie sie eine eigene Unternavigation für ihr Menü erstellen, und das ganz ohne Javascript oder ähnliche Anwendungs-Scripte, die Funktionen von Nöten haben.

Zunächst sollte eine einfache Navigation erstellt werden. Diese kann etwa wie folgt aussehen (ich stelle hier die Navigation ohne eine CSS-Formatierung dar):

{% highlight html %}
<ul>
  <li><a href="#">Erster Link</a></li>
  <li><a href="#">Zweiter Link</a></li>
  <li><a href="#">Dritter Link</a></li>
</ul>
{% endhighlight %}

Nun nehmen wir uns einen Link heraus und starten damit, ihm ein Untermenü zu verpassen. Hierfür stellen wir wieder zunächst den HTML-Code auf:

{% highlight html %}
<ul>
  <li><a href="#">Zweiter Link</a>
      <ul>
        <li><a href="#">Erster Unterlink</a></li>
        <li><a href="#">Zweiter Unterlink</a></li>
      </ul>
  </li>
</ul>
{% endhighlight %}

Wie man unschwer erkennen kann, wird die das LI-Element des normalen Navigationspunktes über ein UL-Element gezogen, welches die Punkte des Untermenüs enthält. Diese werden ganz normal in LIs aufgeteilt.

Nun geht es um den CSS-Teil, dieser hat höchste Priorität:

{% highlight css %}
li ul { display: none; }    // UL der Unternavigation ausblenden
li:hover ul { display: block; }    // UL bei Hover einblenden
{% endhighlight %}

Und schon ist die Navigation fertig. Absolut ohne Javascript, sondern aus reinem CSS und HTML. Nach Wunsch können für "display" auch andere Attribute wie "height" oder "visibility" verwendet werden. Auch CSS3-Transitions sind erlaubt.
