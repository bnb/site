// Layouts
import Page from './page'

export default ({ children }) => (
  <Page>
    <article>
      { children }
    </article>

    <style jsx>{`
      article {
        max-width: 600px;
        margin: 0 auto;
      }
    `}</style>
  </Page>
)
