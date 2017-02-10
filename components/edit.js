export default ({id}) => {
  const count = id ? ` ${id}` : ''

  return (
    <b>
      {`EDIT${count}:`}

      <style jsx>{`
        b {
          background: #e9b6e1;
          padding: 1px 3px;
          border-radius: 3px;
          font-size: 14px;
          font-weight: bold;
          color: #fff;
        }
      `}</style>
    </b>
  )
}
