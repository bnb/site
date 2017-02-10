// Components
import P from './paragraph'

export default ({ by, children }) => (
  <blockquote>
    <P>
      { children }
      <br/><br/>
      {
        by && `– ${by}`
      }
    </P>

    <style jsx>{`
      blockquote {
        margin: 30px 0;
        color: #9B9B9B;
        font-style: oblique;
        border-left: 3px solid #9B9B9B;
        padding-left: 20px;
        font-size: 15px;
      }
    `}</style>
  </blockquote>
)
