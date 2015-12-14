---
title: Fixing Your Site's Zooming-Problem on Mobile Devices
date: 2015-08-11 22:25
---

In 2007, Steve Jobs introduced us to the advantages of Apple's new multitouch functionality, which was shipped with the first iPhone. I'm not sure if it was already available in Safari back then, but we definitely all not that it is now. And fuck, many of us are angry about it, right? Because it often breaks our wonderfully crafted web-layouts.

Thankfully, Apple later added support for the viewport meta-tag, which is now being used on every single responsive site to make the viewport fit the screen-width. Without using it, your site looks the same as on huge screens, even after adding media queries to your stylesheets.

Many of us blindly copied the element from other sites, without thinking about what it actually does. The only thing most of us probably noticed in the first place, was that it finally looked great on mobile devices. But there's one thing we didn't realize: By setting "maximum-scale" to "1" or "user-scalable" to "no", we forced the browser to disable the pinch-to-zoom functionality of iOS and other operating systems completely. In turn, people who weren't able to read our text, simply couldn't make it readable. We left them alone in the dark.

Another reason why some of us set those variables was because Safari simply decided to zoom our site in the landscape mode, which often looked quite shitty. Until today, I don't now why the fuck they're doing this. But instead of simply disabling zoom completely, I have a better solution for you:

Just give your body the following property. It will make sure that the font size won't get automatically adjusted by the system if the user changes to landscape mode. You can [learn more][1] about why it's exactly needed and how you can achieve the same on a different mobile OS.

{% highlight css %}
-webkit-text-size-adjust: 100%;
{% endhighlight %}

After you did that, you just need to also make sure that you neither have "maximum-scale" set to "1", nor "user-scalable" to "no". In the end, it should roughly like this:

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1" />
{% endhighlight %}

This just means that we're ensuring that the viewport has the width of the screen as soon as the layout gets rendered. Therefore our media queries will work just fine. And the best thing about those two changes: If the visitor switches to landscape-mode on his device, the design won't look like it was zoomed in. No, it will simply remain as it is - just the width will differ, so more space for content.

Yeeeha! You made it! Your users are happy again, since they're able to zoom in if they can't read something. Great job! And as always, thank your for giving a shit!

Also thanks to Leigh McCulloch, whose [answer][2] caught my attention on Stack Overflow while I was searching for a solution to make it work on my own site. And thanks to him, it actually [did][3]!

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust
[2]: http://stackoverflow.com/a/27311443
[3]: https://github.com/leo/leo.github.io/commit/028e0956bb582b5619d632f343f3f15618cc9910
