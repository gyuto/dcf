import React from "react"
import * as R from "ramda"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import SEO from "../components/seo"
import Preview from "../components/article-preview"
import getImage from "../images/get-image"
import Connect from "../components/connect"
import AddressEtc from "../components/address-etc"
import Spacer from "../components/spacer"
import StudentPropfiles from "../components/student-profiles"
import Youtube from "../components/home-page-sections/youtube"

import connectContent from "../components/connect/content"
import contentCharityTour from "../content/articles/charity-tour-2019.json"
import contentMissionStatement from "../content/articles/mission-statement.json"
import contentSponsorUnderprivilegedChildren from "../content/articles/sponsor-underprivileged-children.json"
import contentVocationalPrograms from "../content/articles/vocational-programs.json"

import * as colors from "../styles/colors"

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
        // format(contentMissionStatement),
        format(contentSponsorUnderprivilegedChildren),
        format(contentVocationalPrograms),
      ]}
      defaultPreviewPic={getImage("cover2")}
    />

    {/* <Link to="/mission-statement/">Go to page 2</Link> */}
    {/* <Newsletter /> */}
    <Spacer height={50} />

    <div
      style={{
        borderTop: `1px solid ${colors.brandSecondary}`,
        borderBottom: `1px solid ${colors.brandSecondary}`,
        paddingTop: 40,
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: colors.brandSecondary,
        }}
      >
        Sponsored students
      </h2>
      <StudentPropfiles count={6} />
    </div>
    <Spacer height={70} />

    <Youtube />
    <Spacer height={70} />

    <AddressEtc />
    <Connect content={connectContent} />
  </Layout>
)

export default IndexPage
