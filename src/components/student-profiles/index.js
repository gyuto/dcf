import React from "react"
import content from "./content"
import Modal from "../modal"
import Profile from "./profile"
import "./styles.scss"
import initFirestore from "../../lib/firebase"

const bs = async () => {
  // if not init yet. init it.
  await initFirestore()
}
class StudentProfiles extends React.Component {
  state = {
    modalOn: false,
    studentIndex: 0,
  }

  render() {
    const { modalOn, studentIndex } = this.state
    const { count = 0 } = this.props

    return (
      <div>
        {modalOn && (
          <Modal
            dismissModal={() => {
              this.updateModalState({
                modalOn: false,
              })
            }}
          >
            <Profile profile={content[studentIndex]} />
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
                  this.updateModalState({
                    modalOn: true,
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
      </div>
    )
  }

  componentDidMount() {
    bs()
  }

  updateModalState = state => {
    this.setState(state)
  }
}

export default StudentProfiles
