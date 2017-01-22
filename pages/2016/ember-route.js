// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {Snippet} from '../../components/code'
import HR from '../../components/hr'
import {Gist} from '../../components/figure'

export default () => (
  <Post>
    <Meta id="ember-route"/>

    <P>When I first came in touch with Ember.js to build the client-side
    rendered version of <Link href="http://muffin.cafe">Muffin</Link>, I was looking for a way to add the name
    of the currently active route to the body. I needed it
    because I wanted certain styles to only be applied to the elements
    within a certain route.</P>

    <P>So after looking around the web for a few minutes, I’ve
    found <Link href="https://github.com/AddJam/ember-body-class">ember-body-class</Link> — an
    add-on which does exactly that. If you just want to take
    advantage of the body classes that are based on the route name, you
    don’t even need to configure a single thing!</P>

    <P>And what’s even more awesome is that you can easily extend
    the list of classes by simply adding them to an array
    available under the “className” property:</P>

    <Snippet language="js">{`export default Ember.route.extend({
  classNames: ['strawberry-jam']
})`}</Snippet>

    <P>So all in all a pretty great solution, right? Definitely!</P>

    <P>But yesterday, I took some of my time and decided to kick
    out some of the add-ons that aren’t really needed. Mostly because
    each of them of course adds another big bag of code to the compiled Ember app.</P>

    <P>So after looking for ways to solve this problem within an additional add-on, I came
    across <Link href="https://dockyard.com/blog/ember/2013/03/27/body-class-tags-in-ember">DockYard’s solution</Link>. It
    picks the name of the current route (“users.edit” for example), replaces
    all dots with dashes and finally adds it to the body’s “class” attribute.</P>

    <P>However, I wanted a solution that mimics the behaviour of
    ember-body-class. What I mean with this is that the
    parts of the route (“users” and “edit”) shouldn’t be treated as a
    single class named “users-edit”, but rather added to the body
    as separate classes.</P>

    <HR/>

    <P>Because of this, I came up with a improved solution:</P>

    <P>I’ve generated a new initializer and
    called it “setup-route”. Then I’ve added the following methods to it:</P>

    <Gist id="2bdb74cb1242f9766a25"/>

    <P>So there you have it!</P>

    <P>The easiest way to add the name of the current route as
    a class to the body, without an add-on. It completely imitates
    the behaviour of ember-body-class and even allows you to
    extend the list of classes by using the “classNames” property on your route.</P>
  </Post>
)
