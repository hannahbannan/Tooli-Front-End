import React from "react";
import axios from "axios";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((err) => {
        console.log("logout error", err);
      });
  };

  console.log(props.user)

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
      </div>
    );
  } else {
    return (
      <div className="login-redirect">
        <h2>Oops! Looks like you're not logged in.</h2>
        <Link to='/login'><button className="center">Log In</button></Link>
      </div>
    );
  }
};

export default Profile;
