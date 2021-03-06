import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import SiteDetails from "./components/SiteDetails/SiteDetails";
import Sites from "./components/Sites/Sites";
import Tools from "./components/Tools/Tools";
import Profile from "./components/Profile/Profile";
import ToolDetails from "./components/ToolDetails/ToolDetails";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import About from "./components/About/About";
import axios from "axios";
import apiUrl from "./apiConfig";
import Home from "./components/Home/Home";

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
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      axios
        .get(`${apiUrl}/logged_in`, { withCredentials: true })
        .then((response) => {
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
        <Link to="/home">
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
            {user ? (
              <>
                <Link to="/sites" onClick={handleClickNav}>
                  Site Dashboard
                </Link>
                <Link to="/tools" onClick={handleClickNav}>
                  Tool List
                </Link>{" "}
              </>
            ) : null}
            <Link to="/profile" onClick={handleClickNav}>
              My Profile
            </Link>
            <Link to="/login" onClick={handleClickNav}>
              Login
            </Link>
            <Link to="/register" onClick={handleClickNav}>
              Register
            </Link>
            <Link to="/about" onClick={handleClickNav}>
              About Tooli
            </Link>
          </nav>
        )}
      </header>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              isLoggedIn={isLoggedIn}
              handleLogin={handleLogin}
              user={user}
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
        <Route path="/home" component={Home} />
        <Route
          path="/sites/:id"
          render={(props) => (
            <SiteDetails {...props} isLoggedIn={isLoggedIn} user={user} />
          )}
        />
        <Route
          exact
          path="/sites"
          render={(props) => (
            <Sites {...props} isLoggedIn={isLoggedIn} user={user} />
          )}
        />
        <Route
          path="/tools/:id"
          render={(props) => (
            <ToolDetails {...props} isLoggedIn={isLoggedIn} user={user} />
          )}
        />
        <Route
          exact
          path="/tools"
          render={(props) => (
            <Tools {...props} isLoggedIn={isLoggedIn} user={user} />
          )}
        />
        <Route
          path="/profile/:id"
          render={(props) => (
            <UpdateProfile {...props} isLoggedIn={isLoggedIn} user={user} />
          )}
        />
        <Route
          exact
          path="/profile"
          render={(props) => (
            <Profile
              {...props}
              isLoggedIn={isLoggedIn}
              user={user}
              handleLogout={handleLogout}
            />
          )}
        />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
