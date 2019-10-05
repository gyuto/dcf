import React from "react"

const FadeOutBox = props => {
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 30,
          backgroundImage: `linear-gradient(rgba(0,0,0,0), white)`,
          position: "absolute",
          bottom: 0,
        }}
      />
      {props.children}
    </div>
  )
}

export default FadeOutBox
