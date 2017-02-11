// Components
import Head from 'next/head'

export default ({ children }) => (
  <main>
    <Head>
      <link rel="mask-icon" href="http://leo.im/static/lightning.svg" color="#000000"/>
      <link rel="apple-touch-icon" href="/static/touch-icon.png"/>
      <link rel="icon" href="/static/touch-icon.png" type="image/png"/>

      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
      <meta name="description" content="A teenagers view on web development and intuitive UI design."/>
    </Head>

    {children}

    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
      }

      main {
        padding: 30px;
      }

      @media (min-width: 768px) {
        main {
          padding: 45px;
        }
      }
    `}</style>
  </main>
)
