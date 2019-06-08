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
          style={{
            position: "absolute",
            marginLeft: -20,
          }}
          onMouseEnter={() => {
            toggleDropdownState(true)
          }}
          onMouseLeave={() => {
            toggleDropdownState(false)
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "white",
              width: 220,
              borderTop: `3px solid #666`,
              marginTop: 10,
              boxShadow: "0 3px 5px #EEE",
              borderRadius: 3,
              paddingBottom: 5,
              zIndex: 10,
            }}
          >
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
