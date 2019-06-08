import React from "react"
import Button from "./button"

const Menu = ({ content }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
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
            {m.link || m.children ? (
              <Button content={m} key={m.text} />
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
}

export default Menu
