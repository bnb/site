// Components
import Back from '../components/back'

// Layouts
import Page from './page'

export default ({ children }) => (
  <Page>
    <Back to="/essays"/>

    <article>
      { children }
    </article>

    <style jsx>{`
      article {
        width: 600px;
        margin: 0 auto;
      }
    `}</style>
  </Page>
)
