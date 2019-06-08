import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ content }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "40px 0",
      }}
    >
      {content.map(c => {
        return (
          <a
            key={c.link}
            target="_blank"
            style={{
              fontSize: 30,
              margin: "0 20px",
            }}
            href={c.link}
          >
            <FontAwesomeIcon icon={c.icon} />
          </a>
        )
      })}
    </div>
  )
}
