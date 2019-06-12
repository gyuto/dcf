import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as colors from "../styles/colors"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: colors.white, //colors.brand,
      marginBottom: `1.45rem`,
      boxShadow: "0 3px 5px #DDD",
    }}
  >
    <div
      style={{
        textAlign: "center",
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: colors.brand,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
