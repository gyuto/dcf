import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Carousel from "../components/carousel"
import SEO from "../components/seo"
// import AnyPreview from "any-cra"
import AnyPreview from "any-preview"

import contentCharityTour from "../content/articles/charity-tour-2019.json"
import contentMissionStatement from "../content/articles/mission-statement.json"
import contentSponsorUnderprivilegedChildren from "../content/articles/sponsor-underprivileged-children.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        maxHeight: 520,
        overflow: "hidden",
        marginBottom: 70,
      }}
    >
      <Carousel />
    </div>

    <AnyPreview
      content={[
        contentCharityTour,
        contentMissionStatement,
        contentSponsorUnderprivilegedChildren,
      ]}
      defaultPreviewPic="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/28618900_888100058031432_1628881676064104127_o.jpg?_nc_cat=103&_nc_oc=AQmKQUkWOvcocGs5JURxAW6DyGquN_tkfpDM7kkJN3OdNu7nNB1PLWteSWe5tZgSHoBR2HWdD7q89cYeceRxQ8Hl&_nc_ht=scontent-sjc3-1.xx&oh=7de0deed52b6de4e142094e7d5abe1f7&oe=5D898903"
    />

    {/* <Link to="/mission-statement/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
