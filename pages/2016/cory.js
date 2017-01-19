// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'

export default () => (
  <Post>
    <Meta id="cory"/>

    <P>If you have read one of my posts lately, you were
    probably able to figure out that my personal site runs on Jekyll — the most
    known static site generator in the world of Ruby.</P>

    <P>Not only am I a really huge fan of it, but it was also the
    biggest part of the intention that helped me start blogging again.</P>

    <P>Now, about one year after I’ve made the first commit, I felt
    like it didn’t manage to live up to my expectations
    anymore: Not only have I learned an awful lot about web
    tooling, but I also came across many better ways to
    accomplish certain tasks while developing a project.</P>

    <P>So I’ve asked myself: “There’s a shit ton of things
    you’d like to change in front of you, why
    don’t you try making one yourself?”.</P>

    <P>And while I definitely had in mind that it’s usually not
    such a good idea to reinvent the wheel (especially
    on the web, where a lot of stuff can easily be modified
    through pull requests), I did it.</P>

    <P>I not just wanted to create a copy of existing packages
    for the fun of it, but rather a completely new
    one that combines all of my knowledge into a fast, up-to-date static
    site generator written in pure JavaScript.</P>

    <P>So here it is: <Link href="https://github.com/leo/cory">Cory</Link>.</P>

    <P>If you’re looking for such a generator but
    haven’t yet made your choice, you definitely need to give it a try.</P>

    <P>Just take a few minutes of your time and get ready
    to enjoy what the web has to offer today: Clean, logic-less templates written
    in either <Link href="http://handlebarsjs.com">Handlebars</Link> or Markdown, JavaScript
    transpiling, <Link href="http://sass-lang.com">Sass</Link>, gzip’d files, an
    automated deployment workflow for GitHub, source-maps and etc.!</P>

    <P>And since it’s written in JavaScript, it’s easy for all
    the frontend people to help us with adding features and fixing bugs.</P>
  </Post>
)
