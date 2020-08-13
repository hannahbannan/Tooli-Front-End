import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css';
import LocationPin from "./LocationPin/LocationPin"

      const Map = ({ location, zoomLevel }) => {
          console.log(location)
          if (location) {
          return (
        <div className="map">
          <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAG8qPjaB7bbE9JEKzfbIWf_2FSwPAxX3E' }}
              defaultCenter={location}
              defaultZoom={zoomLevel}
            >
              <LocationPin
                lat={location.lat}
                lng={location.lng}
              />
            </GoogleMapReact>
          </div>
        </div>
          )} else {
              return <p>Loading map....</p>
          }
      };
      
      export default Map;