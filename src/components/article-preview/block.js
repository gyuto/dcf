import React from "react"
import LinesEllipsis from "react-lines-ellipsis"
import "./article-preview.scss"

const Block = ({ content, defaultPreviewPic }) => {
  return (
    <a
      className="article-preview-block"
      style={{
        boxShadow: "0 0 2px 3px #eee",
        borderRadius: "5px",
        borderBottom: "1px solid #ddd",
        overflow: "hidden",
        textDecoration: "none",
        color: "#555",
        marginBottom: 20,
      }}
      href={content.link}
    >
      <div
        style={{
          width: "100%",
          height: 200,
          backgroundImage: `url(${
            content.pic && content.pic.title
              ? content.pic.title
              : defaultPreviewPic
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <h4
        style={{
          marginTop: 20,
          padding: "0 30px",
        }}
      >
        {content.title}
      </h4>
      <div
        style={{
          height: 200,
          padding: "0 30px",
          fontSize: 16,
        }}
      >
        <LinesEllipsis
          text={content.main}
          maxLine={6}
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
    </a>
  )
}

export default Block
