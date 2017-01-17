// Native
import PreFetch from 'next/prefetch'

// Packages
import isAbsoluteUrl from 'is-absolute-url'

export default ({ href, children }) => (
  <span>
    {
      isAbsoluteUrl(href) ?
        <a href={href} target="_blank" rel="noreferrer noopener">{children}</a> :
        <PreFetch href={href}>{children}</PreFetch>
    }

    <style jsx>{`
      a {
        color: green;
      }
    `}</style>
  </span>
)
