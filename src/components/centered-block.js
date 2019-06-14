import React from "react"

export default ({ children }) => {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  )
}
