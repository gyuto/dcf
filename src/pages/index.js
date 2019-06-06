import React from "react"
import * as R from "ramda"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import SEO from "../components/seo"
import Preview from "article-preview"
import getImage from "../images/get-image"

import contentCharityTour from "../content/articles/charity-tour-2019.json"
import contentMissionStatement from "../content/articles/mission-statement.json"
import contentSponsorUnderprivilegedChildren from "../content/articles/sponsor-underprivileged-children.json"

const format = content => ({
  ...content,
  pic: {
    title: getImage(R.path(["pic", "title"], content)),
  },
})
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

    <Preview
      content={[
        format(contentCharityTour),
        format(contentMissionStatement),
        format(contentSponsorUnderprivilegedChildren),
      ]}
      defaultPreviewPic={getImage("cover2")}
    />

    {/* <Link to="/mission-statement/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
