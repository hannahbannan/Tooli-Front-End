import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Tools.css";
import apiUrl from "../../apiConfig";
import AddTool from "../AddTool/AddTool";

const Tools = (props) => {
  const [toolList, setToolList] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios(`${apiUrl}/tools`);
        setToolList(res.data);
      } catch (err) {
        console.error(err);
      }
    };
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

  if (toolList) {
    return (
      <div>
        <h1>Tools</h1>
        <div className="list">{toolsArr}</div>
        {props.user && props.user.isAdmin ? <AddTool user={props.user}/> : null}
      </div>
    );
  } else {
    return <p>Loading tools...</p>;
  }
};
export default Tools;
