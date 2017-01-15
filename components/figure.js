const Image = ({ width, src }) => (
  <figure>
    <img width={width} src={src} />

    <style jsx>{`
      img {
        max-width: 100%;
        margin: 20px 0;
      }
    `}</style>
  </figure>
)

export { Image }
