import React, {useState} from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import SiteDetails from "./components/SiteDetails/SiteDetails";
import Sites from "./components/Sites/Sites";
import Tools from "./components/Tools/Tools"

function App() {

const [isOpen, setIsOpen] = useState(false);

const handleClickNav = () => {
  setIsOpen(!isOpen)
  console.log(isOpen)
}

  return (
    <div className="App">
      <header className="App-header">
      <img className="logo" src="https://res.cloudinary.com/hannahbannan/image/upload/v1597176492/Tooli/Tooli-logo_utgxgj.png" alt="tooli-logo"/>
      {isOpen ? <i class="fas fa-bars" onClick={handleClickNav}></i> :
        <nav className="nav">
          <p onClick={handleClickNav}>X</p>
          <Link to='/sites' onClick={handleClickNav}>Site Dashboard</Link>
          <Link to='/tools' onClick={handleClickNav}>Tool List</Link>
          <Link to='/login' onClick={handleClickNav}>Login</Link>
          <Link to='register' onClick={handleClickNav}>Register</Link>
        </nav>}
      </header>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/sites/:id" component={SiteDetails} />
        <Route path="/sites" component={Sites} />
        <Route path="/tools" component={Tools} />
      </Switch>
    </div>
  );
}

export default App;
