const H = ({ children }) => (
  <h1>
    { children }

    <style jsx>{`
      h1 {
        color: blue;
      }
    `}</style>
  </h1>
)

const H1 = H
const H2 = H
const H3 = H

export {H1, H2, H3}
