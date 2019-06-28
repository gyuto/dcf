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
import CenteredBlock from "../components/centered-block"
import SupportUs from "../components/support-us"

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
const IndexPage = () => {
  console.log(1010, process.env)
  console.log(2020, process.env.MY_OTHER_VAR)
  console.log(3030, process.env.BERNIE)

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `gyuto`,
          `delek`,
          `children's`,
          `foundation`,
          `tibetan`,
          `tebet`,
          `nepal`,
          `Delek Children's Foundation`,
        ]}
      />

      <Carousel />

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
          padding: "40px 0",
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
        <Spacer height={20} />
        <StudentPropfiles count={6} />
        <div
          style={{
            textAlign: "center",
          }}
        >
          <a
            style={{
              color: "#aaa",
            }}
            href="/student-profiles"
          >
            More student profiles
          </a>
        </div>
      </div>
      <Spacer height={70} />

      <Youtube />
      <Spacer height={70} />

      <SupportUs />
      <Spacer height={70} />
      <AddressEtc />
      <Connect content={connectContent} />
    </Layout>
  )
}

export default IndexPage
