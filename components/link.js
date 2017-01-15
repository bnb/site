// Packages
import PreFetch from 'next/prefetch'
import isAbsoluteUrl from 'is-absolute-url'

export default ({ href, children }) => (
  <span>
    {
      isAbsoluteUrl(href)
      ? <a href={href} target="_blank">{children}</a>
      : <PreFetch href={href}>{children}</PreFetch>
    }

    <style jsx>{`
      a {
        color: green;
      }
    `}</style>
  </span>
)
