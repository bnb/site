export default ({ children }) => (
  <p>
    {children}

    <style jsx>{`
      p {
        font-size: 15px;
        line-height: 25px;
      }
    `}</style>
  </p>
)
