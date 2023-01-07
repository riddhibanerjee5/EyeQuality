import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navigationbar from "../Components/Navigationbar";
import { Form, Button, Row, Col, Container, Jumbotron, Image, ProgressBar, Popover, OverlayTrigger} from 'react-bootstrap';
import clearwaterlogo from "../clearwater.jpg";
import water2 from "../water2.mp4";
 
const InfoPage = ()=>{

    const popover1 = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">About</Popover.Header>
          <Popover.Body>
            Matt Hanson is our Scrum Master.
          </Popover.Body>
        </Popover>
      );

      const MattHanson = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
          <Button variant="success">Matt Hanson</Button>
        </OverlayTrigger>
      );

      const popover2 = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">About</Popover.Header>
          <Popover.Body>
            Joseph Hardin is our Team Manager.
          </Popover.Body>
        </Popover>
      );

      const JosephHardin = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover2}>
          <Button variant="success">Joseph Hardin</Button>
        </OverlayTrigger>
      );

      const popover3 = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">About</Popover.Header>
          <Popover.Body>
            Riddhi Banerjee is our Development Team Member.
          </Popover.Body>
        </Popover>
      );

      const RiddhiBanerjee = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover3}>
          <Button variant="success">Riddhi Banerjee</Button>
        </OverlayTrigger>
      );
 
    return (
        <div style={{height:"100vh", width: "100vw"}}>
          <video loop autoPlay muted style={{position: "absolute", objectFit: "cover", zIndex: "-1", width:"100%", height:"100%", display:'block'}}>
            <source src={water2} type="video/mp4"/>
          </video>
          <br></br>
          <h1 style={{position:"relative", textAlign: "center", alignSelf: "center"}}><b>About EyeQuality</b></h1>

            <br></br>

            <div style={{borderWidth:"4px", backgroundColor:'rgba(255, 255, 255, 0.7)', width:"90vw", height:"30vh", borderStyle:"solid", minHeight:"185px", transform:"translate(5%, 1%)"}}>


            <p style={{textAlign:"center", fontSize:"1vw"}}>Florida is the most prominent location for fishing in the world. The plethora of various water bodies attracts tourists from all across the globe - fishermen or not.<br></br> This alone makes the upkeep of water quality in Florida a high priority.
            In today's time, changes to the environment and climate - and in turn, water bodies - are <br></br> becoming more and more frequent and random. This makes it very difficult and unpredictable for people to track changes in their local pond or lake. How can fishermen - <br></br> and
             enjoyers of recreational water use - find the ideal status of water bodies in their area? Enter <b>EyeQuality</b>.</p>

            <p style={{textAlign:"center", fontSize:"1vw", }}><b>EyeQuality</b> is a web-based app that allows users to track the quality of water bodies in their surrounding areas.
            Whether it be a professional fisherman or someone <br></br> who simply enjoys a day on the lake, EyeQuality provides a simple means to find the cleanest water body in the area. A display of water quality statistics such as <br></br>
            dissolved oxygen, pH, turbidity, and more allow users to get a detailed synopsis of their desired water body. These statistics are inputted by authorized surveyors, <br></br>
            meaning the information is always accurate and up-to-date. After using this tool, users will be ecstatic in visiting lakes or ponds with "eye-quality" clear water.</p>

            </div>

            <br></br>
            <br></br>

        <h2 style={{textAlign:"center", color:"black"}}><b>About the Developers</b></h2>
        <br></br>
          <Row>
            <Col class="col-4" align="center"><MattHanson/></Col>
            <Col class="col-4" align="center"><JosephHardin/></Col>
            <Col class="col-4" align="center"><RiddhiBanerjee/></Col>
          </Row>
        </div>
    );
}
 
export default InfoPage;