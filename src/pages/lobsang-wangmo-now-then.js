import React from "react"
import { Carousel as ReactCarousel } from "react-responsive-carousel"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

const Page = () => {
  return (
    <Layout>
      <SEO title="Lobsang Wangmo Now and Then" />
      <Article
        content={{
          title: "Lobsang Wangmo Now and Then",
        }}
      >
        <h3>Lobsang Wangmo Now and Then</h3>
        <img
          alt="Lobsang Wangmo"
          src="https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Flobsang-wangmo-1.jpg?alt=media&token=0df04c6a-77de-40c3-bd7a-b0a790f4b8a9"
        />
        <br />
        <img
          alt="Lobsang Wangmo"
          src="https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Flobsang-wangmo-2.jpg?alt=media&token=28ba3e81-fd08-40b5-9118-468f8d41bd0b"
        />
        <div style={{ height: 50 }} />
      </Article>
    </Layout>
  )
}

export default Page
