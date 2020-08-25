import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const JeannePage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="author">
      <img className="author-profile-image" src="/assets/jeanne.jpg" alt="Profile Photo"></img>
        <div className="author-introduction">
          <h2>Jeanne</h2>
          <p>
            This is my profile and I have some words
          </p>
          <p>
            Send tips to: @jeanneluong on Venmo
          </p>
        </div>
      </div>
      <h2>Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}
export default JeannePage
export const pageQuery = graphql`
  query jeannePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
