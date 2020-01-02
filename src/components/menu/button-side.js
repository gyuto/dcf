import React, { useState } from "react"
import * as colors from "../../styles/colors"

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
          onMouseEnter={() => toggleRootButtonState(true)}
          onMouseLeave={() => toggleRootButtonState(false)}
        >
          {content.text}
        </div>
      )}

      {(mouseOverRootButton || mouseOverDropdown) && content.children && (
        <div
          className="menu-button-side-container"
          onMouseEnter={() => toggleDropdownState(true)}
          onMouseLeave={() => toggleDropdownState(false)}
        >
          <div className="menu-button-side">
            {content.children.map(c => {
              return (
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
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
export default Button
