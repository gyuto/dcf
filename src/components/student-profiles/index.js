import React from "react"
import firebase from "firebase"
import content from "./content"
import Modal from "../modal"
import Profile from "./profile"
import "./styles.scss"

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
    const maybeTryAndPullData = () => {
      const isFirebaseInitialized = !!firebase.apps[0]
      if (isFirebaseInitialized) {
        this.tryAndPullStudentData()
      } else {
        setTimeout(() => {
          maybeTryAndPullData()
        }, 100)
      }
    }
    maybeTryAndPullData()
  }

  tryAndPullStudentData() {
    const db = firebase.firestore()

    db.collection("students")
      .get()
      .then(students => {
        students.forEach(student => {
          const studentProfile = student.data()

          console.log(3030, studentProfile)
        })
      })
  }
  updateModalState = state => {
    this.setState(state)
  }
}

export default StudentProfiles
