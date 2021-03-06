import React from "react"
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const IndexPage = ({
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
      {/* <HeroHeader/> */}
      <div className="home-page-intro">
        <h1>Share your expertise, make money</h1>
        <p>
        What are you passionate about? What have you recently researched? Are you really into Tennis? Why don’t you tell people what gear you use and why you like it. Recently got started with wood working? Show off some things you made and tell people what tools they will need to get started making their own! Everyone has their thing, share it with the world.
        </p>
        <br></br>
        <p>
        PopularAF is more or less a blogging platform. We provide you a free profile, followers can subscribe to your feed and leave tips. We convert products you recommend into affiliate links, which means you get paid for a percent of any product your fans buy after clicking on your product reccomendations!
        </p>
        <br></br>
        <p>
        <Link to='/apply' className="button -primary">Apply to be an author &rarr;</Link>
        </p>
      </div>
      {/*  <h3>Blog Posts &darr;</h3>
      <div className="grids">
         {Posts}
      </div> */}
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
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
