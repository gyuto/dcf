import React from "react"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import content from "../content/articles/charity-tour-2019.json"

const Page = () => (
  <Layout>
    <SEO title={content.title} />
    <Article content={content}>
      <p>
        Please read through the trip details carefully as we are organizing
        three different tours.
      </p>
      <p>
        <li>
          <a href="/volunteer-opportunity-in-the-himalayas">
            Volunteer opportunity in the Himalayas
          </a>
        </li>
        <li>
          <a href="/nepal-cultural-tour">Nepal cultural tour</a>
        </li>
        <li>
          <a href="/gyuto-600th-celeb">
            Gyuto's 600th anniversary celebration in Dharamsala, India
          </a>
        </li>
      </p>
    </Article>
  </Layout>
)

export default Page
