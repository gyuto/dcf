import React from "react"
import Block from "./block"
import CenteredBlock from "../centered-block"

function Preview({ content, defaultPreviewPic }) {
  return (
    <CenteredBlock>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-between",
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
    </CenteredBlock>
  )
}

export default Preview
