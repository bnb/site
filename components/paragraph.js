export default ({ children }) => (
  <p>
    {children}

    <style jsx>{`
      p {
        font-size: 15px;
        line-height: 23px;
      }
    `}</style>
  </p>
)
