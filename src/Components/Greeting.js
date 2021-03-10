import React, { Component } from 'react'
import "./Greeting.css"
export class Greeting extends Component {


    onClick= () =>{
        this.props.onClick();
    }
    render() {
        return (
            <div>
                <div className="greet-head">
                    Apply and hear back every time
                </div>
                <div className="greet-content">
                Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.
                </div>
                <div className="greet-button" onClick={this.onClick}>
                    <p>Get Started</p>
                </div>
            </div>
        )
    }
}

export default Greeting
