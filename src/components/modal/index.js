import React from "react"
import "./styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default ({ children, dismissModal }) => {
  return (
    <div className="modal-backdrop" onClick={dismissModal}>
      <div
        className="modal-card"
        onClick={e => {
          e.stopPropagation()
        }}
      >
        {children}
      </div>
      <div className="modal-dismiss-button" onClick={dismissModal}>
        <FontAwesomeIcon size={"1x"} icon={faArrowLeft} />
      </div>
    </div>
  )
}
