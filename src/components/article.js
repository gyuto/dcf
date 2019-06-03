import { Link } from "gatsby"
import * as R from "ramda"
import PropTypes from "prop-types"
import React from "react"
import * as colors from "../styles/colors"

const Article = ({ children, content }) => {
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
            backgroundImage: `url(${content.pic.banner})`,
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
        <h1>{content.title}</h1>
        {R.path(["pic", "title"], content) && (
          <img
            style={{
              width: 960,
            }}
            src={content.pic.title}
            alt={content.title}
          />
        )}
        <p>{content.main}</p>
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
