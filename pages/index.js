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

    <section>
      <h2>Just call me</h2>
      <h1>Leo</h1>
    </section>

    <nav>
      <a
        href="https://twitter.com/notquiteleo"
        target="_blank"
        rel="noopener noreferrer"
        >Short Thoughts</a>
      <Link href="/essays"><a>Long Thoughts</a></Link>
      <a
        href="https://github.com/leo"
        target="_blank"
        rel="noopener noreferrer"
        >Code</a>
      <a
        href="https://dribbble.com/notquiteleo"
        target="_blank"
        rel="noopener noreferrer"
        >Visuals</a>
    </nav>

    <style jsx>{`
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
          font-weight: 300;
        }

        section h1::before,
        section h1::after {
          font-size: 32px;
          line-height: 0;
          height: 20px;
          position: absolute;
        }

        section h1::before {
          content: '„';
          top: 10px;
          right: -15px;
        }

        section h1::after {
          content: '„';
          left: -15px;
          bottom: 0;
        }

        section h2 {
          margin: 8px 40px 0 0;
          display: inline-block;
          font-weight: 400;
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
          transition: all .2s;
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
