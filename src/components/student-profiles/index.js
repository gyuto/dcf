import React, { useState } from "react"
import content from "./content"
import Modal from "../modal"
import Profile from "./profile"
import "./styles.scss"

export default () => {
  const [modal, updateModalState] = useState({
    on: false,
    studentIndex: 0,
  })

  return (
    <div className="student-profile-container">
      {modal.on && (
        <Modal
          dismissModal={() => {
            updateModalState({
              on: false,
            })
          }}
        >
          <Profile profile={content[modal.studentIndex]} />
        </Modal>
      )}
      {content.map((student, index) => {
        return (
          <div
            onClick={() => {
              updateModalState({
                on: true,
                studentIndex: index,
              })
            }}
            key={student.name + index}
            className="student-profile-pic"
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
