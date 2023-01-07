
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import React, { useState, useCallback, useContext } from 'react';
  import { Form, Button, Row, Col, Container, Jumbotron } from 'react-bootstrap';
  
  import { withRouter, Redirect } from "react-router";
  import { AuthContext } from "../userContext/userContext";
  import { generateObjectDocument } from "../firebase";
  import water2 from "../water2.mp4";
  const SurveyPage = ({history}) => {
  
  
      //hold values for form
      const [survey, setSurvey] = useState({ 
          ph: 0,turbidity: 0, oxygenLevel: 0, latitude: 0, longitude: 0
        });
      
        const set = name => {
          return ({ target: { value } }) => {
            setSurvey(oldValues => ({...oldValues, [name]: value }));
          }
        };
  
  
  
  
        //sign up with firebase
        const handleSubmit = async event => {
          event.preventDefault();
          const ph= parseFloat(survey.ph);
          const lat= parseFloat(survey.latitude);
          const long= parseFloat(survey.longitude);
          const turbidity= parseFloat(survey.turbidity);
          const oxygenLevel= parseFloat(survey.oxygenLevel);
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          var yyyy = today.getFullYear();

          var date = mm + '/' + dd + '/' + yyyy;
          
         
          
          
          
          try {
            await generateObjectDocument("survey",{lat,long,ph,turbidity,oxygenLevel,turbidity,date});
            history.push("/map");
          } catch (error) {
            alert(error);
          }
        };
  
  
        //get current user
        const { currentUser } = useContext(AuthContext);
  
        if (!currentUser) {
          
        return  <Redirect to='/login'  />;;
         
      }
        else{


          //PH
          //oxygen level
          //turbidity
          //temperature
          return (
              <>
              <div className="signup-container" style={{height:"100vh"}}>
              <video loop autoPlay muted style={{position: "absolute", objectFit: "cover", zIndex: "-1", width:"100%", height:"100%", display:'block'}}>
                <source src={water2} type="video/mp4"/>
              </video>
              <br />
                  <Container>
                  <Row>
                          <Col sm={3}></Col>
                          <Col sm={6}  style={{backgroundColor:'rgba(255, 255, 255, 0.5)', borderStyle:"solid", borderColor:"black", borderWidth:"4px", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
                              <br></br><br></br>
                              <h1 style={{textAlign: "center"}}>Input Your Survey Results Below.</h1>
  
                              <Form onSubmit={handleSubmit} style={{ textAlign: 'left'}} >
  
  
                                  <Form.Group controlId="formBasicNumber">
                                      <Form.Label className="form-label-text">PH</Form.Label>
                                      <Form.Control name="ph" required className="form-label-text" type="number" placeholder="PH Value" value={survey.ph} onChange={set('ph')}/>
                                  </Form.Group>
                                  <Form.Group controlId="formBasicNumber">
                                      <Form.Label className="form-label-text">Turbidity</Form.Label>
                                      <Form.Control name="turbidity" required className="form-label-text" type="number" placeholder="Turbidity Value" value={survey.turbidity} onChange={set('turbidity')}/>
                                  </Form.Group>
                                  <Form.Group controlId="formBasicNumber">
                                      <Form.Label className="form-label-text">Oxygen Level</Form.Label>
                                      <Form.Control name="oxygenLevel" required className="form-label-text" type="number" placeholder="Oxygen Level" value={survey.oxygenLevel} onChange={set('oxygenLevel')}/>
                                  </Form.Group>
                                  
                                
                                  <Form.Group controlId="formBasicNumber">
                                      <Form.Label className="form-label-text">Longitude</Form.Label>
                                      <Form.Control name="longitude" required className="form-label-text" type="number" placeholder="longitude" value={survey.longitude} onChange={set('longitude')}/>
                                  </Form.Group>
                                  <Form.Group controlId="formBasicNumber">
                                      <Form.Label className="form-label-text">Latitude</Form.Label>
                                      <Form.Control name="latitude" required className="form-label-text" type="number" placeholder="longitude" value={survey.latitude} onChange={set('latitude')}/>
                                  </Form.Group>
  
                            
                                  <br></br>
                                  <button className="navbar-button" type="submit" style={{borderWidth:"3px", borderStyle:"solid", borderColor:"black"}}>
                                      Submit Results
                                  </button>
                                  <br></br><br></br>
                              </Form>
                          </Col>
                          <Col sm={3}></Col>
                      </Row>
                  </Container>
              </div>
              </>
          );}
  }
 
export default SurveyPage;