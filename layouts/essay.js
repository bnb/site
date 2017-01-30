// Layouts
import Page from './page'

export default ({ children }) => (
  <Page>
    <Link href="/"><a className="back">&#8617;&#xFE0E;</a></Link>

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
