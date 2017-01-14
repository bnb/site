// packages
import Head from 'next/head'
import Link from 'next/prefetch'

// Layouts
import Post from '../../layouts/post'

export default () => (
  <Post>
    <Head>
      <title>Releasing on GitHub</title>
    </Head>

    <h1>Releasing on GitHub</h1>

    <p>Every since programmers have started writing applications
    for the general public, there has always been that weird structural
    mess when thinking about how we should actually make them available
    to people who’re not so involved in what we’re doing (or even to ourselves).</p>

    <p>In turn, many of us have come up with their own concepts
    of how it should be done. Some folks even created very explicit
    guidelines with the intention of making their team move faster
    while keeping a consistent style.</p>

    <p>The community’s huge demand for a straightforward
    way of doing it has also led to the creation of things like
    Semantic Versioning, GitHub Releases and various open-source
    projects for automatically generating releases for your application.</p>

    <p>Today, I’m pretty comfortable with saying that we’re in a
    good position when it comes to the availability of concepts
    and small studies about how to properly publish releases for software.</p>

    <p>However — as with many things in our industry — there’s
    still a lot of bikeshedding going on.</p>

    <p>We’ll probably never reach the point where everybody agrees on
    the same opinions. Rather than that, there will most likely always
    be people who’re stubborn enough to completely ignore the benefits
    that the industry would be deriving from a consistent workflow.</p>

    <h2>But Who Cares, Right? 😋</h2>

    <p>Instead of complaining about the problems of our industry, I’d like
    to take the chance and propose a new, simple concept for properly
    taking advantage of GitHub’s release mechanism.</p>

    <p>Increasing our common ground in this area helps the whole
    community to move forward faster and allows developers to
    focus on their actual software instead of wondering about
    the perfect setup for the releases.</p>

    <p>Got it? Then let’s start with…</p>

    <h2>The Basics</h2>

    <p>Assuming that you’d like to publish <b>version 0.2.0</b> of a certain
    project, the first thing you need to do is open up your repository on GitHub.</p>

    <hr/>

    <p>Now let your eyes float over the statistic bar at the
    top (the one with the colored bar at the bottom) and click on this section:</p>

    <img src="/static/posts/releasing-on-github/section.png"/>

    <p>Next, the “Releases” page will open. This is the place where
    the users of your software will later be looking for a descriptive
    list of what changed in each new update.</p>

    <p>At the moment, you haven’t created any releases yet and
    GitHub is asking you to create one. So let’s go ahead, hit the button:</p>

    <img src="/static/posts/releasing-on-github/new.png"/>

    <p>Now you’re on the most important page of all: The one that
    allows you to create a new release. To be more precise, you
    should currently be looking at the four most important fields:</p>

    <h3>Tag Version</h3>

    <p>Because you want to publish version 0.2.0 of your project, you
    need to set this field to “0.2.0”.</p>

    <p>While some people might suggest you to prefix the version
    with “v”, I highly recommend against that: It’s clear that
    each new release also requires the increase of the version
    number (like stated <a href="http://semver.org" target="_blank">here</a>).</p>

    <h3>Target Commit</h3>

    <p>Whenever you create a new commit using GitHub Releases, it will
    automatically generate a Git Tag for you. In order to create this
    tag, the platform needs to know which commit it should point to.</p>

    <p>By default, it will point to the last commit on the master
    branch. If you want to select a specific commit (you should only
    choose commits that are part of the release bundle), simply
    click on the button and switch it.</p>

    <h3>Release Title</h3>

    <p>I recommend leaving this one empty. This will simply
    instruct GitHub to use the version number as the release title.</p>

    <p>However, if you’d like to surprise your users with a
    interesting, thoughtful phrase (or just a stupid arrangement
    of words), you can also put that one in and ensure a
    unique style that people will associate with you.</p>

    <h3>Changelog</h3>

    <p>This multi-line text field is the most important part
    of the whole release. It indicates the changes made
    and how they’ll affect the user.</p>

    <p>Although this is a completely free-form text
    field, I highly suggest following the strict concept
    of Semantic Versioning. This means that you’ll end
    up with three headings:</p>

    <ul>
      <li>Major Changes</li>
      <li>Minor Changes</li>
      <li>Patches</li>
    </ul>

    <p>Each section should start with a heading of the third
    type (three hashes in markdown) and contain a bullet list of changes
    with a quick explanation about what exactly changed, how it
    affects the end user and Links to the commits, pull requests and
    issues that are related to it.</p>

    <h2>The Finish line ……… 🏃‍</h2>

    <p>Once you’ve filled out all of these fields, you’re
    ready to publish your first release! Just hit
    the “publish release” button and it will be live. After that, your
    users will be able to look up the changes made in each
    new update directly on GitHub.</p>

    <p>This ensures transparency, shows your fans that you’re
    caring about your creations and makes sure that people will
    update their copy of your software to a release that fixes
    a certain bug instead of simply reporting it again (less work for you).</p>

    <p>Some other great advantages of releasing on GitHub:</p>

    <ul>
      <li>You can use their <a href="https://developer.github.com/v3/repos/releases/">API</a> to show
      the changelog somewhere else: Need it on your website? Or maybe even directly
      in the application? Easy!</li>

      <li>A consistent changelog structure allows people
      to easily parse the content of your releases and display them in their own style.</li>

      <li>Assuming that all developers are going to handle their software releases
      like mentioned above, we’ll be able to minimise the amount of
      confusion that gets created from everyone swearing by a different
      technique. In turn, we’ll move much faster collectively.</li>
    </ul>

    <h2>Examples</h2>

    <p>Here’s a list of selected repositories on which
    I’ve applied this technique (all of them are built
    on top of <Link href="https://nodejs.org/en/">Node</Link>):</p>

    <ul>
      <li><Link href="https://github.com/zeit/now-desktop/releases">Now Desktop</Link> — The native client for ZEIT’s now</li>
      <li><Link href="https://github.com/leo/args/releases">Args</Link> — A minimal toolkit for creating Clis with node</li>
      <li><Link href="https://github.com/zeit/micro/releases">Micro</Link> — Async HTTP microservices made easy</li>
    </ul>

    <h2>Exceptions</h2>

    <p>We’re not living in a world where everything is just
    black or white. Although the concept mentioned above is
    perfectly for most projects, there might still be some
    cases in which the kind of software you’re releasing isn’t
    suitable for this release structure.</p>

    <p>What you should do in these cases is carefully
    try to adapt the technique and if it doesn’t work
    for your project, simply modify it slightly.</p>

    <p>But keep in mind: Our goal is to avoid as much
    confusion as possible. So each repository that’s not
    fitting for this way of releasing software, should at
    least adapt as much as possible from the things mentioned above!</p>

    <hr/>

    <b>That's it! ✔️</b>

    <p>Now go out there and make sure that as many of your
    GitHub repositories as possible have proper releases in
    place. Thank you for caring about the welfare of
    our community/industry/whatever!</p>

    <p><b>EDIT:</b> I recently wrote release, which covers the whole workflow of creating
    a GitHub Release (and populating it with the changes
    made) with just a single command.</p>
  </Post>
)
