import React from "react"

export default () => {
  if (typeof window == "undefined") {
    return null
  }
  const clientWidth = window.document.body.clientWidth
  const width = clientWidth >= 1200 ? 1200 : "100%"
  const height = width === 1200 ? 600 : (clientWidth / 16) * 9

  return (
    <>
      {/* <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          // textAlign: "center",
          // paddingLeft: (clientWidth - width) / 2,
        }}
      /> */}
      <div
        style={{
          width: "100%",
          height={(clientWidth / 16) * 9},
          display: "flex",
          justifyContent: "center",
          // textAlign: "center",
          // paddingLeft: (clientWidth - width) / 2,
        }}
      >
        <div
          style={{
            // border: "5px solid red",
            width: width,
            height: height,
            position: "relative",
            // padding: 10,
          }}
        >
          <iframe
            width="100%"
            height={height}
            aligh="middle"
            src="https://www.youtube.com/embed/VcFZmdjaAJ8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </>
  )
}
