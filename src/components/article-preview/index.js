import React from "react"
import Block from "./block"
import CenteredBlock from "../centered-block"
import "./styles.scss"

function Preview({ content, defaultPreviewPic }) {
  return (
    <CenteredBlock>
      <div className="preview-block-container">
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
