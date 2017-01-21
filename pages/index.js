// Packages
import moment from 'moment'

// Components
import Link from '../components/link'
import Title from '../components/title'

export default () => (
  <main>
    <Title/>

    <nav>
      <Link href="https://twitter.com/notquiteleo">Quick Thoughts</Link><br/>
      <Link href="/essays">Essays</Link><br/>
      <Link href="https://github.com/leo">Code</Link><br/>
      <Link href="https://dribbble.com/notquiteleo">Visuals</Link><br/>
    </nav>
  </main>
)
