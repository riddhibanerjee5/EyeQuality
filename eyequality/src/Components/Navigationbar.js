import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { AuthContext } from '../userContext/userContext';
import {app} from '../firebase'
import logo from '../eye.png'

const Navigationbar = () =>{

    const {currentUser}=useContext(AuthContext);
    
    const logOut=()=>{
        app.auth().signOut();
    }

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container style={{ marginLeft: 0, marginRight: 0}}>
                <Navbar.Brand href="/">
                    <img src={logo} alt="EyeQuality Logo" width = "45" height = "30"></img>
                    EyeQuality
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="map">Map</Nav.Link>
                {currentUser ? 
                    <Nav.Link href="survey">Survey</Nav.Link> 
                    :
                    <Nav.Link href="login">Login</Nav.Link>
                }
                <Nav.Link href="info">Info</Nav.Link>
                {currentUser ? 
                    <Button variant="info" onClick={logOut} >Log Out</Button> :""
                }
                </Nav>
                </Container>
            </Navbar>
        </>
    );
}


export default Navigationbar;