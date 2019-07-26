import React from "react"
// import moment from "moment-timezone"
import moment from "moment"
import Card from "../card"
import Spacer from "../spacer"
import CenteredBlock from "../centered-block"
import * as colors from "../../styles/colors"

const Event = ({ data }) => {
  const startTime = moment(data.startTime.seconds * 1000)
  const endTime = moment(data.endTime.seconds * 1000)

  return (
    <CenteredBlock>
      <Card padding={20}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#555",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <h3
              style={{
                width: 150,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: 45,
                  color: colors.brandSecondary,
                }}
              >
                {startTime.format("DD")}
              </span>
              <br />
              {startTime.format("MMM")}
            </h3>
            <div>
              <Spacer height={10} />
              <h3>{data.name}</h3>
              <p>
                {startTime.format("ddd")}, {startTime.format("LT")} -{" "}
                {endTime.format("LT")}
              </p>
              <p>{data.address}</p>
            </div>
          </div>

          <a
            style={{
              backgroundImage: `url(${data.pic})`,
              width: 300,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: 0.8,
            }}
            href={data.pic}
            target="_blank"
          />
        </div>
      </Card>
    </CenteredBlock>
  )
}

export default Event
