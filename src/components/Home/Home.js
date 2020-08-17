import React from "react";
import {Link} from 'react-router-dom';
import "./Home.css"
 
const Home = () => {
    return (
        <div className="home">
        <h1> Welcome to Tooli!</h1>
        <h3>Your construction inventory management application.</h3>
        <Link to='/login'><button>Login</button></Link>
        <br />
        <Link to='/register'><button>Register</button></Link>
        </div>
    )
}

export default Home;