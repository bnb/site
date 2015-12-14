---
title: Fixing Apple Music
date: 2015-08-30 17:32
---

When Apple Music came out with iOS 8.4 a few weeks ago, I immediately knew that I wanted to switch over from Spotify. Although their service has always been stable and cheap, Apple's way of doing it brings more advantages in terms of integration and music management.

That's of course the consequence of the fact, that they're able to access the stuff I've bought on the iTunes Store in the last years. I don't need to have two accounts with two different states at two different providers anymore. It's all merged together with my other iCloud stuff. After switching to the new music service, I found out that it works pretty well. But nevertheless, it still has many bugs and UX-insecurities which come from iTunes' messy past with features like iTunes match, music auto-download, iTunes Store purchases and syncing all that stuff across different devices. But now, I feel like Apple really wants to fix this.

It might not look like that in the first place, but if you look closer, you can see that they're already trying to hide some things away until they can finally remove them. But in the current state of their service, this action just seems to confuse most users. Besides that, it led to Apple music not syncing like it should, showing duplicated items and so on.

In this post, I'd like to clear up what I think the guys at Apple are currently trying to accomplish and how we can use it to make our own music sync smoothly across all our devices.

First off, I need to clarify that there are some things I can't help you fix: I'm talking of the problem, that some titles are sometimes not getting added to your library after you've clicked on "Add to my music". That's something they need to fix by themselves before we can have a clean user-experience. But there's one thing I can help you with:

##  The syncing problem

Like many of you, I've also noticed that Apple music sometimes just shows different amounts of my music on my devices. After adding a song on my iPhone, it sometimes wasn't shown on my iMac (even after re-enabling the iCloud music library).

After experiencing this a couple of times, I was very pissed off. Later, I also read many articles like [this one][1] about how bad the service currently is and that they'll leave it in favor of Spotify.

But I didn't want to move again. I refused to believe that Apple actually delivered shit instead of the usual, perfect stuff. I mean, I wasn't even on a beta. Also, many of my friends and other people I know about the web didn't had that problem. So I knew, there needs to be something I was missing on my side.

Why is it working for many people and for some it's not?

## Suddenly, it was all fine

Then, a few days later, I decided to put another 3 hours of effort into digging into a possible solution I thought of. And suddenly, it all worked well. Now, I just need to add an album on my iMac for example, and it directly appears on my iPhone. I don't even need to re-open the Music app or stuff like that, it just seems to work fine now.

And the same goes for my iPhone: Adding, removing, playing. It all works smoothly. There are no items missing in "Recently added" anymore and the library looks exactly like the one on my other devices.

What I did? **I just started fresh.**

After some time, I noticed a common behavior with all those people that were experiencing problems with Apple Music. They either ...

- Imported their music from other services through Beats
- Used a third-party app to move them
- Added music that isn't on the Apple Music platform through CDs or the iTunes Store

I know that it shouldn't be like this and that Apple should fix this too, but in the current state of the platform, music from different ends just makes everything worse. Yeah, I also know that you want to use the music that you've bought on iTunes, but please just ignore that now.

Just do it like this: After deleting everything in your iCloud music library, all of your devices should display an empty library. If they don't do that, just sign out and back in on all of them.

Then, after you cleared everything out, you can start fresh - like I did it. And this time, don't download music from the iTunes Store or import some from CDs. The meta information of those titles currently simply messes up the order of all existing albums and therefore ruins the sync. Just rely on Apple Music's catalog until Apple fixes this problem and you'll experience the smooth syncing you're looking for.

## Why does it work now?

Once I've removed all my albums from my iCloud music library (in order to start fresh), I noticed that if I turn it off on one of my devices, the same device will only show the music that I've bought on the iTunes Store - nothing else.

And then, after I enabled it again, all items from the iTunes Store were hidden and my empty iCloud music library was shown. Thanks to this, I've noticed that there are two states of music in your iCloud: One list that contains all not-hidden[^1] songs which you've bought from the store and one, that's called "iCloud music library" - and this one only contains a user-selected list of songs that you've added manually from the Apple music catalog, it doesn't naturally contain the songs that you've bought on the store.

Now the tricky thing about that "iCloud music library" thing: You're able to add that music. I'm talking of the songs that you've bought on the store or simply imported. But you shouldn't. Because that's exactly where your library will currently break.

The reason why it breaks your library is because Apple is on its path to completely kill the bought-song model. The first step in this direction was completely separating the iCloud music library from the songs that you've actually bought[^2].

If they wouldn't to that, all users would be confused because the songs that they've bought are popping up in their iCloud music library too (besides the songs from the Apple Music catalog).

If you ask me, that was one of their best decisions on this topic yet. To me, it really feels like their trying to move away the old iTunes Store stuff in favor of the new streaming model. And in the end, that's also the reason why your Apple music music isn't working if you want to use music that's not from the Apple music catalog. The songs from the iTunes Store or from CDs seem to have a different meta-data structure and therefore they're simply breaking your sync.

Another proof of this thought of mine is the fact that as soon as you join Apple music the first time, your old songs from the iTunes Store aren't being moved to your iCloud music library. Only if some of your songs are on Apple Music, they will be added to your iCloud music library. Apple pointed this out under "Using Apple Music" in [this article][2].

As I already said, I definitely think that this should be fixed by Apple. But in the current state of the service, it simply isn't (which is why I wrote this post). Just start fresh and don't add music from a different place than Apple Music - at least until Apple officially fixes this.

[^1]: As you might already know, there's this feature which allows you to hide bought songs from your music library. It's located in the right-click-menu. After you've removed an album, you can make it visible again by opening your Account in the iTunes Store and then go to [Hidden Purchases][3]{:target="_blank"}.

[^2]: After starting fresh, there's no way to access the songs you've bought on the iTunes Store, besides disabling the iCloud music library. As you can see, Apple is trying to keep our hands away from the bought songs if we want to enjoy Apple Music.

[1]: http://www.loopinsight.com/2015/07/22/apple-music-is-a-nightmare-and-im-done-with-it/
[2]: https://support.apple.com/en-us/HT204962
[3]: http://9to5mac.files.wordpress.com/2011/10/mac-app-store-view-hidden-purchases.jpg
