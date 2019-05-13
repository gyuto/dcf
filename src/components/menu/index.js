import { Link } from "gatsby"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import React from "react"

const MenuButton = styled.h4`
  color: palevioletred;
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
    <MenuButton>Home</MenuButton>
    <MenuButton>About us</MenuButton>
    <MenuButton>Programs</MenuButton>
    <MenuButton>Support us</MenuButton>
    <MenuButton>Gallery</MenuButton>
  </div>
)

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
