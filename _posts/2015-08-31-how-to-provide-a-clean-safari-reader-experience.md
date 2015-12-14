---
title: How to provide a clean Safari Reader experience
date: 2015-08-31 14:13
---

Since the beginning, Apple has always been a company that strives to provide a minimalistic feeling for both developers and users when it comes to interfaces. This desire was expressed another time when they introduced Safari's Reader functionality with version 5, back in 2010. I'm talking about this little thing:

{% include image.html file="safari-reader.png" alt="Safari's Reader button" %}

Today, the tool is used for reading articles without the usual amount of distraction on blogs and news sites. Besides hiding all styles except the basic text formatting, it also removes all kinds of ads, JS-trackers or other useless scam.

If you're working with HTML5, you might already know that there's this one tag that is used for displaying a line of paragraphs, headings, block quotes and lists: `<article>`. Although Safari doesn't require a specific tag, it's currently the most semantic one for this purpose. Which means, if your websites shows news items, they should be shown in such a tag. If you don't use it, Safari will simply pick the first element that looks the most like an article, based on its markup.

The only problem with this feature is that it not only picks the tags I've mentioned, but also things like `<time>`, `<hr>` or other elements which are semantically correct within an '<article>` tag.

But if you're like me and want to display the date and/or dividers below the meta information but don't want to show them in the Reader view, you need to find a way around that. That of course also applies to other elements which you only want to show on the site and not within the Reader.

Sadly, Apple didn't introduce a custom attribute for hiding such elements within Safari's Reader. But thankfully, it does support HTML5. And that in turn means that we can easily hide those elements by doing the following:

1. Firstly, you need to add the attribute [hidden][1] to all of the elements which you only want to show on the site and not within the Reader.

2. Once you did that, those tags will be hidden both on your site and within the Reader. This is the case because the browser applies the *display* property with the value of "none".

3. Now the only thing you need to do is make them visible again on the site. And this can simply be done by setting those elements' *display* property back to "block" (or a different value, depending on how you want the element to behave).

From now on, your visitors are able to enjoy a clean reading experience without unnecessary clutter. If you want to try this out, just click the button in the address-bar that looks like a few lines of text grouped together while viewing this post.

If you look close, you'll notice that the web view contains a date and a divider line, but the Reader view doesn't.

[1]: http://www.w3schools.com/tags/att_global_hidden.asp
