---
title: About Front-End Editors and Their Mistakes
date: 2015-08-19 14:41
---

If you're on a social network and following some of the most known people in the industry, you can't use excuse that you don't already know of this topic. Every month someone new comes around with a supposedly better solution for allowing clients to easily edit their websites by themselves, without needing to contact an agency and pay hundreds of euros just to make a small change on the design of the site.

I took my time and started looking carefully on how those people are building such products and I noticed: Instead of learning from each other, they always make the same fault over and over again.

Therefore I'd like to use this post to clear up some things for all those of you who're planning to go into this direction too, since you'd like to enable casual people (who are no developers at all) to be independent from expensive companies. Why should I do this? Because I think that it's not a bad idea at all, it just needs to be done properly.

Then let's start with some common errors I've recently noticed on many of those apps:

- Content isn't absolute. It's relative. If you're developing websites and want to take care of it's usability, you'll build it mobile first. Which means that the elements on your site will react to the size of the screen and show different variants of the initial content to be perfectly accessible for users on different devices. This in turn means that you definitely need to find a way to edit those elements in deviant forms.

- Elements aren't always visible and therefore editable. They're hidden between sliders, curtains, and other kinds of walls of different items or effects. If you want to create a productive app that makes editing easier, you either have to find a way to show those hidden parts as soon as the user wants to edit them (which is very hard since every design has a completely different markup for those things) or provide a different view for those items, which shows all hidden items so that the users can change their contents [^2].

- To break it down: More ease on the aspect of editing on the front side also means less possible complexity when it comes to the layout. If you want to create a useful solution, you need to find a way to maintain the complexity of the layout while also making it easy to edit (and maybe also move) elements around.

While developing such things, please take advantage of other peoples knowledge. Many of us spend hours of thinking about the right process and I'm sure you don't want to waste time.

As I already said, I'd love to provide clients with a front-end editing tool that doesn't suck.

Oh. And please don't understand this like an attack on those apps. I don't fear for my job (like many others who're writing essays like this one do). If they do something, they do it for themselves, rather than for the cause and therefore lack the necessary drive and literally only [ship shit][1], which is also the reason why they need to have fear of someone else coming around with a better solution.

What's important for me is that the web works and definitively not that my solution keeps it running. I don't give a fuck about which solution will make the run, as long as it keeps the web alive, I'm happy. But as you can see, there's still much work todo.

Otherwise I wouldn't be here - that's my job.

[1]: http://blog.heyimcat.com/its-called-ship-not-shit/

[^1]: You say I don't have the right to say such things? Don't worry, there's still enough time left for me to prove my point.

[^2]: If you do it like this, you'll probably end up with a view that looks like the ones within a regular dashboard. The only difference will be that it's on the Front-End instead of on the Back-End.
