// Components
import P from './paragraph'
import HR from './hr'

export const FootNotes = ({ children }) => (
  <div>
    <HR/>
    { children }
  </div>
)

export const Ref = ({ id }) => (
  <a href={`#f${id}`} id={`s${id}`}>
    { id }

    <style jsx>{`
      a {
        top: -5px;
        font-size: 10px;
        position: relative;
        text-decoration: none;
        background: #e9b6e1;
        color: #fff;
        font-weight: 700;
        padding: 1px 5px;
        border-radius: 7px;
      }

      a:focus {
        background: #000;
        color: #fff;
        outline: none;
      }
    `}</style>
  </a>
)

export const Note = ({ id, children }) => (
  <P>
    <a href={`#s${id}`} id={`f${id}`}>{ id }</a>
    { children }

    <style jsx>{`
      a {
        text-decoration: none;
        background: #e9b6e1;
        color: #fff;
        padding: 1px 5px;
        border-radius: 5px;
        margin-right: 10px;
      }

      a:focus {
        background: #000;
        color: #fff;
        outline: none;
      }
    `}</style>
  </P>
)
