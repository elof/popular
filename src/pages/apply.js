import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"


const ApplyPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Apply — {site.siteMetadata.title}</title>
        <meta name="description" content={"Application page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/D9807852-F135-4B4E-9BD0-2ECA337D498E.jpeg')`, marginBottom: 0}}>
          <h1 className="post-title">Apply to be an author</h1>
          <p>Inspire others &rarr;</p>
        </div>
        <div>
        <form name="Application" method="post" className="form-container" netlify-honeypot="bot-field" data-netlify="true" >
          <p>
            <input type="hidden" name="form-name" value="Application" />
          </p>
          <p class="hidden">
            <input type="hidden" name="bot-field" />
          </p>
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>User Name <input type="text" name="text" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Topics <input type="text" name="topics" /></label>
          </p>
          <p>
            <button type="submit" className="button -primary">Send</button>
          </p>
        </form>
        </div>
      </div>
    </Layout>
  )
}
export default ApplyPage
export const pageQuery = graphql`
  query ApplyPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
