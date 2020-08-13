import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ToolDetails.css";
import { Link } from "react-router-dom";
import SingleMap from "../Map/SingleMap/SingleMap";

const ToolDetails = (props) => {
  const [tool, setTool] = useState(null);
  const [loggerF, setLoggerF] = useState(null);
  const [loggerL, setLoggerL] = useState(null);

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
    let activeLog = tool.logs[0];
    console.log(activeLog);

    const findLogger = async () => {
      try {
        const res = await axios(
          `http://localhost:3000/users/${activeLog.user_id}`
        );
        console.log(res.data);
        setLoggerF(res.data.firstname);
        setLoggerL(res.data.lastname);
      } catch (err) {
        console.error(err);
      }
    };

    if (activeLog) {
      findLogger();
    }

    return (
      <div>
        <h1>{tool.name}</h1>
        <div className="details">
          <img src={tool.image} alt="{tool.name}" className="tool-img" />

          <h3>
            Location:{" "}
            <Link to={`/sites/${activeSite.id}`}>{activeSite.name}</Link>
          </h3>

          <h3>
            Last logged by: {loggerF} {loggerL}
          </h3>
          <h3>Make: {tool.make}</h3>
          <h3>Model: {tool.model}</h3>
          <h3>Serial Number: {tool.serial}</h3>
          <Link to="/tools">
            <h3>Back to All Tools</h3>
          </Link>
          <SingleMap lat={activeSite.lat} lng={activeSite.lng} />
        </div>
      </div>
    );
  } else {
    return <p>Loading tool details...</p>;
  }
};

export default ToolDetails;
