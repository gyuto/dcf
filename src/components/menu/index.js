import React from "react"
import Button from "./button"

// todo - get current location. disable menu

const Menu = ({ content }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {content.map(m => {
        return (
          <div
            key={m.text}
            style={{
              margin: "0 15px",
            }}
          >
            <Button content={m} />
          </div>
        )
      })}
    </div>
  )
}

export default Menu
