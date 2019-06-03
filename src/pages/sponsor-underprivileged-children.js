import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import content from "../content/articles/sponsor-underprivileged-children.json"

const Page = () => {
  return (
    <Layout>
      <SEO title="Sponsor underprivileged children" />
      <Article content={content} />
    </Layout>
  )
}

export default Page
