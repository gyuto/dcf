import React from "react"
import CenteredBlock from "../centered-block"

export default () => {
  return (
    <CenteredBlock>
      <iframe
        width="100%"
        height={300}
        align="middle"
        src="https://www.youtube.com/embed/VcFZmdjaAJ8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </CenteredBlock>
  )
}
