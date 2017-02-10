const OL = ({ children }) => (
  <ol>
    { children }

    <style jsx>{`
      ol {
        list-style: decimal;
        margin: 30px 0;
        padding: 0 0 0 22px;
      }
    `}</style>
  </ol>
)

const UL = ({ children }) => (
  <ul>
    { children }

    <style jsx>{`
      ul {
        margin: 30px 0;
        list-style: disc;
        padding: 0 0 0 18px;
      }
    `}</style>
  </ul>
)

const LI = ({ children }) => (
  <li>
    { children }

    <style jsx>{`
      li {
        font-size: 15px;
        margin-bottom: 15px;
        line-height: 23px;
      }
    `}</style>
  </li>
)

export { OL, UL, LI }
