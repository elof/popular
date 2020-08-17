import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const JeannePage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Jeanne's Blog! — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
          <h1 className="post-title">Jeanne's Homepage</h1>
          <p>Let me help you kick start your next project</p>
      </div>
    </Layout>
  )
}
export default JeannePage
export const pageQuery = graphql`
  query JeannePageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
