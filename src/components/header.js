import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as colors from "../styles/colors"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: colors.brand,
      marginBottom: `1.45rem`,
    }}
  >
    <nav class="social">
      <div>Connect with <span>Delek Children&rsquo;s Foundation</span></div>
      <a class="close" href="#" onclick="this.parentNode.style.height=0"><i class="fas fa-times"></i></a>
      <a target="_blank" href="https://vimeo.com/24754486"><i class="fab fa-vimeo"></i></a>
      <a target="_blank" href="https://www.facebook.com/Delek-Childrens-Foundation-413781628796613/"><i class="fab fa-facebook-square"></i></a>
      <a target="_blank" href="https://www.youtube.com/channel/UC7K3C7iSY1JO0HAy4P-Jn5w"><i class="fab fa-youtube"></i></a>
      <a target="_blank" href="https://twitter.com/delekcf"><i class="fab fa-twitter"></i></a>
    </nav>
    <div
      style={{
        textAlign: "center",
        margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
