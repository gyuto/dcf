import React from "react"

export default () => {
  if (typeof window == "undefined") {
    return null
  }
  const clientWidth = window.document.body.clientWidth
  const width = clientWidth >= 1200 ? 1200 : "100%"
  const height = width === 1200 ? 600 : (clientWidth / 16) * 9

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <iframe
        width={width}
        height={height}
        src="https://www.youtube.com/embed/VcFZmdjaAJ8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
