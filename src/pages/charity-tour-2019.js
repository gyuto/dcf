import React from "react"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import content from "../content/articles/charity-tour-2019.json"

const Page = () => (
  <Layout>
    <SEO title={content.title} />
    <Article content={content} />
  </Layout>
)

export default Page
