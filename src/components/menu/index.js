import { Link } from "gatsby"
import styled, { css } from "styled-components"
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
  },
  {
    text: "Gallery",
  },
]

const MenuButton = styled.a`
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Menu = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    {menu.map(m => {
      return (
        <MenuButton key={m.text}>
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
        </MenuButton>
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
