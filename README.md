## This <a href="https://travis-ci.org/leo/leo.github.io"><img src="https://travis-ci.org/leo/leo.github.io.svg?branch=master" alt="Build status" /></a>

... is where I settle down to write down my thoughts. Sometimes it's a helpful tip, sometimes an idea and sometimes just bullshit. There's only one thing I can [guarantee][2]: Before you become bored, the hell will freeze over.

So I guess there's only one thing left to clarify. And that's why the fuck I'm hosting my site here, in a repository on a collaborating platform for code: Because it's so convenient. I don't need to worry about deployment and at the sime time, people can access all of my stuff without detours.

## Caught a bug?

Clone it

```sh
$ git clone https://github.com/leo/leo.github.io.git
```

Install Jekyll and a special gem from GitHub

```sh
$ gem install jekyll github-pages
```

Run Jekyll within the repo! :dizzy:

```sh
$ cd leo.github.io
$ jekyll serve --watch
```

## "Are you a magician?"

Who knows? But that's definitely not the reason why all the assets on the site are minfied, although Jekyll isn't able to provide me with such a service. It's [CloudFlare][3] who does that.

If you want to read more about how this exactly works, just read [this][4].

[1]: https://travis-ci.org/leo/leo.github.io
[2]: https://developers.google.com/speed/pagespeed/insights/?url=leo.im
[3]: http://cloudflare.com
[4]: https://leo.im/notes/breaking-github-pages-speed-limitations-with-cloudflare/
