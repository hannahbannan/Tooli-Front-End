import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapContainer.css";

const MapContainer = (props) => {
  const sites = [
    { lat: 34.006, lng: -118.446 },
    { lat: 34.066, lng: -118.45 },
    { lat: 34.024, lng: -118.5036 },
    { lat: 34.0189, lng: -118.501 },
    { lat: 34.0456, lng: -118.4478 },
  ];

  const displayMarkers = sites.map((el) => {
    return (
      <Marker
        key={el.index}
        position={{
          lat: el.lat,
          lng: el.lng,
        }}
      />
    );
  });

  const mapStyles = {
    width: "50vw",
    height: "50vh",
  };
  return (
    <div className="mappy">
      <Map
        google={props.google}
        zoom={11}
        style={mapStyles}
        initialCenter={{ lat: 34.006, lng: -118.446 }}
      >
        {displayMarkers}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAG8qPjaB7bbE9JEKzfbIWf_2FSwPAxX3E",
})(MapContainer);
