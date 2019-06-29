import React from "react"
import * as colors from "../../styles/colors"

// TODO-DI this is a perfect place to try out css grid

export default ({ profile }) => {
  const info = profile.info
  const infoKeys = info.filter((i, index) => !(Number(index) % 2))
  const infoValues = info.filter((i, index) => !!(Number(index) % 2))

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
        {infoKeys.map((infoKey, index) => {
          return (
            <div
              key={infoKey + index}
              style={{
                color: "#666",
              }}
            >
              <b>{infoKey}</b>: {infoValues[index]}
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
