const Table = ({ children }) => (
  <table>{ children }</table>
)

const Row = ({ children }) => (
  <tr>{ children }</tr>
)

const Column = ({ children }) => (
  <td>{ children }</td>
)

export { Table, Row, Column }
