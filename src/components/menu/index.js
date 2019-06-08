import PropTypes from "prop-types"
import React from "react"

const menu = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About us",
    link: "/mission-statement",
  },
  {
    text: "Programs",
    link: "/vocational-programs",
  },
  {
    text: "Support us",
    link: "/support-us",
  },
  {
    text: "Gallery",
  },
]

const Menu = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    {menu.map(m => {
      return (
        <div
          key={m.text}
          style={{
            margin: "0 35px",
          }}
        >
          {m.link ? (
            <a key={m.text} href={m.link}>
              {m.text}
            </a>
          ) : (
            <div
              style={{
                color: "#BBB",
              }}
            >
              {m.text}
            </div>
          )}
        </div>
      )
    })}
  </div>
)

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
