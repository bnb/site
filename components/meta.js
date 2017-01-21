// Native
import React from 'react'

// Packages
import moment from 'moment'

// Data
import posts from '../data/posts'

// Components
import {H1} from './heading'
import Title from './title'

const humanReadable = date => {
  return moment(date, 'DD-MM-YYYY').format('MMMM Do YYYY')
}

const findPost = id => posts.find(post => post.id === id)

export default class Meta extends React.Component {
  render() {
    const post = findPost(this.props.id)

    return (
      <aside>
        <Title value={post.title}/>

        <H1>{ post.title }</H1>
        <span>{ humanReadable(post.date) }</span>
      </aside>
    )
  }
}
