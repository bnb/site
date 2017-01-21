// Native
import Head from 'next/head'

const suffix = 'Leo Lamprecht'

export default ({ value }) => (
  <Head>
    <title>{value ? `${value} — ${suffix}` : suffix}</title>
  </Head>
)
