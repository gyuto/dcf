import { Carousel } from "react-responsive-carousel"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import cover from "../../images/cover.jpg"
import cover2 from "../../images/cover2.jpg"
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

const Image = () => (
  <Carousel>
    <div>
      <img src={cover} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={cover2} />
      <p className="legend">Legend 2</p>
    </div>
  </Carousel>
)
export default Image
