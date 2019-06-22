import React from "react"
import * as colors from "../../styles/colors"
import CenteredBlock from "../centered-block"
import Card from "../card"
import "./support-us.scss"
import OneTimeDonation from "./one-time-donation"
import MonthlySupport from "./monthly-supporter"
import Spacer from "../spacer"

const Support = ({ children }) => {
  return (
    <CenteredBlock>
      <div className="support-main">
        <div className="donation-card">
          <Card>
            <h3>Make a one-time donation</h3>
            <OneTimeDonation />
          </Card>
        </div>
        <div className="donation-card">
          <Card>
            <h3>Become a monthly supporter</h3>
            <MonthlySupport />
          </Card>
        </div>
      </div>
    </CenteredBlock>
  )
}

export default Support
