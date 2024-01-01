import React from 'react'
import { useHistory } from 'react-router-dom'
import "./SignedOutBanner.css"

const SignedOutBanner = () => {
  const history = useHistory()
  return (
    <div className="signed-out-banner" onClick={() => history.push("/signup")}>
      <div className="signed-out-banner-text-div">
        <span>Preview of Melody</span>
        <h2>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</h2>
      </div>
      <div className="signed-out-banner-btn-div">
        <button>Sign up free</button>
      </div>
    </div>
  )
}

export default SignedOutBanner