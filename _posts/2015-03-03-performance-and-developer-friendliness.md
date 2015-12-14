---
title: Between Performance and Developer-Friendliness
date: 2015-03-03 10:04
---

It’s another Tuesday evening. I once again sat the whole afternoon after school on my PC thinking about in which direction of the programming genre I will move in the next few years. I need to say; I still really like coding for the web (of course there were times in the last years when it bugged me a bit, but it passed because I repeatedly found another idea which I could realize to make the web more effective and also fun).

But if you want me to be honest, I don’t like thinking about how to make it more performant. But why? I want to think about it, because I want to help other coders to struggle less with all the pain-in-the-ass things that the web has prepared for programmers like me. That means, I would like to work out neat ideas that could make coding for the web less pain-in-the-ass and therefore also involve enabling all end-users a faster and easier to use network (www).

But I can’t. „What the fuck does he want to tell me with this stupid shit?“ you might think. Well, let me make an example with JS: I’m thinking about developing a jQuery plugin. Now, the first thing you might be thinking is: „He shouldn’t use a framework like jQuery if he wants to create a maximum fast website“ (that’s exactly what I’m trying to accomplish). I was thinking the same thing. Okay, then let’s leave the framework out and create the *e.g.* slider in vanilla JS. So far so good, I made another move into the right direction.

In spite of that I won’t create the slider library like this. Because now I’m thinking the following: If I put all my effort into this library, would it be really worth it if the developer also wants to add another library (e.g. for managing cookies or a simple light-box) to his project? **No, it won’t be**. Why not? Well, just think about the possibility that one of those other libraries will contain a function thats exactly the same in my library. Summed up, this would mean that there will be multiple lines of duplicated code on his website. Thus, it will take a bit of time longer for the browser of the visitor to download the file (even if its just a few milliseconds - he can also add more libraries).

So it would be bad to use a framework like jQuery because this will generate tons of unused code which will lead to a bigger file and therefore a slower transmission to the browser (also the processing on the client-side will take longer). Right? Okay, therefore this way to realize my idea won’t come into question.

Then let’s code it in vanilla JS. NO! We can’t! This would lead to the fact that there could be many unused bites of code if the developer wants to use multiple out-of-the-box scripts.

Yeah. Now how the hell should I code my funny idea? I can’t. No matter how I look at it, I just can’t find the perfect way to do this. I also thought of creating a kind of compiler which could eat all kinds of JS scripts like sliders, light-boxes or funky parallax effects and spit them out as a completely new script where bites of code which are the same in multiple scripts are combined to functions (to limit the file size and processing time in the visitors browser).

But that’s bullshit. It just brings me more far away from the point which I’d like to get to:

I wan’t to make it as easy as possible for developers to implement my scripts, but I also don’t want to leave the performance out of the equation. But I think with the current status of the web, that’s just not possible. When I get a new cool idea for a neat JS script, I’m always walking on the fine line between performance, developer-friendliness and the time it would take a developer to implement it into his project.

But maybe I’m just missing something and there was already a cool guy/girl who created a piece of art to solve this problem. How do you - as reader and developer - deal with this difficulty?
