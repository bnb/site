// Layouts
import Post from '../../layouts/post'

// Components
import P from '../../components/paragraph'
import Link from '../../components/link'
import Meta from '../../components/meta'
import {Image} from '../../components/figure'
import HR from '../../components/hr'
import {H2} from '../../components/heading'
import {OL, LI} from '../../components/list'
import Space from '../../components/space'

export default () => (
  <Post>
    <Meta title="Why JSON Web Tokens Are Truly Awesome" date="04-03-2016" />

    <P>There are many ways to handle authentication for web apps. Many
    frameworks (like Ember.js) come with a neat CLI and
    therefore only require a few commands to set up a new method
    for handling it. And that’s exactly how I stumbled upon JSON Web Tokens:</P>

    <P>In my current project, I’m using <Link href="http://ember-simple-auth.com">ember-simple-auth</Link> for managing
    authentications and everything related to them.</P>

    <P>After setting it up, the default authentication you get is
    OAuth2. However, I didn’t just wanted to keep what I
    was given. I wanted to find out what the best method for my particular
    case is. So I’ve crawled the web for nearly an hour
    and found out that there really is a better way for me to
    handle those things: So-called “JWTs”.</P>

    <P>And because it was also a lot of fun to implement them, I’d like to
    share with you why it might be the best
    solution for your app, too.</P>

    <P>Ready? Fine!</P>

    <HR />

    <H2>How It Works</H2>

    <P>In contrast to OAuth2 sessions, JWT sessions are
    self-contained. That means all the information about current session
    is already part of the token itself. So instead of saving
    details about each running session to the DB (like OAuth does it), all
    the data that is required to verify such a session is
    already being stored on the client.</P>

    <P>More specifically, here are all the steps of such a process:</P>

    <OL>
      <LI>After the user enters his name and password, the data
      will be sent to the API (preferably through HTTPS).</LI>

      <LI>On there, both fields should be compared to the user’s DB
      entry. If the user exists and the password matches, step 3
      will take effect. If not, the client will
      receive an error informing the user about entering
      different credentials.</LI>

      <LI>Username and password will be passed to a middleware of
      your choice (I’m using <Link href="https://github.com/koajs/jwt">koa-jwt</Link>, since I’m using Koa for
      the web server). In there, the data will be encrypted with
      the previously mentioned private session key and
      converted into a single String: The so-called “token”.</LI>

      <LI>That token will now be added to the response. From now
      on, it’s saved on the client (either as a cookie, or
      in the LocalStorage).</LI>
    </OL>

    <P>Each time the client tries to load data from the API, it
    will add that token to the request’s headers. This
    makes it easy for the server to verify if it’s still a valid
    session token by decrypting the token using the
    private session key and comparing the obtained data
    to the user’s DB entry:</P>

    <Image src="/static/posts/2016/json-web-tokens/diagram.png" origin="https://jwt.io" />

    <P>However, I think most middlewares don’t actually compare
    the token’s contents again. They simply decrypt it and if that’s not
    possible, it was abviously not generated using the session
    secret and therefore not issued by the server. In this case, the
    client will receive an error, the session token will get
    destroyed and the user will get logged out.</P>

    <H2>Letting Sessions Expire</H2>

    <P>Since there’s no session data saved on the API-part
    of the app, there’s also no way to destroy it from there.</P>

    <P>Because of this, most middlewares that support JSON Web Tokens
    will simply append a property called “exp” to the response
    when passing the token to the client (see step 4).</P>

    <P>And this property will then be used by the client-side
    framework to determine when the session will expire. A few
    minutes/seconds (you can specifiy this, of course) before the
    it does, it will then send a request to the API asking
    for a refresh of the token.</P>

    <P>This request also contains the old token and therefore
    also the user’s data and password. The server will use this
    data to verify the session by comparing it to the user’s entry
    in the database. And if the data is valid, step 3 will
    take effect again.</P>

    <P>When the refresh token reaches the client, it also
    comes with an updated “exp” property and the whole
    process will start again.</P>

    <HR />

    <P>“So what’s the best way to implement this into
    my Ember app”, you might ask now. Well, I have
    the <Link href="https://github.com/jpadilla/ember-simple-auth-token">perfect plugin</Link> for
    you then.</P>

    <P>It extends your ember-simple-auth instance and handles
    all of the necessary communication between the API and the client.</P>

    <P>For the API, there’s <Link href="https://github.com/koajs/jwt">koa-jwt</Link>,<Space />
    <Link href="https://github.com/auth0/express-jwt">express-jwt</Link><Space />
    and <Link href="https://github.com/auth0/node-jsonwebtoken">jsonwebtoken</Link> if
    you rather want to implement the middleware between your web
    server and the actual creation of tokens by yourself...</P>

    <P>So there’s only one thing left for me to say: Thank you for
    reading this and go, help shape the future of secure web
    authentication by implementing it into your own application!</P>
  </Post>
)
