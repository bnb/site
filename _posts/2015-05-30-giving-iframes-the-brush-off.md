---
title: You Probably Don't Need iframes for External Content
date: 2015-05-30 15:51
---

If you're moving around the web once in a while, you certainly already know about them: iframes. They have been accompanying us since Netscape 2 and still haven't lost much of their popularity (although there are many other ways to load content of other websites into your site). Even big players like Twitter, Facebook or Google are using them to provide easy implemenations of their data for developers.

The reason behind that is, that iframes have been the best way to embed content that can't be modified by the existing styling of the site which it is getting loaded in. — But no longer!

## CSS3 to the rescue...!

While digging through Mozilla's CSS docs, I was searching for a proper way to allow other developers to use a JS library[^1] I was planning without needing to embed an iframe. It's the same problem that Twitter has with it's [embedded tweets][1], I just don't want my plugin's styling to get changed by the existing.

So after looking around a bit, I found [all][2]. I literally cried tears of joy. The guys over at W3C finally managed to create a stable solution to reset all stylings for an element. And that's exactly what the property does, in a nutshell.

It helps you to get rid of every decleration. And when I say every, I mean every. You might think it resets the styling to match the default formatting... Hehe, nope! Every property is getting removed.

Okay, let me explain that with an example:

{% highlight css %}
h1 {
  all: unset;
}
{% endhighlight %}

... doesn't just change the heading's (let's say) font-size to 2em (which is the default one in HTML5). *No!* It set's the font size to 100%.

Now you got it, right? Cool! Then let's talk about the possible cases in which we could use this property. One could be to solve the problem with iframes: They require your content to be completely put together in a HTML document on your server, before you can serve it. Then people are able to embed it into their site. But what if you don't want that?

Instead of providing a fixed iframe for their embedded tweets, Twitter (as an example) could also supply developers with a JS script that pulls the tweet through their JSON API and then put it into a simple div (or maybe into an *blockquote* tag, if you want it to be semantic). There would only be one problem: Twitter couldn't provide a pre-defined styling for the embedded Tweet because it would be overridden.

But they could! — If they start using the 'all'-property now!

Doing so, would remove all styles set by the site itself and give Twitter the change to apply their own beautiful tweet-like style.

## Other use-cases

As I already indicated, using the property as a faster alternative for iframes is not the only possible case where it can find application. Just think about how great it would be to be able to code a jQuery plugin which styles can't be overriden, for example.

As many CSS properties I like to talk of, this one is very new[^2]. Nevertheless all major browsers (except Safari of course) are already able to interpret it. So let's go, start using it today!

[1]: https://dev.twitter.com/web/embedded-tweets
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/all
[3]: http://caniuse.com/#search=all

[^1]: It's written in ES6 and will be published soon, so stay up-to-date! 😉
[^2]: No, seriously. It's not even on [Can I Use][3].
