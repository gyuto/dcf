import React from "react"
import Block from "./block"

function Preview({ content, defaultPreviewPic }) {
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: 1200,
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      {content.map(blockContent => {
        return (
          <Block
            defaultPreviewPic={defaultPreviewPic}
            key={blockContent.title}
            content={blockContent}
          />
        )
      })}
    </div>
  )
}

export default Preview
