import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ToolDetails.css";
import { Link } from "react-router-dom";
import SingleMap from "../Map/SingleMap/SingleMap";
import ToolUpdate from "./ToolUpdate/ToolUpdate";
import AdminToolUpdate from "./AdminToolUpdate/AdminToolUpdate";
import apiUrl from "../../apiConfig";

const ToolDetails = (props) => {
  const [tool, setTool] = useState(null);
  const [loggerF, setLoggerF] = useState(null);
  const [loggerL, setLoggerL] = useState(null);
  const [updateBox, setUpdateBox] = useState(false);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios(
          `${apiUrl}/tools/${props.match.params.id}`
        );
        setTool(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);


  if (tool) {


    console.log(tool)
    if (!tool.logs[0]) {
      const openUpdateBox = () => {
        setUpdateBox(true);
      };
  return (
  <div>
          <h1>{tool.name}</h1>
          <div className="details">
            <img src={tool.image} alt="{tool.name}" className="tool-img" />
            <button onClick={openUpdateBox}>Update tool location</button>
            {updateBox ? <ToolUpdate tool={tool} user={props.user} /> : null}
            <h3>
              Last logged by: {loggerF} {loggerL}
            </h3>
            <h3>Make: {tool.make}</h3>
            <h3>Model: {tool.model}</h3>
            <h3>Serial Number: {tool.serial}</h3>
            <Link to="/tools">
              <h3>Back to All Tools</h3>
            </Link>
            {props.user && props.user.isAdmin ? <AdminToolUpdate/> : null}
          </div>
        </div>)
    }
    else {
    let activeSite = tool.sites[tool.sites.length-1];
    let activeLog = tool.logs[tool.logs.length-1];

    const deleteTool = async () => {
      await axios.delete(`${apiUrl}/tools/${props.match.params.id}`);
      console.log('deleted!');
      props.history.push('/tools')
    }


    const findLogger = async () => {
      try {
        const res = await axios(
          `${apiUrl}/users/${activeLog.user_id}`
        );
        setLoggerF(res.data.firstname);
        setLoggerL(res.data.lastname);
      } catch (err) {
        console.error(err);
      }
    };

    if (activeLog) {
      findLogger();
    }

    const openUpdateBox = () => {
      setUpdateBox(true);
    };


    return (
      <div>
        <h1>{tool.name}</h1>
        <div className="details">
          <img src={tool.image} alt="{tool.name}" className="tool-img" />

          <h3>
            Location:{" "}
            <Link to={`/sites/${activeSite.id}`}>{activeSite.name}</Link>
          </h3>
          <button onClick={openUpdateBox}>Update tool location</button>
          {updateBox ? <ToolUpdate tool={tool} user={props.user} /> : null}
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
          {props.user && props.user.isAdmin ? <AdminToolUpdate/> : null}
          {props.user && props.user.isAdmin ? <button onClick={deleteTool}>Delete This Tool</button> : null}
        </div>
      </div>
    );
  }} else {
    return <p>Loading tool details...</p>;
  }
};

export default ToolDetails;
