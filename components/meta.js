// Native
import Head from 'next/head'

// Packages
import moment from 'moment'

// Components
import {H1} from './heading'

const humanReadable = date => {
  return moment(date, 'DD-MM-YYYY').format('MMMM Do YYYY')
}

export default ({ title, date }) => (
  <aside>
    <Head>
      <title>{ title }</title>
    </Head>

    <H1>{ title }</H1>
    <span>{ humanReadable(date) }</span>
  </aside>
)
