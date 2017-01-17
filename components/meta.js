// Native
import Head from 'next/head'

// Components
import {H1} from './heading'

export default ({ title, date }) => (
  <aside>
    <Head>
      <title>{ title }</title>
    </Head>

    <H1>{ title }</H1>
    <span>{ date }</span>
  </aside>
)
