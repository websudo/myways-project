import React, { Component } from 'react'
import "./Getstarted.css"
export class Getstarted extends Component {


    onClick = () =>{
        this.props.onClick();
    }

    onSignupClick = () =>{
        this.props.onSignupClick();
    }
    /*<div className="signup-button" onClick={this.onSignupClick}>
                        <p>Sign Up</p>
                    </div>*/
    render() {
        return (
            <div className="signup-back">
                <div className="signup-card">
                    <div className="cross" onClick={this.onClick}>X</div>
                    <div className="signup-title">Sign Up</div>
                    <div className="signup-tag">It's quick and easy</div>
                    <div className="form-first-row"> 
                        <input type="text" id="first" placeholder="First Name"></input>
                        <input type="text" placeholder="Last Name"></input>
                    </div>
                    <div className="form-second-row">
                        <input type="text" placeholder="Email"></input>
                    </div>
                    <div className="form-third-row">
                        <input type="text" placeholder="Password">
                    </input></div>
                    <button className="signup-button-new" onClick={this.onSignupClick}>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default Getstarted
