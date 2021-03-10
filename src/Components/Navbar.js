import React, { Component } from 'react'
import './Navbar.css'
export class Navbar extends Component {
    
    
    handleClick = () => {
        console.log("CLicked")
        if(document.querySelector(".dropdown-off") ){
            document.querySelector(".dropdown-off").setAttribute("class","dropdown-on");
        }
        else {
            document.querySelector(".dropdown-on").setAttribute("class","dropdown-off");
        }

    }



    onClick = () =>{
        this.props.onClick()
    }
    onLogClick = () =>{
        this.props.onLogClick()
    }

    onHamClick = () =>{
        if(document.querySelector(".hamburger-menu-off")){
            document.querySelector(".hamburger-menu-off").setAttribute("class","hamburger-menu-on")
        }
        else{
            document.querySelector(".hamburger-menu-on").setAttribute("class","hamburger-menu-off")
        }
    }

   
    render() {

        return (
            <div className="nav-bar">
                <div className="hamburger-icon" onClick={this.onHamClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="hamburger-menu hamburger-menu-off">
                <div className="ele path " >For You <img src="Path 2.png" onClick={this.handleClick}></img>
                        <div className="dropdown-off">
                            <a href="#">Find matching internships</a><br></br>
                            <a href="#">Hire right talent</a><br></br>
                            <a href="#">Work from Home</a><br></br>
                        </div>
                </div>
                <div className="ele instant "> 
                    <div className="image">
                            <img src="Instant logo.png"></img>
                        </div>
                        <div className="text">Instant Apply</div> 
                </div>
                <div className="ele ">Pricing</div>
                <div className="ele ">About Us</div>
                </div>
                <div id="logo"><img src='./MyWays Logo@2x.png'></img></div>
                
                    <div className="ele path hamburger-list" >For You <img src="Path 2.png" onClick={this.handleClick}></img>
                        <div className="dropdown-off">
                            <a href="#">Find matching internships</a><br></br>
                            <a href="#">Hire right talent</a><br></br>
                            <a href="#">Work from Home</a><br></br>
                        </div>
                    </div>
                    <div className="ele instant hamburger-list"> 
                    <div className="image">
                            <img src="Instant logo.png"></img>
                        </div>
                        <div className="text">Instant Apply</div> 
                    </div>
                    <div className="ele hamburger-list">Pricing</div>
                    <div className="ele hamburger-list">About Us</div>
               
                <div className="ele signup " onClick={this.onClick}>SIGN UP</div>
                <div className="ele login" onClick={this.onLogClick}><p>LOGIN</p></div>
             
                            
            </div>
        )
    }
}

export default Navbar
