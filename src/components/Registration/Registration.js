import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";
import apiUrl from "../../apiConfig";

const Registration = (props) => {

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    isAdmin: false,
    email: "",
    password: "",
    password_confirmation: "",
  });


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
    axios.post(`${apiUrl}/registrations`, {
        user: {
            firstname: input.firstname,
            lastname: input.lastname,
            isAdmin: false,
            email: input.email,
            password: input.password,
            password_confirmation: input.password_confirmation
        }
    }, 
    { withCredentials: true }
    ).then(response => {
      console.log(response.data)
        if (response.data.user) {
          handleAuth(response.data);
        }
    }).catch(err => {
        console.log("registration error", err)
    })
    event.preventDefault()
}



  return (
    <div>
      <h1>Register for Tooli</h1>
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
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};
export default Registration;
