import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as colors from "../../styles/colors"
import "./styles.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: colors.brand,
      marginBottom: `1.45rem`,
      boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
    }}
  >
    <div className="header-container">
      <img
        width={100}
        src={process.env.DCF_LOGO}
        alt="logo"
        style={{
          margin: "0 10px",
        }}
      />
      <h1
        style={{
          margin: 0,
        }}
      >
        <Link
          to="/"
          style={{
            color: colors.white,
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
