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
const preparePosts = () => {
  const sorted = posts.sort((a, b) => parseDate(b.date).diff(parseDate(a.date)))

  return sorted.map(post => Object.assign(post, {
    url: `/${parseDate(post.date).year()}/${post.id}`,
    date: parseDate(post.date).format('MMMM Do YYYY')
  }))
}

export default () => (
  <Page>
    <Title/>

    <h1>Essays</h1>

    <ul>
      {
        preparePosts().map(post => (
          <li key={post.id}>
            <Link href={post.url}><a>{post.title}</a></Link>
            <span>{post.date}</span>
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
      }

      a, span {
        display: block;
      }

      h1 {
        margin-bottom: 10px;
      }
    `}</style>
  </Page>
)
