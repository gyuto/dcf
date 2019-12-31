import React from "react"
import { Carousel as ReactCarousel } from "react-responsive-carousel"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

const Page = () => {
  return (
    <Layout>
      <SEO title="Phurbu Dolma Now and Then" />
      <Article
        content={{
          title: "Phurbu Dolma Now and Then",
        }}
      >
        <h3>Phurbu Dolma Now and Then</h3>
        <img
          alt="Phurbu Dolma Now and Then"
          src="https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fphurbu-dolma-1.jpg?alt=media&token=355fc1ee-689d-43b8-9cd9-8ed314ed2ce2"
        />
        <br />
        <img
          alt="Phurbu Dolma Now and Then"
          src="https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fphurbu-dolma-2.jpg?alt=media&token=bb040828-ed07-4ba2-8c83-8b25c229ac30"
        />
        <div style={{ height: 50 }} />
      </Article>
    </Layout>
  )
}

export default Page
