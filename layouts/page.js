// Helpers
import Progress from 'nprogress'

// Components
import Head from 'next/head'
import Router from 'next/router'

Router.onRouteChangeStart = () => Progress.start()
Router.onRouteChangeComplete = () => Progress.done()
Router.onRouteChangeError = () => Progress.done()

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

      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #4492ff;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #4492ff, 0 0 5px #4492ff;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }

      @media (min-width: 768px) {
        main {
          padding: 45px;
        }
      }
    `}</style>
  </main>
)
