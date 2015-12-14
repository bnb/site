---
title: Minimum Viable Products on the Web
date: 2015-10-11 21:51
---

If you're following me on Twitter, you've probably already noticed that I have recently been doing a lot of development for Dave Hakkens, a smart guy from the Netherlands who likes inventing new products, traveling the world and sharing his experiences with the rest of the world using short films which he's posting on his [YouTube channel][1].

A few months ago, he decided that his personal site would need an update and therefore simply asked his Twitter followers for help. Back then, I already knew about his biggest project: Phonebloks (because so many other people were talking about it), but I didn't yet knew him, the person behind all that stuff. Thankfully, some of the people I was following at that time decided to share his tweet.

Then everything went pretty fast. I've emailed him, he wrote back and we scheduled a Skype call for a few days later. When the day was finally there, I was very excited about finally talking English to someone else, rather than just chatting through text. Since my personal room was relatively dark back then (not much sunlight) and I had thought that we were going to do video chatting, I've moved all my stuff into our living room, where it was very bright and much happier to look at.

But to my relief, we both agreed to just talk. At first, he asked me a lot of things: When I started developing websites, what I had made so far and how such a creation-process will even work. I've tried to explain everything as detailed as I could and managed to convince him that I was the right one for the job! After clicking the red button to end the chat, I was like: "Hell yeah, I'm going to develop a site for the creator of Phonebloks".

Although it's a very good story to tell you about, it's not the only thing this article will be about. Rather than that, I'd like to present you a different way of creating products, than the usual one. It's neither new, nor does it come from the web. But I know for sure that we can apply it to many of our products, too!

## „Even the softest water will wear away the hardest stone.“

For a long time, the exact opposite was my personal mantra: The faster, the better. I've tried so hard to constantly improve my products, while others only contributed to them irregularly.

Now you might think that this was only because I was pretty silly back then and that climbing slowly is of course better, since it leaves more room for small details. But I actually knew about that (at least the essence of this concept).

Believe me, or not: I already wanted to work like this. I wanted to save more time for all the small details, because I really love what I'm doing. But I couldn't. Because I didn't know how. I knew about the goal, but not which way I needed to go to reach it. There was no concept, no foundation. Just me wanting to achieve something I couldn't reach at that time.

Now I know how I can do better: Instead of rushing forward with maximum speed and not having time for really perfecting my work, it makes way more sense to just go one step at a time, but with a lot of space for small details, which would otherwise be forgotten.

## In practice

Dave's latest project, [Story Hopper][2], was the perfect chance to test out this way of developing products.

Since I was still working while creating his site, I sadly didn't had enough time to implement the rating system, which could enable visitors to rate each movie with a certain amount of stars, depending on how much they like it. On the other hand, the time would have been enough if I had simply chosen to go with one of those existing rating plugins for WordPress, instead of building my own one. But since it was already such a beatiful site, I didn't want to add one of those crappy plugins to it.

What can I say? Dave really liked the idea of me building a completely new rating system just for his project. The only thing that I didn't like, was that it would have taken much more time. And since he had already announced that the site will launch on October 5, there was no way around it.

But I didn't wanted to just led this idea die. We were both very excited about a custom rating functionality, but we also didn't wanted to delay the launch. I mean, over 50.000 people (Dave's followers on Twitter) had already seen his announcement and we simply couldn't just leave them out in the cold.

I've spent a few hours stretching my brain cells and worked out a approach which would allow us to launch the site on the announced date while avoiding a broken website, all this with the so-called [Minimum Viable Product][3] method in mind.

Broken down to the essence, this approach simply means publishing a product that only has the most important core features that allow it to be deployed, and no more. After this, more features can be added to it slowly, with an eye for details.

"So what did you do?", you might ask. Great question! And the answer is: Very less, but effective work.

Since there wasn't much time left, I've decided to code a script which allows each visitor to rate every video based on the already existing 5-star-scala. But because the backend-part (which should usually manage all the calculations) didn't exist yet, I couldn't just sent them to our server using AJAX. What now?

"Oh no! But we don't want to loose the ratings people will create while the server-side part of the voting system isn't fully implemented", I thought. But then a brainstorm hit me: Why don't we simply save each rating locally, using cookies?

So I decided to build a few functions around this idea and ended up with cookies whose value looked like this:

{% highlight json %}
{
  "count": 5,
  "sync": false
}
{% endhighlight %}

Nothing advanced, just a simple JSON-formatted object which contains the amount of stars which the movie got and the most important part: If the server already knows about this rating (aka.: if it has already been sinced with the backend).

Using this method, we were able to launch our product while still avoiding data loss: After I had finished the server-side part of the rating script, the only thing I needed to do was check the current visitors browser for cookies that are based on a movie's rating, save the amount of stars to the DB and set the "sync" key to "true" (so that it won't accidentally be saved again).

Therefore we were able to import all the data that was created on the client-side by various users. The only downside was, that  they had to visit the site again, so that we could retrieve all of their ratings.

Thankfully, many of those who rated the movies did come back to the site to check out the other ones, which Dave released one after the other, one at a day.

Maybe this isn't a perfect approach. But what I hope is that this post can serve as inspiration for other developers (like you) to think of better solutions for this kind of situations. And in the end, me might all be able to keep a high standard for our products, while still complying with some deadlines.

By the way, the source code of this project is available [on GitHub][4] and commits are much welcome!

[1]: https://www.youtube.com/user/hakopdetak
[2]: http://story-hopper.com
[3]: https://en.wikipedia.org/wiki/Minimum_viable_product
[4]: https://github.com/hakkens/hopper
