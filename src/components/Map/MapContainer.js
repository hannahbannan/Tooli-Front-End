import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapContainer.css";

const MapContainer = ({ siteList, google }) => {
  const sayHi = (el) => {
    console.log(el.name);
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
    width: "50vw",
    height: "40vh"
  };

  return (
    <div className="mappy">
      <Map
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
