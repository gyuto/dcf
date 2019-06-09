import React from "react"
import * as colors from "../../styles/colors"

export default ({ profile }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: 250,
          marginRight: 50,
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            overflow: "hidden",
            borderRadius: "50%",
            marginLeft: 100,
            border: `2px solid #eee`,
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src={profile.pic}
            alt={profile.name}
          />
        </div>
        {profile.notes && (
          <div
            style={{
              textAlign: "right",
              marginTop: 40,
              width: 240,
              marginLeft: 10,
              color: colors.brandSecondary,
            }}
          >
            {profile.notes[0]}
          </div>
        )}
      </div>

      <div
        style={{
          width: 400,
          marginTop: 50,
        }}
      >
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
    </div>
  )
}
