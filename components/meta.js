// Packages
import moment from 'moment'

// Data
import posts from '../data/essays'

// Components
import {H1} from './heading'
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

      <H1>{ post.title }</H1>
      <span>{ readable(post.date) }</span>
    </aside>
  )
}
