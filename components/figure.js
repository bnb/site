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

const gistURL = id => `//gist.github.com/leo/${id}.js`

const Gist = ({ id }) => (
  <script src={ gistURL(id) }></script>
)

export { Image, Gist }
