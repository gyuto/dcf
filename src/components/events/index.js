import React from "react"
import firebase from "firebase"
import Modal from "../modal"
// import Profile from "./profile"
// import "./styles.scss"
import Event from "./event-block"

class Events extends React.Component {
  state = {
    modalOn: false,
    studentIndex: 0,
    events: [],
  }

  render() {
    const { modalOn, studentIndex, events } = this.state
    const { count = 0 } = this.props

    return (
      <div>
        {/* {modalOn && (
          <Modal
            dismissModal={() => {
              this.updateModalState({
                modalOn: false,
              })
            }}
          >
            <Profile profile={events[studentIndex]} />
          </Modal>
        )} */}
        <div
          className="event-container"
          style={{
            justifyContent: count ? "center" : null,
          }}
        >
          {/* Only render the first ${count} events */}
          {(count ? events.slice(0, count) : events).map((event, index) => {
            return <Event data={event} key={event.name} />
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

    db.collection("events")
      .orderBy("startTime", "desc")
      .limit(1)
      .get()
      .then(events => {
        events.forEach(event => {
          const eventData = event.data()
          const events = this.state.events
          events.push(eventData)
          this.setState({
            events,
          })
        })
      })
  }
  updateModalState = state => {
    this.setState(state)
  }
}

export default Events
