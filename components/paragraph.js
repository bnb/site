export default ({ children }) => (
  <p>
    {children}

    <style jsx>{`
      p {
        font-size: 16px;
        line-height: 25px;
      }
    `}</style>
  </p>
)
