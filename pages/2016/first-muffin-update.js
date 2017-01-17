// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {H2} from '../../components/heading'
import {Image} from '../../components/figure'

export default () => (
  <Post>
    <Meta title="Status Update #1" date="04-03-2016" />

    <P>Exactly one month has passed since I’ve announced
    what I’ve been doing the last half year: I’ve started building <Link href="http://muffin.cafe">Muffin</Link>,
    a modern way of managing content on websites.</P>

    <P>Since then, a lot of progress happened. First off, it
    now has it’s own <Link href="https://github.com/muffin">GitHub organisation</Link> that contains all of the
    repos that are related to it. And yes, I’ve already
    asked the guy who currently owns the “muffin” username, if he could
    release it. Let’s hope that will happen soon!</P>

    <P>But there’s also a great news regarding usernames: After emailing
    the guy who owned the “muffin” package on npm, he agreed
    to release it. I didn’t even had to do something in exchange. I just
    love the open source community and everything around it!</P>

    <P>I’ve also came to the conclusion that it’s probably a better
    idea to just leave all of its repositories public while developing. This
    way, it’s easier for other developers to help me with
    bringing it to a stable version.</P>

    <H2>Ember</H2>

    <P>As you might have already noticed by now, the repository
    called “old” contains a lot of commits. Not only because I’ve added
    a lot to the main system, but also because it was
    rewritten a lot of times:</P>

    <Image src="/static/posts/first-muffin-update/github-graph.png" />

    <P>But in the middle of the process, something started bugging me: There
    didn’t seem to be a way to simply add the API to the
    Ember app (only mockups) and all in all, I thought making the
    server-side stuff a separate repo/package will make development
    much more complex for contributors. So I’ve switched
    back to server-side rendered.</P>

    <P>A few months later, I was struggling with building my own workflow for all of the
    things that are necessary for building a modern web
    app: ES2015 module bundling and resolving, running the web
    and livereloading server while also watching files
    and rebuilding if necessary and much more things of that kind.</P>

    <P>While I think that I’ve found a clean way to solve all of this, it was
    still too slow and complex. So asked myself: “Do you really
    want to rewrite all of this again?” No. Of course not. But I did!</P>

    <P>So in favour of making Muffin the most modern content management
    system, I’ve moved the core system to the repo called “old” and created
    new ones for the “client” and the API (“server”). In those
    repositories, I’ll now continue making the system stable.</P>

    <P>And hell yeah, it’s better! Way better. — In the first few days, I’ve already
    noticed that it’s much easier to add features and
    iterate over stuff. And the best thing about that: It will allow me
    to add many of those shiny new web things like web sockets
    and service workers to the application easily. So all in
    all, I definitely don’t regret this decision!</P>

    <H2>So, What's Next?</H2>

    <P>After having rebuilt the whole app using Ember, I will now
    continue adding more features to it and bring it to a stable version.</P>

    <P>Since some releases we’re already in use in that old “muffin” package
    on npm, the first release will be 1.0.0 and not 0.1.0. Because of this, I’ll have
    to make muffin stable for production before publishing
    the first release (like specified on <Link href="http://semver.org">SemVer</Link>).</P>
  </Post>
)
