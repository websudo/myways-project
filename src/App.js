import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Greeting from "./Components/Greeting"
import Getstarted from "./Components/Getstarted"
import Login from "./Components/Login"
import Otp from "./Components/Otp"
import Success from "./Components/Success"
import {useState} from 'react'
import FadeIn from "./Components/FadeIn"

function App() {

  const [option , setOption] = useState([
    {
      enabled : false 
    }
  ])

  const [logoption , setLogOption] = useState([
    {
      enabled : false 
    }
  ])

  const [ signupoption , setSignupOption ] = useState([
    {
      enabled : false,
    }
  ])

  const [ successoption , setSuccessOption ] = useState([
    {
      enabled : false
    }
  ])
  const onClick = () =>{
    if( logoption.enabled !== true){
    setOption({
      enabled : !option.enabled
    })}

    if( signupoption.enabled === true){
      setSignupOption({
        enabled : false
      })
    }
  }

  const onLogClick = () =>{
    if( option.enabled !== true){
    setLogOption({
      enabled : !logoption.enabled
    })}
  }

  const onSignupClick = () =>{
    setSignupOption({
      enabled : true
    })
    setOption({
      enabled : !option.enabled
    })
  }

  const onOtpClick = () => {

    setSuccessOption({
      enabled : true
    })
    if(signupoption.enabled === true){
      setSignupOption({
        enabled : false
      })
    }
    if(logoption.enabled === true){
      setLogOption({
        enabled : false
      })
    }
    setTimeout( function(){
      setSuccessOption({
        enabled : false
      })
    } , 600)
  }

  
  return (
    <div className="App">
      <Navbar onClick={onClick} onLogClick={onLogClick}/>
      <Greeting onClick={onClick}/>
      {option.enabled && <FadeIn><Getstarted onClick={onClick} onSignupClick={onSignupClick}/></FadeIn> }
      {logoption.enabled && <FadeIn><Login onLogClick={onLogClick} onOtpClick={onOtpClick}/></FadeIn> }
      {signupoption.enabled && <FadeIn delay={100}>< Otp onClick={onClick} onOtpClick={onOtpClick}/></FadeIn>}
      {successoption.enabled && <FadeIn delay={100}>< Success /></FadeIn>}
    </div>
  );
}

export default App;
