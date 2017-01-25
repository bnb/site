// Packages
import moment from 'moment'

// Layouts
import Page from '../layouts/page'

// Components
import Link from '../components/link'
import Title from '../components/title'
import P from '../components/paragraph'

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

    <P>Here{`'`}s a list of my essays:</P>

    <ul>
      {
        preparePosts().map(post => (
          <li key={post.id}>
            <Link href={post.url}><a>{post.title}</a></Link>
          </li>
        ))
      }
    </ul>

    <style jsx>{`
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        margin: 10px 0;
      }

      a {
        text-decoration: none;
      }
    `}</style>
  </Page>
)
