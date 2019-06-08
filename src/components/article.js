import * as R from "ramda"
import PropTypes from "prop-types"
import React from "react"
import * as colors from "../styles/colors"
import getImage from "../images/get-image"

const Article = ({ children, content = {} }) => {
  return (
    <div
      style={{
        marginTop: 30,
      }}
    >
      {R.path(["pic", "banner"], content) && (
        <div
          style={{
            width: "100%",
            height: 300,
            backgroundImage: `url(${getImage(content.pic.banner)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        {content.title && <h1>{content.title}</h1>}
        {R.path(["pic", "title"], content) && (
          <div
            style={{
              width: "100%",
              minHeight: 300,
              backgroundImage: `url(${getImage(
                R.path(["pic", "title"], content)
              )})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              margin: "50px 0",
            }}
          />
        )}
        {content.main && <p>{content.main}</p>}
        {children}
        <a
          href="/"
          style={{
            color: colors.brandSecondary,
          }}
        >
          Back to home page
        </a>
      </div>
    </div>
  )
}

Article.propTypes = {
  siteTitle: PropTypes.string,
}

Article.defaultProps = {
  siteTitle: ``,
}

export default Article
