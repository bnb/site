// Native
import Link from 'next/prefetch'

export default ({to}) => (
  <div>
    <Link href={to}>
      <a>&#8617;&#xFE0E;</a>
    </Link>

    <style jsx>{`
      a {
        font-size: 19px;
        text-align: center;
        background: #efefef;
        font-weight: bold;
        box-sizing: border-box;
        color: #000;
        position: absolute;
        line-height: 42px;
        right: 30px;
        top: 40px;
        height: 37px;
        width: 37px;
        border-radius: 100%;
        font-family: 'Courier New', serif;
        text-decoration: none;
      }

      @media (min-width: 768px) {
        a {
          width: 50px;
          height: 50px;
          transition: all .2s;
          font-size: 20px;
          line-height: 56px;
        }

        a:hover {
          background: #e3e3e3;
        }
      }
    `}</style>
  </div>
)
