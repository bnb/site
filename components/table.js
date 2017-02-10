// Native
import React from 'react'

const Table = ({ children }) => (
  <table cellSpacing="0" cellPadding="5">
    { children }

    <style jsx>{`
      table {
        table-layout: fixed;
        width: 100%;
        margin: 30px -5px;
        border: none;
      }
    `}</style>
  </table>
)

class Row extends React.Component {
  getChildContext() {
    return {
      header: this.props.header || false
    }
  }

  render() {
    return (
      <tr>
        { this.props.children }

        <style jsx>{`
          tr {
            text-align: left;
            font-size: 15px;
          }
        `}</style>
      </tr>
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
