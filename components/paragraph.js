export default ({ children }) => (
  <p>
    { children }

    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
  </p>
)
