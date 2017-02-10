// Helpers
import React from 'react'
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
      div {
        margin-top: 30px;
      }

      span {
        position: absolute;
        margin-left: -15px;
        width: 15px;
      }

      a {
        text-decoration: none;
        color: #4492ff;
        padding-top: 30px;
      }

      a:focus {
        outline: none;
      }

      @media (min-width: 922px) {
        a {
          visibility: hidden;
        }

        div:hover a,
        span:hover a {
          visibility: visible;
        }
      }
    `}</style>
  </div>
)

for (let level = 1; level <= 6; level++) {
  const tag = `H${level}`

  const sizes = [
    23,
    18,
    15,
    13,
    10,
    9
  ]

  const component = props => new H({
    ...props,
    level,
    fontSize: sizes[level - 1],
    linked: level > 1
  })

  exports[tag] = component
}
