import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./MapContainer.css";

const MapContainer = ({ siteList, google, location }) => {
  

  const displayMarkers = siteList.map((el) => {
    return (
      <Marker
        name={el.name}
        key={el.index}
        position={{
          lat: el.lat,
          lng: el.lng
        }}
        icon={{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}
      />
    );
  });

  console.log(location)


  

  const mapStyles = {
    width: "80vw",
    height: "40vh",
    margin: "0 auto",
    position: "center"
  };

  return (
    <div className="mappy">
      <Map 
        google={google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 34.0378, lng: -118.454 }}
      >
        {displayMarkers}
        <Marker position={{lat: location.latitude, lng: location.longitude}} icon={{url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}}/>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAG8qPjaB7bbE9JEKzfbIWf_2FSwPAxX3E",
})(MapContainer);
