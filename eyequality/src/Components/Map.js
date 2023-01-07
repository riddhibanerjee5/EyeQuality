import React, { useEffect, useState } from 'react';
//import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';
import Mark from './Mark';
import { getAllObjectsNoLimit } from '../firebase';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {

  const [surveys,setSurveys]=useState([]);
  const [loading,setLoading]=useState(true);
  
  const mapStyles = {        
    height: "90vh",
    width: "100%"
    };
  
  var defaultCenter = {
    lat: props.lat, lng: props.long
  };



  useEffect(async()=>{
    setLoading(true);
    defaultCenter = {
        lat: props.lat, lng: props.long
      };
      var surv=await getAllObjectsNoLimit("survey");
      setSurveys(surv);
      setLoading(false);
      
  },[props.lat || props.long])

  console.log(surveys);
  if (loading){
    return(<div>Loading</div>)
  }
  else{
    return (
      <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}    // removed
        center={defaultCenter}
        defaultZoom={13}
      >
        {surveys.map((mark,index)=>(
          <Mark key={index} lat={mark.lat} lng={mark.long} survey={mark} clicked={false}></Mark>
        ))}
      </GoogleMapReact>
    </div>
    );}
}

export default Map;
