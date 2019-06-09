import React from "react"
import * as colors from "../styles/colors"

export default ({ children, dismissModal }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.8)",
        left: 0,
        top: 0,
        display: "flex",
        zIndex: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={dismissModal}
    >
      <div
        style={{
          backgroundColor: colors.white,
          padding: "40px 100px",
          borderRadius: 3,
        }}
      >
        {children}
      </div>
    </div>
  )
}
