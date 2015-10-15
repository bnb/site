---
title: Breaking GitHub Pages' Speed Limitations with CloudFlare
date: 2015-08-27 01:27
---

The last time I came in contact with CloudFlare, I was managing root servers for my own tiny [hosting-provider][1] and it looked like a really neat way to get rid of those damn DDoS attacks my service was getting back then. Unfortunately, their system wasn't as functional and good-looking as it is today[^1], so I struggled pretty hard with actually configuring it and getting everything running.

But that also has a good side: I learned a lot about DNS records, the way how name-servers work and what it actually means to look after hundreds of domains.

Thanks to this experience, I was now able to easily get started with their improved service on my new site and hell yeah, it works like a charm. While browsing through the different options, I noticed that it's exactly what GitHub wasn't able to accomplish by itself. — I know, the most plausible reason is probably that they simple didn't see a need for that. But I do. And if you carefully checked your own site and looked for ways to improve it's performance, you also do.

## Browser Caching

The problem with GitHub pages is that many people were misusing it. Therefore it's creators needed to find a balance between maximum speed and safety. The first thing that should come to your mind now is caching: Neither does Pages offer a way to change the expiration date of your files, nor did they set the default timeout to something high. To be more precise, it's currently at around 10 minutes. They reason why they did that is probably that many silly developers were using Pages as a CDN for their assets or public libraries.

While your site's content will actually be hosted on Fastly's CDN (they've partnered with GitHub), you shouldn't share the URL of the files on your site as a central embedding point for every developer on the world.

Because many of us didn't respect this rule, they simply prohibited us from accessing those parameters. And here comes CloudFlare. You simply change your domain's NS records to a few hostnames which their wizard[^2] suggests and after a few hours, you are able to enjoy all of CloudFlare's advantages regarding caching: You can now easily change the expiration date of your files or even minify HTML, CSS and JS. And that's what brings us to the next stage:

## Minification

Before I came back to CloudFlare because I needed[^3] a few name servers for my new domain, I was minifying the HTML code using a tacky [Jekyll layout][2] written in Liquid. I knew it's not a real solution for this problem, but back then, I was pretty happy about it because it did exactly what Pages couldn't do: Remove unnecessary characters from my files before serving them to the visitor.

Since it was just a layout, the HTML code was filtered through it and when it came out, it was minified like every good library would do it. But as I already said it, I just felt dirty while using it. And that's not because it's creator made shitty decisions (in terms of what was possible for him, he actually made a piece of art), but rather because a layout shouldn't be used for such a purpose.

Thanks to CloudFlare, this is now history too. The only thing I needed to do was set some checkmarks in their dashboard and now all my files are being minified before they're served. Since that process would take too much time on-the-fly, those parts are currently being cached on their servers. Although that means that I need to clear the cache manually every time I make changes to my site (as far as I understood it), I'm very happy about it.

Because from now on, the development process will be a bit easier for me and for contributors. All code lines are expanded by default, which means easier debugging for everyone!

## DDoS protection

Besides making it faster, CloudFlare also protects my site from small to mid-scale DDoS attacks by serving the contents from a different server on their global DNS, in case that the origin server on GitHub's cluster goes offline.

By the way, this also decreases the time requests from clients take to reach my site. By using their name-servers, the average ping latency dropped from around 140ms to less than 30ms. This means that the delay between a page request and the answer from the server will be much smaller and this in turn means that the site loads faster.

## Analytics

To be honest, I never was a fan of Google Analytics. When I implemented it into my site a few months ago, I only did this because GitHub sadly doesn't provide any way to get an overview of how many people are visiting your site. But as you might have thought it already: CloudFlare does provide one. Thanks to this feature, I was able to completely remove Google's tracking code from my site while still being aware of the number of unique visitors or hits my site actually gets.

Besides that, their dashboard even tells me about the origin of the traffic, how much bandwidth was used and how many unwanted threats were blocked by their infrastructure. And for me, that's all I need. If I wanted to know which browsers my visitors are using, I could simply look at a chart from W3C. All in all, this also has the nice side-effect that the data isn't being sold to third-party folks (at least I don't think that this is where CloudFlare gets its hugest revenue from, compared to companies like Google).

{% include tweet.html id="624669416299589635" user="gruber" alt="Question I’ve been pondering for years, coming to a head this week: Is Google Analytics a privacy-invasive tracker?" %}

I'm sure that he wasn't talking about the way how Google uses the information that it gets from Analytics, but rather if the cookies set by their services are also used for advertising purposes on completely different sites. But as you can see, there are many influential people wondering about what's actually happing with their users data.

And I definitely don't want to be part of them, so I'm stopping this madness right now by keeping only the data I need and also not within the clients browser.

In terms of performance, this kind of analytics-management also saves a lot of overhead that was triggered by all the requests that were made by the client to get those huge bags of scripts and other files from the Google's servers, just for the purpose of recording one hit.

And if that wasn't enough, those scripts only have a expiration date of 2 hours. I firstly thought that they did this because they need to save the requests of the same users over and over again, but then I figured out that this would also be possible if the expiration date was set to something better (like one week). So in the end, I don't have a clue why they're even doing this.

But enough with this stuff: At CloudFlare, this happens seamlessly on the server. As soon as a request comes in, the page gets served and at the same time, the web-server takes note of the client's IP address and location data by simply extracting them from the parameters which were sent with the request - no additional overhead.

---

Sounds like a great deal, huh?

But before I forget it: If you want to take advantage of those improvements, you not only need to use CloudFlare's DNS network, but also their other services built for the purpose of accelerating and protecting your site. After logging into their dashboard and opening the "DNS" section, you'll have to choose if you just want to use their DNS system, or also all the other great things.

Now I finally found a neat way to combine the DNS-resolution of my domain name with all the other stuff that makes my site even faster and easier to manage in the development process.

---

**EDIT:** After a few hours with CloudFlare's analytics tool, I found out about another great advantage over Google's way of doing it: I'm finally able to track how many people are reading my posts through RSS. ♥️

That's only the case because the visits are being recorded on the backend instead of on the frontend, like it was before.

[^1]: Okay, there are a few things I would change on the UI, but that's not that important right now.

[^2]: Do we still say that word? I don't fucking now. Please tell me if we don't, okay? OKAY?! 😭

[^3]: Usually, the domain registrar provides you with a list of available name-servers which you can use for your domain. But since I registered the domain directly at the official domain registry (nic.im), I didn't benefit from those. I don't now why, but it looks like they thought they simply don't need to provide their customers with such things. Or maybe it's just normal for domain registries.

[1]: http://frewhost.net
[2]: https://github.com/penibelst/jekyll-compress-html
