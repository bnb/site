// Native
import Head from 'next/head'

// Packages
import moment from 'moment'

// Layouts
import Page from '../layouts/page'

// Components
import Link from '../components/link'
import Title from '../components/title'

// Data
import posts from '../data/essays'

const parseDate = date => moment(date, 'DD-MM-YYYY')

// Assign a URL to each post and
// sort them by date (most recent one first)
const preparePosts = () => posts.map(post => Object.assign({
  url: `/${parseDate(post.date).year()}/${post.id}`
}, post)).sort((a, b) => parseDate(b.date).diff(parseDate(a.date)))

export default () => (
  <Page>
    <Title/>

    <Head>
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Cardo&text=Leo%27s%20Essays"/>
    </Head>

    <h1>{`Leo's Essays`}</h1>
    <Link href="/"><a className="back">&#8617;&#xFE0E;</a></Link>

    <ul>
      {
        preparePosts().map(post => (
          <li key={post.id}>
            <Link href={post.url}><a>
              <b>{post.title}</b>
              <span>{parseDate(post.date).format('MMMM Do YYYY')}</span>
            </a></Link>
          </li>
        ))
      }
    </ul>

    <style jsx>{`
      ul {
        margin: 0;
        padding: 0 0 30px 0;
        list-style: none;
      }

      li {
        margin: 23px 0;
        text-decoration: none;
      }

      li:last-child {
        margin-bottom: 0;
      }

      a {
        text-decoration: none;
        display: block;
      }

      b {
        color: #000;
        font-size: 16px;
        display: inline-block;
        font-weight: normal;
      }

      .back {
        font-size: 19px;
        text-align: center;
        background: #efefef;
        font-weight: bold;
        box-sizing: border-box;
        color: #000;
        position: absolute;
        line-height: 42px;
        right: 30px;
        top: 40px;
        height: 37px;
        width: 37px;
        border-radius: 100%;
        font-family: 'Courier New', serif;
      }

      span {
        display: block;
        color: #c1c1c1;
        font-size: 13px;
        margin-top: 5px;
      }

      h1 {
        margin: 5px 0 40px 0;
        font-size: 35px;
        font-family: 'Cardo', serif;
        font-weight: normal;
      }

      @media (min-width: 768px) {
        a {
          display: inline-block
        }

        h1 {
          font-size: 40px;
        }

        .back {
          width: 50px;
          height: 50px;
          transition: all .2s;
          font-size: 20px;
          line-height: 56px;
        }

        .back:hover {
          background: #e3e3e3;
        }
      }
    `}</style>
  </Page>
)
