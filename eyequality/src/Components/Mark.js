import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Card, Button } from "react-bootstrap";

//IoLocationSharp

const Mark=(props)=>{
    console.log(props);

    const [clicked,setClicked]=useState(false);
    const click=()=>{
        setClicked(!clicked);
    }

    if (!clicked){
        return (<div onClick={click}><IoLocationSharp  size={60} color="blue"/></div>);
    }
    else{
        return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Survey</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Water Quality Stats</Card.Subtitle>
                <Card.Text><strong>PH:</strong> {props.survey.ph}</Card.Text>
                <Card.Text><strong>Turbidity:</strong> {props.survey.turbidity}</Card.Text>
                <Card.Text><strong>Oxygen Level:</strong> {props.survey.oxygenLevel}</Card.Text>
                <Card.Text><strong>Date Recorded:</strong> {props.survey.date}</Card.Text>
                <Button onClick={click}>Close</Button>
            </Card.Body>
        </Card>);
    }

}

export default Mark;