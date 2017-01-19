// Native
import Head from 'next/head'
import React from 'react'

// Packages
import moment from 'moment'

// Components
import Link from '../components/link'

// Data
import posts from '../data/posts'

export default class Meta extends React.Component {
  render() {
    for (const post of posts) {
      const year = moment(post.date, 'DD-MM-YYYY').year()
      post.url = `/${year}/${post.id}`
    }

    return (
      <div>
        <Head>
          <title>Leo Lamprecht</title>
        </Head>

        <div>test</div>

        {
          posts.map(post => (
            <Link href={post.url} key={post.id}>
              {post.title}
            </Link>
          ))
        }
      </div>
    )
  }
}
