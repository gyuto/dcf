import React from "react"
import { Carousel as ReactCarousel } from "react-responsive-carousel"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

const imageList = [
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fsolar-1.jpg?alt=media&token=c23a6a2e-6b2f-45ef-ba47-b2deb28841fd",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fsolar-2.jpg?alt=media&token=22b09cb3-5503-48e8-a53b-5af1bf194f68",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fsolar-3.jpg?alt=media&token=e728bed8-ccf2-454d-913c-dc95a7e868eb",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fsolar-4.jpg?alt=media&token=82066c44-07e2-4ad7-a98c-80d5d5354693",
  },
  {
    pic:
      "https://firebasestorage.googleapis.com/v0/b/delekchildrens.appspot.com/o/permanent-images%2Fsuccess-stories%2Fsolar-5.jpg?alt=media&token=0174d377-4497-45c7-9c9a-06fafe11fa3d",
  },
]
const SingleImage = ({ image, index }) => (
  <>
    <img src={image.pic} />
    <p className="legend">{image.text}</p>
  </>
)
const Carousel = () => (
  <div
    style={{
      maxHeight: 350,
      maxWidth: 500,
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <ReactCarousel
      showArrows
      showIndicators={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      swipeable
      showThumbs={false}
      stopOnHover={false}
    >
      {imageList.map((image, index) => (
        <SingleImage
          image={image}
          index={index}
          key={`${image.text}-${index}`}
        />
      ))}
    </ReactCarousel>
    <div style={{ height: 70 }} />
  </div>
)
const Page = () => {
  return (
    <Layout>
      <SEO title="School Solar Project" />
      <Article
        content={{
          title: "School Solar Project",
        }}
      >
        <h3>School Solar Project</h3>
        <Carousel />
        <p>
          Make the world a better place for future generations, particularly
          these underprivileged children living without hope in great poverty.
          Recently we raised founds for a school solar project which was
          completed at the end of 2014. The solar project cost $10,000. Many
          thanks to all the donors who supported for the school solar project.
          It was a great success and children are enjoying with hot water during
          their winter season for cooking and washing.
        </p>

        <div style={{ height: 50 }} />
      </Article>
    </Layout>
  )
}

export default Page
