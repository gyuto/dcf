import React from "react"

export default () => (
  <footer
    style={{
      marginTop: 30,
      textAlign: "center",
      fontSize: 14,
    }}
  >
    © {new Date().getFullYear()},{` `}
    <a
      href="/"
      style={{
        color: "#666",
      }}
    >
      Delek Children's Foundation
    </a>
  </footer>
)
