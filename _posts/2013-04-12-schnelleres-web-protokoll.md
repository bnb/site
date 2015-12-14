---
title: Schnelleres Web-Protokoll
date: 2013-04-12 16:00
lang: de
---

Vor einigen Tagen hatte ich mich mit einem Kunden über die möglichen Varianten zur Verbesserung der Leistung meiner Server unterhalten. Dabei kamen wir zudem auf das Thema der Ladezeiten. Ich meinte, dass ich für weitere Arten offen währe, die es ermöglichen, dass Daten schneller geladen werden können.

Dann hatte er mir von einer Software für Apache 2.2 erzählt, die es ermöglicht, aus SPDY-Funktionen wie "stream", "multiplexing" oder "header-compression" einen Vorteil zu ziehen. Somit sah ich mir die Erweiterung mal an.

Zunächst einmal möchte ich überhaupt das Wirken der Software genauer erläutern: In Zusammenarbeit mit dem Programm kann Apache mit Browsern, die das Protokoll "SPDY" beherrschen, Daten auf diesem Weg austauschen. Die HTTP-Alternative "SPDY" soll die Ladezeit von Webseiten um rund 55 Prozent reduzieren. SPDY wird derzeit von Google Chrome und Firefox unterstützt.

Klingt eigentlich ganz gut, nicht war? Schade ist nur, dass mod_spdy bei jeder Verbindung zwischen Endbenutzer und Server das HTTPS-Protokoll erzwingt. Wer das Modul trotzdem ausprobieren möchte, kann sich dieses für CentOS sowie für Debian [hier][1] herunterladen. Ich werde es demnächst auch einmal genauer prüfen.

Einer der entscheidenden Faktoren für die Steigerung der Geschwindigkeit durch SPDY ist das sogenannte "Multiplexing": SPDY erlaubt es, mehrere HTTP-Requests in einer **einzigen** TCP-Session abzuwickeln. Dies reduziert die Bandbreite gegenüber dem heute genutzten HTTP durch Eliminierung von überflüssigen Headern und Komprimierung. Weniger Verbindungen müssen aufgebaut werden.

Derzeit wird die Erweiterung von Google entwickelt. Diese nutzen das Programm für ihre Webseiten, da diese - selbstverständlich - einiges aushalten müssen. Im Dezember 2011 kündigte Google offiziell die Entwicklung von mod_spdy an und veröffentlichte zugleich eine Betaversion des Apache-Moduls.

Ein kleines Video, in dem das Programm im Zusammenhang mit einer normalen HTML-Seite mit einigen Grafiken genutzt wird, ist übrigends [hier][2] zu finden.

[1]: https://developers.google.com/speed/spdy/mod_spdy/
[2]: https://youtu.be/vEYKRhETy4A
