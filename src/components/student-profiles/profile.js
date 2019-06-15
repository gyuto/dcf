import React from "react"
import * as colors from "../../styles/colors"

// TODO-DI this is a perfect place to try out css grid

export default ({ profile }) => {
  return (
    <div className="student-profile-modal-main">
      <div className="student-profile-modal-left">
        <div className="student-profile-modal-pic-container">
          <img
            style={{
              width: "100%",
            }}
            src={profile.pic}
            alt={profile.name}
          />
        </div>
        {profile.notes && profile.notes[0] && (
          <div className="student-profile-notes">{profile.notes[0]}</div>
        )}
      </div>

      <div className="student-profile-modal-right">
        <h2
          style={{
            color: colors.brandSecondary,
          }}
        >
          {profile.name}
        </h2>
        {profile.info.map((line, index) => {
          return (
            <div
              key={line[0] + index}
              style={{
                color: "#666",
              }}
            >
              <b>{line[0]}</b>: {line[1]}
            </div>
          )
        })}
      </div>

      {profile.notes && profile.notes[0] && (
        <div className="student-profile-notes-footer">{profile.notes[0]}</div>
      )}
    </div>
  )
}
