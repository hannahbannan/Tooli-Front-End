import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Tools.css";
import apiUrl from "../../apiConfig";
import AddTool from "../AddTool/AddTool";

const Tools = (props) => {
  const [toolList, setToolList] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const makeAPICall = async () => {
    try {
      const res = await axios(`${apiUrl}/tools`);
      setToolList(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    makeAPICall();
  }, []);

  const toolsArr = toolList.map((el) => {
    return (
      <Link to={`/tools/${el.id}`}>
        <div className="listing">
          <h3>{el.name}</h3>
        </div>
      </Link>
    );
  });
if (props.user) {
  if (toolList) {
    return (
      <div>
        <h1>Tools</h1>
        <div className="list">{toolsArr}</div>
        {props.user && props.user.isAdmin ? (
          <AddTool user={props.user} makeAPICall={makeAPICall}/>
        ) : null}
      </div>
    );
  } else {
    return <p>Loading tools...</p>;
  }} else {
    return(
    <div className="make-login">
        <h4>Please log in to see your tools.</h4>
        <Link to='/login'><button>Login</button></Link>
      </div>
    )
  }
};
export default Tools;
