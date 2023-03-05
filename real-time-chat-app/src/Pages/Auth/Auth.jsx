import React from 'react'
import "./Auth.css"
import logo from "../../img/smilelogo.png"

const Auth = () => {
  return (
    <div className="auth">
        <div className="a-left">
            <img src={logo} alt="" />
            <div className="webname">
                <h1>Like, Chat & Share</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>
        <h1>Form</h1>
    </div>
  )
}

export default Auth