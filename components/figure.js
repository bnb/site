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

      @media (min-width: 768px) {
        figure {
          margin: 40px 0;
        }

        .cover {
          margin: 0 0 40px 0;
          width: 100%;
          border-radius: 6px;
          overflow: hidden;
          font-size: 0;
          line-height: 0;
        }
      }
    `}</style>
  </figure>
)

export default Image
export { Image }
