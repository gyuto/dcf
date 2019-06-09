import React from "react"
import content from "./content"
import "./styles.scss"

export default () => {
  return (
    <div className="student-profile-container">
      {content.map(student => {
        return (
          <div key={student.name} className="student-profile-pic">
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
