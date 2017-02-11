export default ({ children }) => (
  <p>
    {children}

    <style jsx>{`
      p {
        font-size: 16px;
        line-height: 25px;
        margin: 22px 0;
      }
    `}</style>
  </p>
)
