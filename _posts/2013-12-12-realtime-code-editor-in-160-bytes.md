---
title: Realtime Code-Editor in 160 Bytes
date: 2013-12-12 20:38
lang: de
---

Ein paar JavaScript-Freaks aus Frankreich, Norwegen und Deutschland haben sich vor kurzem zusammengefunden, um ihre Idee des kleinsten Code-Editors der Welt zu verwirklichen. Dies ist ihnen anscheinend auch gelungen.

Der Editor umfasst jeweils ein Textfeld für HTML-, CSS- sowie für JavaScript-Codes und kann mittels eines kleinen JS-Snippets aufgerufen werden. Das folgende Snippet umfasst gerade einmal 169 Bytes und erzeugt trotz dessen einen voll funktionsfähigen

Hier der gesamte Code für das Projekt:

{% highlight html %}
<body oninput='e.firstChild.srcdoc=t2[v="value"]+"<script>"+t0[v]+"</script><style>"+t1[v]'onload='for(i=3;i--;)e.innerHTML+="<textarea id=t"+i+" rows=9>"'id=e><iframe>
{% endhighlight %}

Auf der [Homepage][1] des Projekts kann nach außerdem noch zwischen zwei weiteren Ausführungen gewählt werden, die dann je nach Variation auch die Möglichkeit bieten, die erzeugten Outputs mittels einer URL zu teilen.

Hierfür ist (wie sich einige unter euch jetzt denken werden) keine Datenbank nötig. Warum? - Ganz einfach: Die eingegebenen HTML-, JS- und CSS-Codes werden formatiert und direkt in der URL gesichert.

Wer möchte kann sich dann auch noch aus 6 verschiedenen Anordnungen der einzelnen Textboxen wählen. Andernfalls können alle Teile des Editors natürlich mittels CSS nach Wunsch designtechnisch angepasst werden.

[1]: http://xem.github.io/miniCodeEditor/minimal.html
