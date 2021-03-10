import React, { Component } from 'react'
import "./Login.css"
export class Login extends Component {


    onClick = () =>{
        this.props.onLogClick();
    }

    onOtpClick = () =>{
        this.props.onOtpClick()
    }
    render() {
        return (
            <div className="login-back">
                <div className="login-card">
                    <div className="login-title">
                    <div className="login-text">Login</div>
                    <div className="login-cross" onClick={this.onClick}> X</div>
                    </div>
                    <div className="student-tab">
                        <div className="student-title">
                            <div className="student-text">Student</div>
                        </div>
                            <div className="student-form-first">
                            <input type="text" placeholder="Email"></input>
                            </div>
                            <div className="student-form-second">
                            <input type="text" placeholder="Password"></input>
                            </div>
                            <div className="forget-text">Forgot Password?</div>
                            
                            <button className="login-button-new" onClick={this.onOtpClick}>Login</button>
                            <div className="newsignup">New to MyWays? Sign Up here</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
