---
title: Frameworks ARE Cool (Sometimes)!
date: 2015-11-21 14:32
---

As a web developer, I'm very concerned about performance. I've spent a lot of time finding the right workflow for building fast apps (and I still do). My primary wish is that a user shouldn't have to wait to get what he's looking for. We're the web. And the web is currently the fastest and easiest way to get information about a certain topic, be entertained or connect with other people on the other side of the world.

To maintain this, I've tried to find the perfect balance between the ease & speed of development and performance. But since there's no real perfect way to handle this, I [ran against a wall][1] very often. Over time, all of this felt more like a endless philosophical journey than a way to the best solution.

Now I know that it's important to see the big picture instead of just small parts. Of course I will still do my best to make the website of my clients as fast as possible (every MB counts!), but one thing that I will stop doing is trying to squeeze out every single byte of my code.

As a rookie, the first thing you will now think is probably something like "Oh look! He stopped caring about performance, simply because he's tired of looking for the best possible solution". So I will try to explain why it's much better now than it was before (and not worse).

This might sound a bit funny, but for me, it actually has been more effort to care less about this than caring more about it. I had to force myself to put my hands away from those never-ending stories of always wanting to reach the maxium speed and spend more time thinking about how to go bigger steps and improve my projects in an integral way.

Why? Because it's 2015. Devices and internet connections are getting faster and faster, while we're still spending hours of hours trying to reach such little goals instead of solving the big problems in our world.

**But beware!** I'm not telling you to stop caring about performance. I'm just trying to explain why it's better to make big steps.

So I guess there's only one thing left to clarify:

## How I came to this

I've spend the last year designing and developing a big web app based on [Ember.js][2] (I will let you know more about it soon). For this reason, I also had to dig really deep into the idea behind client-side-rendered apps and seperating the project into two parts: The app itself (running in the browser) and an API server which takes in requests and responds with data.

At first, I was a bit confused why they're doing this and why all development tools in this area so opinionated, but now I understand and love it!

The posts of Tom Dale (co-creator of Ember.js) were very helpful on my journey to get there. If you want to dig deeper into this, too, I recommend you to read [this][3] and [this][4].

Here's my favourite part:

> So here’s what I think a more interesting study would be: what is the execution time of real world apps of approximately similar complexity? It may be that apps built with frameworks are still slower. But my hypothesis is that, for apps of any complexity, the ones that start off “vanilla” will accrete their own Frankenframework that performs similarly to, if not worse than, an off-the-shelf framework like Ember or Angular.

Of course those big frameworks aren't made for the average website and in their current state, you should only use them for real web apps. But if your project fits this criteria, you definitely need to use one of them (Ember.js is my personal recommendation).

## Conclusion

Don't underestimate the importance of performance in today's web. But also don't be so stupid to spend all of your valuable time on those little tweaks and go make some big steps!

Oh. And before I forget it: No, I was wrong. Snippet [aren't][5] the future. Carefully used frameworks are.

[1]: http://leo.im/notes/performance-and-developer-friendliness/
[2]: http://emberjs.com
[3]: http://tomdale.net/2015/02/youre-missing-the-point-of-server-side-rendered-javascript-apps/
[4]: http://tomdale.net/2015/11/javascript-frameworks-and-mobile-performance/
[5]: {% post_url 2015-06-07-snippets-are-the-future %}
