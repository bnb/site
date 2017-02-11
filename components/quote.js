// Components
import P from './paragraph'

export default ({ by, children }) => (
  <blockquote>
    <P>
      { children }
      {
        by && <span>— {by}</span>
      }
    </P>

    <style jsx>{`
      blockquote {
        margin: 30px 0;
        color: #9B9B9B;
        font-style: oblique;
        border-left: 3px solid #9B9B9B;
        padding-left: 17px;
        font-size: 15px;
      }

      span {
        display: block;
        margin-top: 15px;
        font-style: normal;
      }
    `}</style>
  </blockquote>
)
