import React from "react"
import CenteredBlock from "../centered-block"

export default () => {
  if (typeof window == "undefined") {
    return null
  }
  const clientWidth = window.document.body.clientWidth
  const width = clientWidth >= 1200 ? 1200 : "100%"
  const height = width === 1200 ? 600 : (clientWidth / 16) * 9

  return (
    <CenteredBlock>
      <div>
        <p
          style={{
            border: "2px solid pink",
          }}
        >
          yo
        </p>
      </div>

      <iframe
        width="100%"
        height={height}
        aligh="middle"
        src="https://www.youtube.com/embed/VcFZmdjaAJ8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </CenteredBlock>
  )
}
