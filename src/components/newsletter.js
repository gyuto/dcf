import React from "react"

export default () => {
  return (
    <div>
      <form className="vr-signup-form" id="vr-signup-form-37383395344721">
        <div className="vr-field">
          <label>First Name</label>
          <input type="text" name="first_name" />
        </div>

        <div className="vr-field">
          <label>Last Name</label>
          <input type="text" name="last_name" />
        </div>
        <div className="vr-field">
          <span className="vr-required">*</span>
          <label>Email Address</label>
          <input type="email" name="email_address" required />
        </div>
        <div className="vr-submit" />
        <div className="vr-notice" />
        <input type="submit" value="Sign Up" />

        {/* </div> */}
      </form>
      {/* <link
        media="all"
        rel="stylesheet"
        type="text/css"
        href="https://marketingsuite.verticalresponse.com/signup_forms/signup_forms.embedded-2.css"
      />
      <script
        type="text/javascript"
        src="https://marketingsuite.verticalresponse.com/signup_forms/signup_forms.embedded-2.js"
      />
      <script type="text/javascript">
        if (typeof VR !== "undefined" && typeof VR.SignupForm !== "undefined")
        {
          new VR.SignupForm({
            id: "37383395344721",
            element: "vr-signup-form-37383395344721",
            endpoint: "https://vr2.verticalresponse.com/se/",
          })
        }
      </script> */}
    </div>
  )
}
