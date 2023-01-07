import React from "react";
import { signInWithGoogle } from "../firebase";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import clearwaterlogo from "../clearwater.jpg";
import water from "../water.mp4";


const LoginPage = ()=>{
 
    return (
        <div>
            <video loop autoPlay muted style={{position: "absolute", objectFit: "cover", zIndex: "-1", width:"100%", height:"100%", display:'block'}}>
                <source src={water} type="video/mp4"/>
            </video>

            <br></br>
            <h1 style={{textAlign:"center", color:"black"}}><b>Login to EyeQuality</b></h1>

                <div style={{borderWidth:"4px", backgroundColor:'rgba(255, 255, 255, 0)', width:"15vw", height:"11.5vh", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)", borderStyle:"solid"}}>

                    <button onClick={signInWithGoogle} style={{borderWidth:"2px", borderColor:'rgba(255,255,255,0)', position:"absolute", display:"flex", justifyContent:"center", margin:"0 auto", fontSize:"24px", borderStyle:"double", backgroundColor:'rgba(255, 255, 255, 0.5)'}}><b>Sign in with Google</b></button>
        
                 </div>

        </div>
       
    );
}

export default LoginPage;
