import React from "react"
import content from "./content"
import "./styles.scss"

export default () => {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: 50,
        flexWrap: "wrap",
      }}
    >
      {content.map(student => {
        return (
          <div
            key={student.name}
            className="student-profile-pic"
            style={{
              borderRadius: "50%",
              width: 150,
              height: 150,
              overflow: "hidden",
              marginRight: 30,
            }}
          >
            <img
              src={student.pic}
              style={{
                width: "100%",
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
