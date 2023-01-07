import React, { useContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Map from "../Components/Map";
import { Form, Row, Col, Button } from "react-bootstrap";

const MapPage = ()=>{
    //lat: 29.6436, lng: -82.3549
    const [location,setLocation]= useState({
        lat:29.6436, long: -82.3549
    });
    const [lat,setLat]=useState(29.6436);
    const [long,setLong]=useState(-82.3549);
    const [loading,setLoading]=useState(false);


    const set = name => {
        return ({ target: { value } }) => {
          setLocation(oldValues => ({...oldValues, [name]: value }));
        }
      };

    const handleSubmit=(event)=>{
        event.preventDefault();
        setLoading(true);
        
        setLat(parseFloat(location.lat));
        setLong(parseFloat(location.long));
        setLoading(false);
        console.log(lat,long);
    }
 
    return (
        <div> 
            
                <Form onSubmit={handleSubmit} style={{ textAlign: 'left'}} >
                <br></br>
                    <Row className="g-2">
                        <Col md>

                            <Form.Group controlId="formBasicNumber">
                                <Form.Label className="form-label-text">Latitude</Form.Label>
                                <Form.Control name="lat" required className="form-label-text" type="number" value={location.lat} onChange={set('lat')}/>
                            </Form.Group>
                        </Col>
                        <Col md>
                                <Form.Group controlId="formBasicNumber">
                                <Form.Label className="form-label-text">Longitude</Form.Label>
                                <Form.Control name="long" required className="form-label-text" type="number" value={location.long} onChange={set('long')}/>
                            </Form.Group>
                        </Col>
                        <Col md>
                            <br></br>
                            <Button className="navbar-button" type="submit">
                                                Set Location
                            </Button>
                            <br></br>
                        </Col>
                    </Row>
                </Form>
                {loading ?<div>Loading ..</div> : <Map lat={lat} long={long}/>}
            <br></br>
        </div>
    );
}
 
export default MapPage;