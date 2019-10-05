import React from "react"
import FadeOutBox from "../fade-out-box"
import "./article-preview.scss"

const Block = ({ content, defaultPreviewPic }) => {
  return (
    <div
      className="article-preview-block"
      style={{
        boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
        borderRadius: "5px",
        borderBottom: "1px solid #ddd",
        textDecoration: "none",
        color: "#555",
        marginBottom: 20,
      }}
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
          height: 180,
          padding: "0 30px",
          fontSize: 16,
        }}
      >
        <FadeOutBox>{content.main}</FadeOutBox>
      </div>
      <div
        style={{
          height: 10,
        }}
      />
      <a
        style={{
          marginLeft: 30,
        }}
        href={content.link}
      >
        Read more
      </a>
      <div
        style={{
          height: 30,
        }}
      />
    </div>
  )
}

export default Block
