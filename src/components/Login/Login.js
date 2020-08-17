import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import {Link} from "react-router-dom";
import apiUrl from "../../apiConfig";

const Login = (props) => {
  console.log("logged in", props.isLoggedIn);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleAuth = (data) => {
    props.handleLogin(data);
    props.history.push("/sites");
  };

  const handleSubmit = (event) => {
    axios
      .post(
        // "http://localhost:3000/sessions",
        `${apiUrl}/sessions`,
        {
          user: {
            email: input.email,
            password: input.password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.logged_in) {
          handleAuth(response.data);
        } 
      })
      .catch((err) => {
        console.log("registration error", err);
      });
    event.preventDefault();
  };

  if (props.isLoggedIn) {
    return (
      <div>
        <h3> Looks like you're already logged in!</h3>
        <Link to="/profile">
          <h2>Your profile</h2>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <label>Email</label>
          <input
            type="text"
            value={input.email}
            name="email"
            onChange={handleChange}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            value={input.password}
            name="password"
            onChange={handleChange}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
};
export default Login;
