import React, { useState } from "react"
import SideButton from "./button-side"
import * as colors from "../../styles/colors"
import "./styles.scss"

const Button = ({ content }) => {
  const [mouseOverRootButton, toggleRootButtonState] = useState(false)
  const [mouseOverDropdown, toggleDropdownState] = useState(false)

  return (
    <>
      {content.link ? (
        <a
          key={content.text}
          href={content.link}
          onMouseEnter={() => {
            toggleRootButtonState(true)
          }}
          onMouseLeave={() => {
            toggleRootButtonState(false)
          }}
        >
          {content.text}
        </a>
      ) : (
        <div
          style={{
            color: colors.brandSecondary,
            cursor: "default",
          }}
          key={content.text}
          onMouseEnter={() => {
            toggleRootButtonState(true)
          }}
          onMouseLeave={() => {
            toggleRootButtonState(false)
          }}
        >
          {content.text}
        </div>
      )}

      {(mouseOverRootButton || mouseOverDropdown) && content.children && (
        <div
          className="menu-button-container"
          onMouseEnter={() => {
            toggleDropdownState(true)
          }}
          onMouseLeave={() => {
            toggleDropdownState(false)
          }}
        >
          <div className="menu-button">
            {content.children.map(c => {
              return !c.children || !c.children.length ? (
                <div
                  style={{
                    width: 220,
                    overflow: "visible",
                    margin: "20px 0",
                    paddingLeft: 20,
                    fontSize: 15,
                  }}
                  key={c.text}
                >
                  <a href={c.link} key={c.text}>
                    {c.text}
                  </a>
                </div>
              ) : (
                <div
                  style={{
                    width: 220,
                    overflow: "visible",
                    margin: "20px 0",
                    paddingLeft: 20,
                    fontSize: 15,
                  }}
                  key={c.text}
                >
                  <SideButton content={c} />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
export default Button
