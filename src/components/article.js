import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as colors from "../styles/colors"

const Article = ({ siteTitle, children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
    }}
  >
    {children}
  </div>
)

Article.propTypes = {
  siteTitle: PropTypes.string,
}

Article.defaultProps = {
  siteTitle: ``,
}

export default Article
