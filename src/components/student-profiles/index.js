import React, { useState } from "react"
import content from "./content"
import Modal from "../modal"
import Profile from "./profile"
import "./styles.scss"

export default ({ count = 0 }) => {
  const [modal, updateModalState] = useState({
    on: false,
    studentIndex: 0,
  })

  return (
    <>
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
      <div
        className="student-profile-container"
        style={{
          justifyContent: count ? "center" : null,
        }}
      >
        {/* Only render the first ${count} student profiles */}
        {(count ? content.slice(0, count) : content).map((student, index) => {
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
    </>
  )
}
