// Packages
import moment from 'moment'

// Data
import posts from '../data/essays'

// Components
import Title from './title'

// Make date easily readable
const readable = date => moment(date, 'DD-MM-YYYY').format('MMMM Do YYYY')

// Find post using its identifier
const findPost = id => posts.find(post => post.id === id)

export default ({ id }) => {
  const post = findPost(id)

  return (
    <aside>
      <Title value={post.title}/>

      <h1>{ post.title }</h1>
      <span>{ readable(post.date) }</span>

      <style jsx>{`
        h1 {
          font-weight: 500;
          margin: 0 0 8px 0;
          font-size: 23px;
          padding-right: 55px;
        }

        span {
          color: #7c7c7c;
          font-size: 13px;
        }

        aside {
          margin-bottom: 35px;
          margin-top: 14px;
        }
      `}</style>
    </aside>
  )
}
