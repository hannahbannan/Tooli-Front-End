import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./MapContainer.css";

const MapContainer = ({ siteList, google }) => {
  const sayHi = (el) => {
    console.log(el.name)
    return <InfoWindow>{el.name}</InfoWindow>
  };

  const displayMarkers = siteList.map((el) => {
    return (
      <Marker
        onMouseover={sayHi}
        name={el.name}
        key={el.index}
        position={{
          lat: el.lat,
          lng: el.lng
        }}
      />
    );
  });


  const mapStyles = {
    width: "80vw",
    height: "40vh",
    margin: "0 auto",
    position: "center"
  };

  return (
    <div className="mappy">
      <Map className="mappy-2"
        google={google}
        zoom={11}
        style={mapStyles}
        initialCenter={{ lat: 34.0378, lng: -118.454 }}
      >
        {displayMarkers}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAG8qPjaB7bbE9JEKzfbIWf_2FSwPAxX3E",
})(MapContainer);
