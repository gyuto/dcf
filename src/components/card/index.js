import React from "react"
import * as colors from "../../styles/colors"

const Card = ({ children, padding }) => {
  return (
    <div
      style={{
        backgroundColor: colors.white,
        boxShadow: "0 0 5px rgba(0,0,0,0.3)",
        borderRadius: "3px",
        position: "relative",
        padding: padding || "20px 25px",
      }}
    >
      {children}
    </div>
  )
}

export default Card
