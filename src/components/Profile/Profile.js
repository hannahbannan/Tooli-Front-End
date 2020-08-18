import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";
import { Link } from "react-router-dom";
import apiUrl from "../../apiConfig";

const Profile = (props) => {
  const handleLogoutClick = () => {
    axios
      .delete(`${apiUrl}/logout`, { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((err) => {
        console.log("logout error", err);
      });
  };

  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
    userAddress: null,
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);

    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const getCoordinates = (position) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  };

  const handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("You denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is currently unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  };


  if (props.user) {
    return (
      <div>
        <h1>My Profile</h1>
        <div className="details">
          <h2>
            {props.user.firstname} {props.user.lastname}
          </h2>
          <h3>{props.user.email}</h3>
          {props.user.isAdmin ? (
            <h3>Account type: Admin</h3>
          ) : (
            <h3>Account type: Crew</h3>
          )}
          <div className="multi-button">
            <Link to={`/profile/${props.user.id}`}>
              <button>Update Profile</button>
            </Link>
            <button onClick={handleLogoutClick}>Logout</button>
          </div>
        </div>
        <div className="location">
          <h2>Geolocation</h2>
          <button onClick={getLocation}>Get Coordinates</button>
          <h4>Latitude: {location.latitude}</h4>
          <h4>Longitude: {location.longitude}</h4>
          {location.latitude ? <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=15&size=400x300&sensor=false&markers=color:red%7C${location.latitude},${location.longitude}&key=AIzaSyAG8qPjaB7bbE9JEKzfbIWf_2FSwPAxX3E`} alt='map'/>:null}
        </div>
      </div>
    );
  } else {
    return (
      <div className="login-redirect">
        <h2>Oops! Looks like you're not logged in.</h2>
        <Link to="/login">
          <button className="center">Log In</button>
        </Link>
      </div>
    );
  }
};

export default Profile;
