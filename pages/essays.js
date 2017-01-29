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
    <Link href="/"><a className="back">back</a></Link>

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
        font-size: 13px;
        color: #22BAD9;
        position: absolute;
        right: 15px;
        top: 15px;
        padding: 10px;
        font-weight: bold;
      }

      span {
        display: block;
        color: #c1c1c1;
        font-size: 13px;
        margin-top: 5px;
      }

      h1 {
        margin: 0 0 40px 0;
        font-size: 35px;
        font-family: 'Cardo', serif;
        font-weight: normal;
      }
    `}</style>
  </Page>
)
