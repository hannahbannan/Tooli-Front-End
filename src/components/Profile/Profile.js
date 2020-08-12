import React from "react";
import axios from "axios";

const Profile = ({ handleLogout, user }) => {



  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        handleLogout();
      })
      .catch((err) => {
        console.log("logout error", err);
      });
  };

  return (
    <div>
      <h1>My Profile</h1>
      <button onClick={() => handleLogoutClick}>Logout</button>
    </div>
  );
};

export default Profile;
