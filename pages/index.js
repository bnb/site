import React from 'react'
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>Leo Lamprecht</title>

      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:creator" content="@lmprht"/>
      <meta name="twitter:title" content="Leo Lamprecht"/>
      <meta name="twitter:description" content="A teenagers view on web development and intuitive UI design."/>
      <meta name="twitter:image" content="http://leo.im/assets/touch-icon.png"/>

      <meta name="description" content="A teenagers view on web development and intuitive UI design."/>

      <link rel="mask-icon" href="http://leo.im/assets/flash.svg" color="#000000"/>
      <link rel="apple-touch-icon" href="/static/images/touch-icon.png"/>
      <link rel="icon" href="/static/images/touch-icon.png" type="image/png"/>

      <link rel="stylesheet" href="/static/styles/main.css"/>
    </Head>

    <section>
      <h2>Just call me</h2>
      <h1>Leo</h1>
    </section>

    <nav>
      <a href="https://medium.com/@leo">Essays</a>
      <a href="https://github.com/leo">Code</a>
      <a href="https://twitter.com/notquiteleo">Opinions</a>
      <a href="https://dribbble.com/notquiteleo">Art</a>
      <a href="https://instagram.com/notquiteleo">Stupid teenagers</a>
    </nav>
  </div>
)
