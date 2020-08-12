import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  console.log(props.isLoggedIn);

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
        "http://localhost:3000/sessions",
        {
          user: {
            email: input.email,
            password: input.password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
          console.log(response.data)
        if (response.data.logged_in) {
          handleAuth(response.data);
        }
      })
      .catch((err) => {
        console.log("registration error", err);
      });
    event.preventDefault();
  };

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
};
export default Login;
