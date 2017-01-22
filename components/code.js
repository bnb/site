// Packages
import Highlight from 'react-syntax-highlighter'
import {github} from 'react-syntax-highlighter/dist/styles'

const styles = {
  margin: '30px 0',
  padding: '15px 10px'
}

const Snippet = ({ type, children }) => (
  <Highlight language={type} style={github} customStyle={styles}>
    { children }
  </Highlight>
)

const Inline = ({ children }) => (
  <code>{ children }</code>
)

export { Snippet, Inline }
