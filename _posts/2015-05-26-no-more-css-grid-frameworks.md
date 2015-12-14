---
title: No More CSS Grid Frameworks
date: 2015-05-26 20:53
---

A few minutes ago, I read a [post][1] on Designer News that was created by a guy that wanted to create another flexbox-based grid framework for CSS. He probably knew that there are already many of them out there. But that didn't held him back from asking for interest in another one.

The reason behind that is for sure that he just likes coding and also sees a thin gap for really great grid frameworks. Because I want people to stay motivated on their idea (no matter how many other guys already made it happen), I generally think it's not a bad idea to create another one. **BUT** only if he's doing it for the purpose of learning and not for other people. 😉

**Why?** Because the need for those kinds of frameworks will soon be gone forever. — Okay, that might be a bit confusing for you know, so let's start with a quick explanation:

I don't know how you do it, but since a few years I have been using grid frameworks to align content properly and create responsive web layouts. With the time, a couple of aspects on the initial idea have changed: Websites are now mostly beeing designed mobile-first (fortunately) and flexbox allowed us to reach our goal of creating a effective CSS-layout more quickly by providing us with properties that can help us to equate the height of columns lined up in a row without knowing their content's size or using a mushy JS mixture that does this job.

Until now, this was pretty much the best way to create a proper website layout (without writing a custom grid of course). Fortunately, we're now finally getting redeemed from this heavy performance load - thanks to `grid`.

## What's so good about it?

It's basically a [new CSS method][2] that allows us to easily create beatiful web-layouts without a huge grid framework. No matter how tiny the budget of the client and how short your available time will be, `grid` provides you with many different properties which tell the browser how to position an element within the design.

And the best thing about that: It seems like the browser just doesn't care about the position of the element within the HTML code. For example, a column that you want to show on the top right edge of the browser window can be placed right before the body tag closes (after all other elements).

It's kind of like using `position: absolute` but without needing to specify the position of the element with pixels. *The grid will figure it out by itself.* — W3C describes this behaviour as [source-order independence][3].

## Browser support

Because it's a pretty new technology, there's currently only one browser that supports it by default: You won't believe me if I tell you ... *laughs* ... I just ... okay, it's our always beloved friend, the Internet Explorer. But no worries, you won't completely sink into confusion here: You still need to use the `-ms` prefix. Now it makes a bit more sense, right? *laughs*

Anyway. If you don't use IE (*shame on you*) you're also able to enable it through the "experimental Web Platform features" flag in *chrome://flags* within Chrome or Opera.

## So just an alternative to flexbox?

**No!** — Don't start running and yelling 'Fuck you flexbox' around in your office, WE STILL NEED IT!

Those two properties are meant to be used for two completely different cases. The first - `display: grid` - can be used to create the general layout of your web- app or -site but not to align the "boxes" that contain the content. This is where `display: flex` claims your attention. It should be used to put all columns in one row to the same height for example.

Okay, let's sum up for which each property should be used:

- **grid:** — Layout
- **flex:** — Content

I think that's pretty easy to understand, isn't it? 😸

So what are you waiting for? Open Chrome, enable that experimental flag and try the shit out of `grid`! If you get stuck or simply want to know more about how the property exactly works and how it should be used, take a look at the [W3C documentation][2].

There are much more use cases for it to discover and we should all participate in it's development. I think it's a really huge step into the direction of a world that's free of performance- and memory-draining CSS frameworks.

[1]: https://news.layervault.com/stories/49997-ask-dn-should-i-make-a-css-boilerplate-and-flexbox-grid-system
[2]: http://www.w3.org/TR/css-grid-1/
[3]: http://www.w3.org/TR/css-grid-1/#source-independence
