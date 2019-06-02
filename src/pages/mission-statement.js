import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import content from "../content/articles/mission-statement.json"

const Page = () => {
  console.log(3030, content)
  return (
    <Layout>
      <SEO title="Mission statement" />
      <Article content={content}>
        <Link to="/">Go back to the homepage</Link>
      </Article>
    </Layout>
  )
}

export default Page