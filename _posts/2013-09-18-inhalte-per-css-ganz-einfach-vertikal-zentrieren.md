---
title: Inhalte per CSS Ganz Einfach Vertikal Zentrieren
date: 2013-09-18 18:58
lang: de
---

In letzer Zeit las ich im Netz einige Beitrage von Nutzern, die sich darüber beschwerten, dass man Text bzw. Inhalte in HTML per CSS nicht vertikal ausrichten kann. Das stimmt so eigentlich nicht, weshalb ich im folgenden mal eine kleine Anleitung gebe, wie das denn zu schaffen ist:

Wir arbeiten hierbei mit dem allgemeinen Prinzip der Tabelle. Eine Möglichkeit, die jeweiligen Inhalte vertikal sauber zu zentrieren ist natürlich eine HTML-Tabelle zu erstellen und hinein eine Zelle zu packen, und ihren Inhalt mit Hilfe von CSS vertikal zu zentrieren.

Allerdings ist dies ziemlich umständlich - ist ja nicht gerade praktisch wenn man eine Tabelle in den eigenen HTML-Code packen muss, wenn man ausschließlich auf ein vertikal zentriertes Element aus ist.

Nun zur Anleitung: Zunächst erstellen wir uns ein Element (z.B. ein/e DIV), welcher/m wir mittels CSS 100% Höhe, 100% Breite sowie folgendes Attribut verpassen, welches später eine Tabelle simuliert:

{% highlight css %}
display: table;
{% endhighlight %}

Als nächstes packen wir in das erstelle DIV-Element ein weiteres DIV-Element, welches auch den Inhalt enthält, der vertikal zentriert werden soll. Diesem weißen wir folgende CSS-Attribute zu, um eine Tabellen-Zelle zu simulieren und deren Inhalt vertikal zu zentrieren:

{% highlight css %}
vertical-align: middle;
display: table-cell;
{% endhighlight %}

Nun wird der Inhalt des als letztes genannten DIV-Elements vertikal zentriert. Wenn nun auch noch eine horizontale Zentrierung gewünscht ist, kann diese natürlich ganz einfach mit dem `text-align: center;`-Attribut für letzteres Element erreicht werden. Hierzu eine kleine [Demo][1].

Falls die vertikale Zentrierung nicht innerhalb anderer Elemente erfolgt, müssen die Elemente `html` und `body` in Sachen Breite und Höhe natürlich noch so angepasst werden, dass sie die Browser-Fläche komplett ausfüllen, wie in der Demo gezeigt. Viel Spaß beim Coden!

[1]: http://codepen.io/jonsuh/pen/duvgE
