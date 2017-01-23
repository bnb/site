// Native
import React from 'react'

const Table = ({ children }) => (
  <table>{ children }</table>
)

class Row extends React.Component {
  getChildContext() {
    return {
      header: this.props.header || false
    }
  }

  render() {
    return (
      <tr>{ this.props.children }</tr>
    )
  }
}

Row.childContextTypes = {
  header: React.PropTypes.bool
}

const Column = ({ children }, context) => React.createElement(
  context.header ? 'th' : 'td',
  {},
  children
)

Column.contextTypes = {
  header: React.PropTypes.bool
}

export { Table, Row, Column }
