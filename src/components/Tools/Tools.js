import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Tools.css";
import apiUrl from "../../apiConfig";

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
      </div>
    );
  } else {
    return <p>Loading tools...</p>;
  }
};
export default Tools;
