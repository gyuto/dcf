import React from "react"
import * as colors from "../../styles/colors"
import CenteredBlock from "../centered-block"
import "./address.scss"

export default () => {
  return (
    <div
      style={{
        backgroundColor: colors.brand,
        color: colors.white,
      }}
    >
      <CenteredBlock>
        <div className="address-block">
          <p>
            5600 Sutter Avenue
            <br />
            Richmond, CA 94804, USA
          </p>
          <p>(510) 926-3050</p>
          <p>office@delekcf.org</p>
        </div>
      </CenteredBlock>
    </div>
  )
}
