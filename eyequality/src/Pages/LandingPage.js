import React from "react";
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap';
import { signInWithGoogle } from "../firebase";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import water from "../water.mp4";

const LandingPage = ()=>{
 
    
    return (
        <div style={{height:"100vh", width: "100vw"}}>
            <video loop autoPlay muted style={{position: "absolute", objectFit: "cover", zIndex: "-1", width:"100%", height:"100%", display:'block'}}>
                <source src={water} type="video/mp4"/>
            </video>
            <div style={{alignItems:"center", justifyContent:"center", borderWidth:"4px", backgroundColor:'rgba(255, 255, 255, 0.7)', width:"30vw", height:"10vh", borderStyle:"solid", minHeight:"185px", transform:"translate(120%, 100%)"}}>
                <h1 style={{textAlign: "center", fontSize:"2vw"}}>Welcome to EyeQuality.</h1>   
                <br></br>
                <a href= "/map" style={{display: "flex", justifyContent: "center", fontSize:"1vw", textDecoration:"none"}}>
                    <button style={{borderWidth:"3px", borderStyle:"solid", borderColor:"black"}}>View Map</button>
                </a>
                <br></br>
                <button onClick={signInWithGoogle} style={{borderWidth:"3px", borderColor:"black", display: "flex", justifyContent: "center", margin: "0 auto", fontSize:"1vw", borderStyle:"solid"}}>Login as Surveyor</button>
            </div>
        </div>
    );
}
 
export default LandingPage;
