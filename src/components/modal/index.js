import React from "react"
import "./styles.scss"

export default ({ children, dismissModal }) => {
  return (
    <div className="modal-backdrop" onClick={dismissModal}>
      <div className="modal-card">{children}</div>
    </div>
  )
}
