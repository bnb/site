// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import {H2, H3} from '../../components/heading'
import {Image} from '../../components/figure'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {UL, LI} from '../../components/list'
import HR from '../../components/hr'

export default () => (
  <Post>
    <Meta id="releasing-on-github"/>

    <P>Every since programmers have started writing applications
    for the general public, there has always been that weird structural
    mess when thinking about how we should actually make them available
    to people who’re not so involved in what we’re doing (or even to ourselves).</P>

    <P>In turn, many of us have come up with their own concepts
    of how it should be done. Some folks even created very explicit
    guidelines with the intention of making their team move faster
    while keeping a consistent style.</P>

    <P>The community’s huge demand for a straightforward
    way of doing it has also led to the creation of things like
    Semantic Versioning, GitHub Releases and various open-source
    projects for automatically generating releases for your application.</P>

    <P>Today, I’m pretty comfortable with saying that we’re in a
    good position when it comes to the availability of concepts
    and small studies about how to properly publish releases for software.</P>

    <P>However — as with many things in our industry — there’s
    still a lot of bikeshedding going on.</P>

    <P>We’ll probably never reach the point where everybody agrees on
    the same opinions. Rather than that, there will most likely always
    be people who’re stubborn enough to completely ignore the benefits
    that the industry would be deriving from a consistent workflow.</P>

    <H2>But Who Cares, Right? 😋</H2>

    <P>Instead of complaining about the problems of our industry, I’d like
    to take the chance and propose a new, simple concept for properly
    taking advantage of GitHub’s release mechanism.</P>

    <P>Increasing our common ground in this area helps the whole
    community to move forward faster and allows developers to
    focus on their actual software instead of wondering about
    the perfect setup for the releases.</P>

    <P>Got it? Then let’s start with...</P>

    <H2>The Basics</H2>

    <P>Assuming that you’d like to publish <b>version 0.2.0</b> of a certain
    project, the first thing you need to do is open up your repository on GitHub.</P>

    <HR/>

    <P>Now let your eyes float over the statistic bar at the
    top (the one with the colored bar at the bottom) and click on this section:</P>

    <Image src="/static/posts/2016/releasing-on-github/section.png"/>

    <P>Next, the “Releases” page will open. This is the place where
    the users of your software will later be looking for a descriptive
    list of what changed in each new update.</P>

    <P>At the moment, you haven’t created any releases yet and
    GitHub is asking you to create one. So let’s go ahead, hit the button:</P>

    <Image src="/static/posts/2016/releasing-on-github/new.png"/>

    <P>Now you’re on the most important page of all: The one that
    allows you to create a new release. To be more precise, you
    should currently be looking at the four most important fields:</P>

    <H3>Tag Version</H3>

    <P>Because you want to publish version 0.2.0 of your project, you
    need to set this field to “0.2.0”.</P>

    <P>While some people might suggest you to prefix the version
    with “v”, I highly recommend against that: It’s clear that
    each new release also requires the increase of the version
    number (like stated <Link href="http://semver.org">here</Link>).</P>

    <H3>Target Commit</H3>

    <P>Whenever you create a new commit using GitHub Releases, it will
    automatically generate a Git Tag for you. In order to create this
    tag, the platform needs to know which commit it should point to.</P>

    <P>By default, it will point to the last commit on the master
    branch. If you want to select a specific commit (you should only
    choose commits that are part of the release bundle), simply
    click on the button and switch it.</P>

    <H3>Release Title</H3>

    <P>I recommend leaving this one empty. This will simply
    instruct GitHub to use the version number as the release title.</P>

    <P>However, if you’d like to surprise your users with a
    interesting, thoughtful phrase (or just a stupid arrangement
    of words), you can also put that one in and ensure a
    unique style that people will associate with you.</P>

    <H3>Changelog</H3>

    <P>This multi-line text field is the most important part
    of the whole release. It indicates the changes made
    and how they’ll affect the user.</P>

    <P>Although this is a completely free-form text
    field, I highly suggest following the strict concept
    of Semantic Versioning. This means that you’ll end
    up with three headings:</P>

    <UL>
      <LI>Major Changes</LI>
      <LI>Minor Changes</LI>
      <LI>Patches</LI>
    </UL>

    <P>Each section should start with a heading of the third
    type (three hashes in markdown) and contain a bullet list of changes
    with a quick explanation about what exactly changed, how it
    affects the end user and Links to the commits, pull requests and
    issues that are related to it.</P>

    <H2>The Finish Line ....... 🏃‍</H2>

    <P>Once you’ve filled out all of these fields, you’re
    ready to publish your first release! Just hit
    the “publish release” button and it will be live. After that, your
    users will be able to look up the changes made in each
    new update directly on GitHub.</P>

    <P>This ensures transparency, shows your fans that you’re
    caring about your creations and makes sure that people will
    update their copy of your software to a release that fixes
    a certain bug instead of simply reporting it again (less work for you).</P>

    <P>Some other great advantages of releasing on GitHub:</P>

    <UL>
      <LI>You can use their <Link href="https://developer.github.com/v3/repos/releases/">API</Link> to show
      the changelog somewhere else: Need it on your website? Or maybe even directly
      in the application? Easy!</LI>

      <LI>A consistent changelog structure allows people
      to easily parse the content of your releases and display them in their own style.</LI>

      <LI>Assuming that all developers are going to handle their software releases
      like mentioned above, we’ll be able to minimise the amount of
      confusion that gets created from everyone swearing by a different
      technique. In turn, we’ll move much faster collectively.</LI>
    </UL>

    <H2>Examples</H2>

    <P>Here’s a list of selected repositories on which
    I’ve applied this technique (all of them are built
    on top of <Link href="https://nodejs.org/en/">Node</Link>):</P>

    <UL>
      <LI><Link href="https://github.com/zeit/now-desktop/releases">Now Desktop</Link> — The native client for ZEIT’s now</LI>
      <LI><Link href="https://github.com/leo/args/releases">Args</Link> — A minimal toolkit for creating Clis with node</LI>
      <LI><Link href="https://github.com/zeit/micro/releases">Micro</Link> — Async HTTP microservices made easy</LI>
    </UL>

    <H2>Exceptions</H2>

    <P>We’re not living in a world where everything is just
    black or white. Although the concept mentioned above is
    perfectly for most projects, there might still be some
    cases in which the kind of software you’re releasing isn’t
    suitable for this release structure.</P>

    <P>What you should do in these cases is carefully
    try to adapt the technique and if it doesn’t work
    for your project, simply modify it slightly.</P>

    <P>But keep in mind: Our goal is to avoid as much
    confusion as possible. So each repository that’s not
    fitting for this way of releasing software, should at
    least adapt as much as possible from the things mentioned above!</P>

    <HR/>

    <P><b>{`That's it! ✔️`}</b></P>

    <P>Now go out there and make sure that as many of your
    GitHub repositories as possible have proper releases in
    place. Thank you for caring about the welfare of
    our community/industry/whatever!</P>

    <P><b>EDIT:</b> I recently wrote <Link href="https://github.com/zeit/release">release</Link>, which covers the whole workflow of creating
    a GitHub Release (and populating it with the changes
    made) with just a single command.</P>
  </Post>
)
