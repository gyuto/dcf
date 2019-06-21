import React from "react"

const OneTimeDonation = () => {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input name="cmd" type="hidden" value="_s-xclick" />
      <input name="hosted_button_id" type="hidden" value="F7WR5DPP4GMXG" />
      <input
        alt="Donate with PayPal button"
        name="submit"
        src="http://mbkinc.org/wp-content/uploads/2017/10/paypal-donate-button-high-quality-png.png"
        type="image"
        width={100}
      />
    </form>
  )
}

export default OneTimeDonation
