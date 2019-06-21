import React from "react"
import Spacer from "../spacer"

const MonthlySupport = () => {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input name="cmd" type="hidden" value="_s-xclick" />
      <input name="hosted_button_id" type="hidden" value="C428GVKQ38X22" />
      <table>
        <tbody>
          <tr>
            <td>
              <select name="os0">
                <option value="Dharma Wheel">
                  Dharma Wheel : $30.00 USD - monthly
                </option>
                <option value="Endless Knot">
                  Endless Knot : $15.00 USD - monthly
                </option>
                <option value="Victory Banner">
                  Victory Banner : $50.00 USD - monthly
                </option>
                <option value="Lotus Flower">
                  Lotus Flower : $100.00 USD - monthly
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <input name="currency_code" type="hidden" value="USD" />
      <Spacer height={20} />
      <input
        alt="PayPal - The safer, easier way to pay online!"
        name="submit"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
        type="image"
      />
      <Spacer height={20} />
    </form>
  )
}

export default MonthlySupport
