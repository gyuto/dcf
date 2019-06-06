import React from "react"
import * as R from "ramda"
import LinesEllipsis from "react-lines-ellipsis"

const Block = ({ content, defaultPreviewPic }) => {
  return (
    <a
      style={{
        width: "30%",
        boxShadow: "0 3px 15px #DDD",
        borderRadius: "5px",
        overflow: "hidden",
        textDecoration: "none",
        color: "#555",
      }}
      href={content.link}
    >
      <div
        style={{
          width: "100%",
          height: 200,
          backgroundImage: `url(${R.pathOr(
            defaultPreviewPic,
            ["pic", "title"],
            content
          )}`,
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
          maxLine={5}
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
    </a>
  )
}

export default Block