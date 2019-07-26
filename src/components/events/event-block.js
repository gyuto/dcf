import React from "react"
import moment from "moment-timezone"
import Card from "../card"
import CenteredBlock from "../centered-block"
import * as colors from "../../styles/colors"

const Event = ({ data }) => {
  const startTime = moment(data.startTime.seconds * 1000).tz(
    "America/Los_Angeles"
  )

  return (
    <CenteredBlock>
      <Card padding={20}>
        {/* <div
          style={{
            width: 350,
            height: 430,
            backgroundImage: `url(${data.pic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        /> */}
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
            <>{data.name}</>
          </div>
        </div>
      </Card>
    </CenteredBlock>
  )
}

export default Event
