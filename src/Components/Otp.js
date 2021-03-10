import React, { Component } from 'react'
import "./Otp.css"
export class Otp extends Component {

    onClick = () =>{
        this.props.onClick()
    }

    onOtpClick = () =>{
        this.props.onOtpClick()
    }
    /*<div className="signup-button" onClick={this.onOtpClick}>
                    <p>Enter</p>
                    </div>*/
    render() {
        return (
            <div className="otp-back">
                <div className="otp-card">
                    <div className="back" onClick={this.onClick}><img src="Icon material-arrow_back.png"></img></div>
                    <div className="otp-title">OTP sent!</div>
                    
                    <div className="otp-input">
                        <input type="text" placeholder="Enter your OTP"></input>
                    </div>
                    <div id="otp-text">
                    <p >One time Passcode sent to your email ID- abc@gmail.com</p>
                    </div>
                    
                    
                    <button className="login-button-new" onClick={this.onOtpClick}>Enter</button>
                </div>
            </div>
        )
    }
}

export default Otp
