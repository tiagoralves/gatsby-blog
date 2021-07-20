import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      Title: {post.frontmatter.title}
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost
