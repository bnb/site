export default ({id}) => {
  const count = id ? ` ${id}` : ''

  return (
    <b>
      {`✏️EDIT${count}:`}

      <style jsx>{`
        b {
          font-weight: normal;
          background: #fff;
        }
      `}</style>
    </b>
  )
}
