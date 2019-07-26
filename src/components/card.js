import React from "react"
import * as colors from "../styles/colors"

export default ({ children, padding }) => {
  return (
    <div
      style={{
        padding,
        backgroundColor: colors.white,
        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  )
}
