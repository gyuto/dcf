import React from "react"
import { Carousel as ReactCarousel } from "react-responsive-carousel"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import cover from "../../images/cover.jpg"
import cover2 from "../../images/cover2.jpg"
import cover3 from "../../images/cover3.jpg"
import cover4 from "../../images/cover4.jpg"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const imageList = [
  {
    pic: cover,
    text: "Education for children",
  },
  {
    pic: cover2,
    text: "Give a little. Change a lot.",
  },
  {
    pic: cover3,
    text: "Raise fund. Warm heart.",
  },
  {
    pic: cover4,
    text: "Educate Himalayan children",
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
      maxHeight: 600,
      overflow: "hidden",
      marginBottom: 70,
      display: "flex",
      flexDirection: "column",
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
    >
      {imageList.map((image, index) => (
        <SingleImage
          image={image}
          index={index}
          key={`${image.text}-${index}`}
        />
      ))}
    </ReactCarousel>
  </div>
)
export default Carousel
