import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./SingleMap.css";

const SingleMap = (props) => {


  const mapStyles = {
    width: "80vw",
    height: "40vh",
    margin: "0 auto",
    position: "center"
  };
  return (
    <div className="mappy">
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: props.lat, lng: props.lng }}
      >
        <Marker position={{ lat: props.lat, lng: props.lng}}/>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAG8qPjaB7bbE9JEKzfbIWf_2FSwPAxX3E",
})(SingleMap);
