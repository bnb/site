---
title: WWW vs. no-WWW - Fight!
date: 2015-05-10 09:24
---

When it comes to the elder of all subdomains, the minds of many developers often divide into two different bases:

One, which is constantly jeering and wanting to completely remove the three letters because of aesthetic reasons - and the other, which is still worried about all the disadvantages the change could have on the web’s infrastructure.

**But which one should you listen to?** - Well, to be honest, I wont be able to provide you with a solution that’s the right in any case. BUTT I can show you how to decide, which way is the best for your kind of project...

## Who should use www

Many system administrators will advise you to not support the deprecation of the "www" prefix. The reason behind that is, that it will allow your host to forward visitors to another server if the current one is on fire. To do that, they need to be able to update the DNS records of your domain (which is done using CNAME entries). Unfortunately, using this procedure is not possible without the *www*.

But don't worry, if your site doesn't get tons of traffic each day, this isn't something you need to worry about. Mostly people who are using cloud application providers like [Heroku][1] are affected by this.

Another tiny weak spot on the big balloon that respresents all developers fighting for the abolition of *www* is definitely, that it if you set up a cookie for a domain like "www.mysite.org", the browser won't sent it out when accessing content on subdomains like "dumb.mysite.org". But if don't use the *www* on your main domain, the cookie will be shared on all connections to all subdomains.

## Who shouldn't use www

People with small sites. Better described as simple websites providing information instead of huge web-apps visited by thousands of people each day.

Removing the prefix from their domain will definitely make them look better - especially on all those dumb business posters potential customers will see on the streets.

If we're currently talking about a really huge business - I mean, really huge (like McDonalds) - who is putting it's address on every fucking print, this might also save a large amount of ink and therefore also ink [^1] - you're welcome, environment!

### So, how can I support no-www?

To really make a difference, you just need to forward the traffic on your domain from „www.“ to the URL without the three letters.

For example, you can do that by adding a .htaccess file with the following contents to the root directory of your site:

{% highlight apacheconf %}
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www.(.+)$ [NC]
RewriteRule ^(.*)$ http://%1/$1 [R=301,L]
{% endhighlight %}

Redirecting all visitors from the old subdomain to the main adress will let them know that they don’t need those three „w“s at the beginning at stop using them.

- - -

Okay, we're finished! Now take a look at your project and make the best possible descision.

All in all I nevertheless think that YOU (if you don’t have a site that gets hundreds of thousands of visitors each day) should start deprecating the subdomain **today**, so that the webhosters will respond to this issue with a better solution in the future.

[1]: https://www.heroku.com

[^1]: Take a look a [this example](http://www.theatlantic.com/politics/archive/2014/04/can-a-teens-idea-to-switch-fonts-save-the-government-400-million/359920/)
