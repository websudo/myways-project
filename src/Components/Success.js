import React, { Component } from 'react'
import "./Success.css"

export class Success extends Component {
    render() {
        return (
            <div className="success-back">
                <div className="success-card">
                    <div className="success-image"> 
                        <img src="Icon awesome-check-circle.png"></img>
                    </div>
                    <div className="success-title"><p>Thanks. Successful!</p></div>
                </div>
            </div>
        )
    }
}

export default Success
