// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'
import {Snippet, Inline} from '../../components/code'
import {H2} from '../../components/heading'
import HR from '../../components/hr'
import {Ref, FootNotes, Note} from '../../components/footnotes'

export default () => (
  <Post>
    <Meta id="www-vs-no-www"/>

    <P>When it comes to the elder of all subdomains, the
    minds of many developers often divide into
    two different bases:</P>

    <P>One, which is constantly jeering and wanting to
    completely remove the three letters because of aesthetic
    reasons - and the other, which is still worried
    about all the disadvantages the change could have
    on the web’s infrastructure.</P>

    <P><b>But which one should you listen to?</b> - Well, to
    be honest, I wont be able to provide you with a
    solution that’s the right in any case. BUTT I can show
    you how to decide, which way is the best for
    your kind of project...</P>

    <H2>Who Should Use WWW</H2>

    <P>Many system administrators will advise you to not support the
    deprecation of the {`"`}www{`"`} prefix. The reason behind that is, that
    it will allow your host to forward visitors to another server
    if the current one is on fire. To do that, they need to be
    able to update the DNS records of your domain (which is done
    using CNAME entries). Unfortunately, using this procedure
    is not possible without the <i>www</i>.</P>

    <P>But don{`'`}t worry, if your site doesn{`''`}t get tons of traffic
    each day, this isn{`'`}t something you need to worry about. Mostly
    people who are using cloud application providers
    like <Link href="https://www.heroku.com">Heroku</Link> are affected by this.</P>

    <P>Another tiny weak spot on the big balloon that represents all
    developers fighting for the abolition of <i>www</i> is definitely, that it
    if you set up a cookie for a domain like {`"`}www.mysite.org{`"`}, the
    browser won{`'`}t sent it out when accessing content on subdomains
    like {`"`}dumb.mysite.org{`"`}. But if don{`'`}t use the <i>www</i> on your
    main domain, the cookie will be shared on all connections to all subdomains.</P>

    <H2>{`Who Shouldn't Use WWW`}</H2>

    <P>People with small sites. Better described as simple websites
    providing information instead of huge web-apps visited by
    thousands of people each day.</P>

    <P>Removing the prefix from their domain will definitely make
    them look better - especially on all those dumb business posters
    potential customers will see on the streets.</P>

    <P>If we{`'`}re currently talking about a really huge
    business - I mean, really huge (like McDonalds) - who is putting
    it{`'`}s address on every fucking print, this might also
    save a large amount of ink and therefore
    also ink<Ref id="1"/> - you{`'`}re
    welcome, environment!</P>

    <H2>So, How Can I Support No-WWW?</H2>

    <P>To really make a difference, you just need to forward the
    traffic on your domain from „www.“ to the URL without the three letters.</P>

    <P>For example, you can do that by adding a <Inline>.htaccess</Inline> file with the
    following contents to the root directory of your site:</P>

    <Snippet>{`RewriteEngine On
RewriteCond %{HTTP_HOST} ^www.(.+)$ [NC]
RewriteRule ^(.*)$ http://%1/$1 [R=301,L]`}</Snippet>

    <P>Redirecting all visitors from the old subdomain to the main
    adress will let them know that they don’t need those
    three „w“s at the beginning at stop using them.</P>

    <HR/>

    <P>Okay, we{`'`}re finished! Now take a look at your
    project and make the best possible descision.</P>

    <P>All in all I nevertheless think that YOU (if you don’t have a site
    that gets hundreds of thousands of visitors each day) should
    start deprecating the subdomain <b>today</b>, so that the
    webhosters will respond to this issue with a better solution in the future.</P>

    <FootNotes>
      <Note id="1">Take a look
      at <Link href="http://theatln.tc/1hZnET8">this example</Link>!</Note>
    </FootNotes>
  </Post>
)
