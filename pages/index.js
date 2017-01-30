// Native
import Link from 'next/prefetch'
import Head from 'next/head'

// Layouts
import Page from '../layouts/page'

// Components
import Title from '../components/title'

export default () => (
  <Page>
    <Title/>

    <Head>
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Cardo&text=Just%20call%20me%20Leo"/>
    </Head>

    <section>
      <h2>Just call me</h2>
      <h1>Leo</h1>
    </section>

    <nav>
      <a href="https://twitter.com/notquiteleo">Short Thoughts</a>
      <Link href="/essays"><a>Long Thoughts</a></Link>
      <a href="https://github.com/leo">Code</a>
      <a href="https://dribbble.com/notquiteleo">Visuals</a>
    </nav>

    <style jsx>{`
      section {
        font-family: 'Cardo', serif;
      }

      section h1 {
        font-size: 57px;
        left: 35px;
        top: 35px;
        font-weight: normal;
        margin: 0;
        position: absolute;
        padding-right: 35px;
        line-height: 1.2em;
      }

      section h1:focus {
        outline: none;
      }

      section h2 {
        display: none;
      }

      nav {
        position: absolute;
        left: 25px;
        bottom: 27px;
      }

      nav a {
        text-decoration: none;
        color: #000;
        font-size: 15px;
        padding: 10px;
        display: block;
      }

      @media (min-width: 768px) {
        section {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          text-align: center;
          display: flex;
          height: inherit;
          align-items: center;
          justify-content: center;
        }

        section h1 {
          position: relative;
          display: inline-block;
          left: auto;
          top: auto;
          padding-right: 0;
          font-size: 73px;
          color: #454545;
        }

        section h2 {
          margin-right: 18px;
          display: inline-block;
        }

        nav {
          left: 30px;
          right: 30px;
          white-space: nowrap;
          text-align: center;
          bottom: 30px;
          font-size: 0;
        }

        nav a {
          font-size: 15px;
          padding: 4px 10px;
          color: #454545;
          display: inline-block;
          border-radius: 6px;
          margin: 0 5px;
        }

        nav a:hover {
          background: #efefef;
        }
      }

      @media (max-height: 390px) and (min-width: 768px) {
        nav {
          display: none;
        }
      }
    `}</style>
  </Page>
)
