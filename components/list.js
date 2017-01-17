const OL = ({ children }) => (
  <ol>
    { children }
    <style jsx>{`
      ul {
        margin: 0 0 20px 0;
        padding: 0;
        list-style: inside decimal;
      }
    `}</style>
  </ol>
)

const UL = ({ children }) => (
  <ul>
    { children }
    <style jsx>{`
      ul {
        margin: 0 0 20px 0;
        padding: 0;
      }
    `}</style>
  </ul>
)

const LI = ({ children }) => (
  <li>
    { children }
    <style jsx>{`
      li {
        margin-bottom: 5px;
        line-height: 24px;
      }
    `}</style>
  </li>
)

export { OL, UL, LI }
