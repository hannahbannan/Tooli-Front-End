import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ToolDetails.css";
import { Link } from "react-router-dom";

const ToolDetails = (props) => {
  const [tool, setTool] = useState(null);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios(
          `http://localhost:3000/tools/${props.match.params.id}`
        );
        setTool(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);


  if (tool) {
    let activeSite = tool.sites[0];
  
    return (
      <div>
        <h1>{tool.name}</h1>
        <div className="details">
          <img src={tool.image} alt="{tool.name}" className="tool-img" />
          <Link to={`/sites/${activeSite.id}`}>
            <h3>Location: {activeSite.name}</h3>
          </Link>
          <h3>Make: {tool.make}</h3>
          <h3>Model: {tool.model}</h3>
          <h3>Serial Number: {tool.serial}</h3>
        </div>
      </div>
    );
  } else {
    return <p>Loading tool details...</p>;
  }
};

export default ToolDetails;
