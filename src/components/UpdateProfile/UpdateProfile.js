import React, {useState} from "react";
import axios from "axios";
import "./UpdateProfile.css";
import {Redirect} from "react-router-dom";
import apiUrl from "../../apiConfig";

const UpdateProfile = (props) => {
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    
      const [isUpdated, setIsUpdated] = useState(false);
    
      const handleAuth = (data) => {
        props.handleLogin(data);
        props.history.push('/sites')
      }
    
      const handleChange = event => {
        setInput({
            ...input, 
            [event.target.name]:event.target.value
        });
      }
    
      const handleSubmit = event => {
          event.preventDefault();
          axios({
              url: `${apiUrl}/users/${props.match.params.id}`,
              method: "PUT",
              data: input,
          })
          .then(() => setIsUpdated(true))
          .catch(console.error);
          setInput({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password_confirmation: "",
          })
          props.history.push('/sites')
      }
    
      if (isUpdated) {
          return <Redirect to='/login'/>
      }

    return (
        <div>
          <h1>Update Your Profile</h1>
          <form onSubmit={handleSubmit} className="register-form">
            <label>First name</label>
            <input
              type="text"
              value={input.firstname}
              name="firstname"
              onChange={handleChange}
            />
            <br />
            <label>Last name</label>
            <input
              type="text"
              value={input.lastname}
              name="lastname"
              onChange={handleChange}
            />
            <br />
            <label>Email</label>
            <input
              type="text"
              value={input.email}
              name="email"
              onChange={handleChange}
            />
            <br />
            <label>Create A Password</label>
            <input
              type="password"
              value={input.password}
              name="password"
              onChange={handleChange}
            />
            <br />
            <label>Re-type Your Password</label>
            <input
              type="password"
              value={input.password_confirmation}
              name="password_confirmation"
              onChange={handleChange}
            />
            <br />
            <button type="submit" onClick={handleSubmit}>Update</button>
          </form>
        </div>
      );
}

export default UpdateProfile;