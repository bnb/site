// Helpers
import isAbsoluteUrl from 'is-absolute-url'

// Components
import Link from 'next/link'

export default ({ href, children }) => (
  <span>
    {
      isAbsoluteUrl(href) ?
        <a href={href} target="_blank" rel="noreferrer noopener">{children}</a> :
        <Link href={href} prefetch><a>{children}</a></Link>
    }

    <style jsx>{`
      a {
        color: #4492ff;
        text-decoration: none;
        border-bottom: 1px dashed currentColor;
      }
    `}</style>
  </span>
)
