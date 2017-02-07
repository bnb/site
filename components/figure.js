const Image = ({ width, src, isCover }) => (
  <figure className={isCover ? 'cover' : ''}>
    <img width={width} src={src}/>

    <style jsx>{`
      img {
        max-width: 100%;
      }

      figure {
        margin: 20px 0;
      }

      .cover {
        margin: -45px -30px 30px -30px;
      }

      .cover img {
        max-width: none;
        width: 100%;
        object-fit: cover;
      }
    `}</style>
  </figure>
)

const gistURL = id => `//gist.github.com/leo/${id}.js`

const Gist = ({ id }) => (
  <script src={ gistURL(id) }></script>
)

export { Image, Gist }
