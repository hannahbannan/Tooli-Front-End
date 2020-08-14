import React from "react";
import "./About.css"

const About = () => {
    return (
        <div className="about">
        <h1>Welcome to Tooli.</h1>
        <h4> Tooli is an inventory management application. It tracks where your tools are across different construction sites. By combining users, tools, and sites you are able to know who last updated the tool's location.
        </h4>
        <h4>Tooli can be fully customized for your business, whether it is construction, custodial, medical, apparel, you name it. Any business with an inventory of goods needs a way to track its inventory, and Tooli is it!</h4>
        <h4>Tooli was built on React, Rails, and PostgreSQL.</h4>
        <h3>Want to customize a version of Tooli for your own business? <a href="mailto:bannan.hannah@gmail.com">Contact the developer here.</a></h3>
        <h4>Created by Hannah Bannan, a student at General Assembly.</h4>
        </div>
    )
}

export default About;