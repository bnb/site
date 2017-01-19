// Packages
import Head from 'next/head'

// Components
import Link from '../components/link'

const posts = [
  {
    id: 1,
    url: 'http://google.com',
    title: 'LOOL'
  }
]

export default () => (
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
