import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

export const content = {
  title: "Charity Tour To Nepal India 2019",
  main: `This year, Ven. Donyo will lead three different trips to Nepal and
  India. The first trip will be volunteer based trip where you will get a
  rare opportunity to construct a water tank, playground and decorate the
  library, for Shree Dorpu School, in a remote village in Solukhumbu,
  Nepal. Once the project ends, the main tour, Nepal Cultural tour will
  starts. After that, the spiritual tour to Dharamsala, India will follow
  where you will get an opportunity to attend the 600th Anniversary
  celebration of Gyuto Monastery and three days teaching by His Holiness
  Dalai Lama.`,
  linK: "/charity-tour-2019",
  pic: {
    banner: null,
    title:
      "http://delekchildrenfoundation.org/wp-content/uploads/2017/03/charity2017-1.jpg",
  },
}

const Page = () => (
  <Layout>
    <SEO title={content.title} />
    <Article content={content}>
      <Link to="/">Go back to the homepage</Link>
    </Article>
  </Layout>
)

export default Page