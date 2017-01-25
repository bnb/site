export default ({ children }) => (
  <main>
    {children}

    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
      }

      main {
        padding-left: 40px;
      }
    `}</style>
  </main>
)
