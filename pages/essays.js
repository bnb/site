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

    <h1>Essays</h1>

    <ul>
      {
        preparePosts().map(post => (
          <li key={post.id}>
            <Link href={post.url}><a>{post.title}</a></Link>
            <span>{parseDate(post.date).format('MMMM Do YYYY')}</span>
          </li>
        ))
      }
    </ul>

    <style jsx>{`
      ul {
        margin: 0;
        padding: 25px 0;
        list-style: none;
      }

      li {
        margin: 17px 0;
        font-size: 15px;
      }

      a {
        text-decoration: none;
        color: #000;
        display: inline-block;
      }

      span {
        display: block;
        color: grey;
        font-size: 13px;
      }

      h1 {
        margin: 0 0 0px 0;
      }
    `}</style>
  </Page>
)
