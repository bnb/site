// Components
import Highlight from 'react-syntax-highlighter'

// Other
import {github} from 'react-syntax-highlighter/dist/styles'

const styles = {
  margin: '30px 0',
  padding: '14px',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box',
  wordWrap: 'normal',
  fontSize: '1.1em'
}

const Snippet = ({ type, children }) => (
  <Highlight language={type} style={github} customStyle={styles}>
    { children }
  </Highlight>
)

const Inline = ({ children }) => (
  <code>
    { children }

    <style jsx>{`
      code {
        background: #f3f3f3;
        padding: 2px 4px;
        border-radius: 3px;
        font-size: 14px;
        color: #3a3a3a;
        hyphens: none;
      }
    `}</style>
  </code>
)

export { Snippet, Inline }
