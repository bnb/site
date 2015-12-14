---
title: Possible Ways to Avoid Floating in CSS
date: 2015-06-13 13:39
---

Do we still need to use it? Yes, the `float` property has been here for a really long time. I guess most of us used it for galleries, navigations and maybe also grids. But let's be honest with ourselves, it's a very uncomfortable way to align items one-after-another.

Firstly, there's this whole problem that the parent element of the aligned items will break down like an old house that's currently being demolished by a demolition crane. *Okay, I'm digressing a bit, let's move on.* So why are we still using it? I mean, pushing an inline image to the side and letting other elements (like paragraphs) flow around it is still a great use-case. But it clearly generates to much hassle in the end, if you ask me - you need to take care of too much other aspects like clearing floats and making sure they don't affect other elements.

The answer is: No, we don't need to use this method for columns within content-areas anymore, there are some other alternatives which are way more easy to use and therefore create much less pain while developing. Until now, many web-developers might have argued with the fact that property-values like `flex` are were badly supported by browsers. But this time is over, every major browser encourages you to use it now.

If you're also tired of floating elements and want to try out something new, continue reading. If not, you're completely free to leave this page.

Alright gentlemen, then start your engines now! Thanks to the cool people who are contributing to the web standards, I'm now able to show you a few other methods for aligning items that are much less pain-in-the-ass and also way easier to use.

## Flexbox

Firstly, there's `flex` - I told you about it earlier. It's a convenient manner that allows you to position elements with different sizes easily by providing maximum and minimum widths or heights for example. It will also bring other sub-properties which are able to calculate the size of an item in dependence of the other ones around it.

Like [Chris Coyier][1]{:target="_blank"} already said it:

> The main idea behind the flex layout is to give the container the ability to alter its items' width or height in order to best fill the available space...

The problem with our current box model is that we're theoretically not able to set three elements to the exact same width, for example. For this, you would technically need to set a width of 33,<span style="text-decoration: overline">3</span>% for each of them (100% divided into 3 columns), and it's neither possible to set periodical numbers in CSS, nor is it useful. Sure, there's a practical solution for that:

Browsers are built to figure things like this out and close the gap between theory & practice. They will always size the items until they're completely equally of width. But in my view, that's just a messy solution and not stable for the future. And yes, that's where *flex* comes in.

There are a few more things that I especially like on this property, everything is less confusing with it. For example, the container's margins don't collapse with the margins of its child elements. And even better: The parent element doesn't suddenly loose it's height and the display-order of it's children is completely independent of their order in the source code.

To start using this method now, just try it's easy syntax and add the following to the parent element:

{% highlight css %}
display: -webkit-flex;		// webkit-based browsers
display: block;			// all other ones
{% endhighlight %}

For the first steps, there's absolutely no need to add attributes to the child items. They will magically start reacting to this change and will immediately line up one after another. If the content elements of the container aren't modified in any other way, it will look like this:

{% include pen.html slug="1becc47f9b6b90d3dad30649e061ddbc" height="240" %}

But beware, there are many other cool properties like `justify-content` (which I also used to center the items in this preview), `align-self` and `order`. If you want to learn more about how to exactly use them, take a glimpse on Mozilla's [documentation][2]{:target="_blank"} (the other related properties are shown on the left there).

However, watch out! In the current state of art, the *flex*-property is supported on most browsers (like I already said), but you still need to use prefixes when firing it up in Chrome or Safari for example. The confusing thing about that is that the main property wants you to insert the prefix within the value ("-webkit-flex") and not before the key (just take a look on the code example up there). All other properties can generally be prefixed as usual (e.g. "-webkit-justify-content: center").

## Blocks, but inline

Yes, that's kind of a weird heading but describes exactly what I want to talk about now: The `inline-block` value used in combination with the `display` property. Sure, you might already now about it *(What am I talking about, of course you do...)*, but have you ever thought about using it as an alternative for aligning columns? I mean, that's the use-case for which you perhaps needed floats before, right?

Okay then. I will now try to be as direct as possible when presenting you the pros and cons of this property. First off, we need to talk about whitespace, one of the disadvantages of this method:

When setting up a portion of clean HTML code, you'll probably make use of several great indention options to make the code easily readable. That means, you'll put each child element into a new line instead of writing them all successively. And that's great, please don't do it otherwise! However, this indention will generate irritating space-characters between the elements in the output — look here:

{% include pen.html slug="cd4a213638114aea89cbd3137b36bb19" height="240" %}

But of course we neither need nor want them to show up. They're just completely useless when creating columns. To fix this issue, we need to set `font-size` to 0 or put all items in one line within the code. Well, you might have already noticed it: That's also a hacky solution, isn't it? And not something that has been covered by the creators of this property, so it might also be inappropriate to use this value for columns (I guess that's were the opinions differ. Many people are arguing that this is something that can be overlooked without worries, other people might say it's clear that it's not the right property for this case).

Anyway, don't hold yourself back from using it just because it needs some more adjustments to work properly (this are my 2 cents). We need to use things for different purposes other than they have been made for and try them out in various scenarios to find out what we're in need for and to push the web forward.

In contrast to flex, the "inline-block" value doesn't provide you with any other cool property which you could use to align the items in a special way. However, it allows you to treat the content elements like text when it comes to positioning (since they're displayed inline). For example, you can push them into the left or right edge or the middle by using `text-align`. You could also use properties like `line-height` to equal the heights of all elements inside the container (that also depends on if they own padding, since it's extending the line-height).

I'm sure the most of you already know everything about this value, since it's also beeing used for various other use-cases. But if you don't, read more about it [here][4]{:target="_blank"} (the official documentations are not really helpful now, since they're too abstract for you, I guess).

## Conclusion

My idention behind this article was clearly not to provide you with a complete guide on how to use those properties. It was rather a collection of recommondations you could use instead of the old floating-method. If I inspired you to think about these alternatives, I'm happy.

What you should also remember is that these properties have initially been designed to provide easy solutions for creating columns within a content-area (at least that's what I heard from other people and what my experiences told me) and not for creating complete layouts (you should use [grid][3] for this). And yes, I'm talking of the future. Currently, you would probably need to use those properties for layouting too, because *grid* isn't fully ready for production yet.

Please feel free to drop me a comment down there if you have any questions left (you can also just leave feedback).

[1]: https://css-tricks.com
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/flex
[3]: {% post_url 2015-05-26-no-more-css-grid-frameworks %}
[4]: http://robertnyman.com/2010/02/24/css-display-inline-block-why-it-rocks-and-why-it-sucks/
