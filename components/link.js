// Helpers
import isAbsoluteUrl from 'is-absolute-url'

// Components
import PreFetch from 'next/prefetch'

export default ({ href, children }) => (
  <span>
    {
      isAbsoluteUrl(href) ?
        <a href={href} target="_blank" rel="noreferrer noopener">{children}</a> :
        <PreFetch href={href}><a>{children}</a></PreFetch>
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
