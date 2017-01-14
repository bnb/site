// packages
import Head from 'next/head'
import Link from 'next/prefetch'

// Layouts
import Post from '../../layouts/post'

export default () => (
  <Post>
    <Head>
      <title>It's ZEIT</title>
    </Head>

    <h1>It's ZEIT</h1>

    <p>On March the 30th, around midnight, <Link href="https://twitter.com/rauchg">Guillermo Rauch</Link> received
    an email from a guy who had noticed earlier that the person
    he was writing to was in the process of establishing a new company.</p>

    <p>And since the sender of said message has already been
    a huge fan of Guillermo’s previous projects, he was asking whether
    or not he could help pushing it forward.</p>

    <p>A few hours later, Mr. Rauch answered.</p>

    <p>Now, almost 4 months later, a lot of awesome work has been
    created: Designs, Concepts and Open Source software. All of
    them have contributed to <Link href="https://zeit.co">ZEIT</Link> — a company whose
    mission it is to build great cloud solutions and
    software for developers and other creatives.</p>

    <p>I’m that guy.</p>

    <p>Why? Me?! A 18-year-old teenager?</p>

    <p>I mean, just a few months before this happened, I’ve
    decided to end my apprenticeship at a local agency, drop out of
    vocational school and <Link href="https://medium.com/@leo/im-going-freelance">focus</Link> on
    doing high quality work for a handful of clients which
    I had known from working for various other teams for the last 7 years.</p>

    <p>And guess what? Now <b>I’m joining ZEIT full-time</b>! 🎉</p>

    <p>It’s funny, isn’t it? Yea, in the beginning I couldn’t believe
    it either. But it looks like — thanks to all of the effort I’ve
    pushed into this whole dream of creating awesome software — someone
    finally decided to hand me the freedom, resources and options to unleash
    my full potential.</p>

    <p>From now on, I’ll be leading <Link href="https://github.com/zeit">Open Source</Link> and
    everything related to our community-facing projects.</p>

    <p>But enough of this! I don’t want to reveal
    too much. If you like good software and neat products in general (I’m sure you do), just
    follow <Link href="https://twitter.com/notquiteleo">me</Link> and <Link href="https://twitter.com/zeithq">ZEIT</Link>,
    grab some 🍿 and be amazed! 😛</p>
  </Post>
)
