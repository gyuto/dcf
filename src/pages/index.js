import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Carousel from "../components/carousel"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        maxHeight: 520,
        overflow: "hidden",
        marginBottom: `1.45rem`,
      }}
    >
      <Carousel />
    </div>
    <Link to="/mission-statement/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
