// Native
import React from 'react'

// Packages
import toID from 'to-id'

const H1 = class Heading extends React.Component {
  render() {
    const content = this.props.children
    const id = toID(content)

    return React.createElement(
      'h' + this.props.level,
      {
        style: {
          fontWeight: 500,
          fontSize: this.props.fontSize
        }
      },
      <a href={`#${id}`} id={id}>#</a>,
      content
    )
  }
}

H1.defaultProps = {
  level: 1,
  fontSize: 16
}

const H2 = H1
const H3 = H1

export {H1, H2, H3}
