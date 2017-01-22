// Packages
import Highlight from 'react-syntax-highlighter'
import {github} from 'react-syntax-highlighter/dist/styles'

const Snippet = ({ type, children }) => (
  <Highlight language={type} style={github}>{ children }</Highlight>
)

const Inline = ({ children }) => (
  <code>{ children }</code>
)

export { Snippet, Inline }
