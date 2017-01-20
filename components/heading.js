// Native
import React from 'react'

// Packages
import toID from 'to-id'

const H = ({ level, fontSize, linked, children }) => (
  <div>
    {
      React.createElement(`h${level}`,
        {
          style: {
            fontWeight: 500,
            fontSize
          }
        },
        linked && <span>
          <a href={`#${toID(children)}`} id={toID(children)}>#</a>
        </span>,
        children
      )
    }

    <style jsx>{`
      span {
        position: absolute;
        margin-left: -15px;
        width: 15px;
      }

      a {
        visibility: hidden;
      }

      div:hover a,
      span:hover a {
        visibility: visible;
      }
    `}</style>
  </div>
)

for (let level = 1; level <= 6; level++) {
  const tag = `H${level}`

  const component = props => new H({
    ...props,
    level,
    fontSize: 30 - (6 * level),
    linked: level > 1
  })

  exports[tag] = component
}
