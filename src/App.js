import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import SiteDetails from "./components/SiteDetails/SiteDetails";
import Sites from "./components/Sites/Sites";
import Tools from "./components/Tools/Tools";
import Profile from "./components/Profile/Profile";
import ToolDetails from "./components/ToolDetails/ToolDetails";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleClickNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
    console.log("You're logged in!");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    console.log("You're logged out!");
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      axios
        .get("http://localhost:3000/logged_in", { withCredentials: true })
        .then((response) => {
          console.log("logged in?", response.data);
          if (response.data.logged_in && !isLoggedIn) {
            setIsLoggedIn(true);
            setUser(response.data.user);
          } else if (!response.data.logged_in && isLoggedIn) {
            setIsLoggedIn(false);
            setUser(null);
          }
        })
        .catch((err) => {
          console.log("login error", err);
        });
    };
    checkLoginStatus();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Link to='/sites'>
        <img
          className="logo"
          src="https://res.cloudinary.com/hannahbannan/image/upload/v1597176492/Tooli/Tooli-logo_utgxgj.png"
          alt="tooli-logo"
        />
        </Link>
        {isOpen ? (
          <i className="fas fa-bars" onClick={handleClickNav}></i>
        ) : (
          <nav className="nav">
            <p onClick={handleClickNav}>X</p>
            <Link to="/sites" onClick={handleClickNav}>
              Site Dashboard
            </Link>
            <Link to="/tools" onClick={handleClickNav}>
              Tool List
            </Link>
            <Link to="/profile" onClick={handleClickNav}>
              My Profile
            </Link>
            <Link to="/login" onClick={handleClickNav}>
              Login
            </Link>
            <Link to="register" onClick={handleClickNav}>
              Register
            </Link>
          </nav>
        )}
      </header>
      <Switch>
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              isLoggedIn={isLoggedIn}
              handleLogin={handleLogin}
            />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Registration
              {...props}
              isLoggedIn={isLoggedIn}
              handleLogin={handleLogin}
            />
          )}
        />
        <Route
          path="/sites/:id"
          render={(props) => <SiteDetails {...props} isLoggedIn={isLoggedIn} user={user} />}
        />
        <Route
          exact path="/sites"
          render={(props) => <Sites {...props} isLoggedIn={isLoggedIn} user={user} />}
        />
        <Route
          path="/tools/:id"
          render={(props) => <ToolDetails {...props} isLoggedIn={isLoggedIn} user={user}/>}
        />
        <Route
          exact path="/tools"
          render={(props) => <Tools {...props} isLoggedIn={isLoggedIn} user={user}/>}
        />
        <Route
          path="/profile/:id"
          render={(props) => (
            <UpdateProfile
              {...props}
              isLoggedIn={isLoggedIn}
              user={user}
              handleLogout={handleLogout}
            />
          )}
        />
        <Route
          exact path="/profile"
          render={(props) => (
            <Profile
              {...props}
              isLoggedIn={isLoggedIn}
              user={user}
              handleLogout={handleLogout}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
