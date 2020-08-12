import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Tools = (props) => {
  const [toolList, setToolList] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios("http://localhost:3000/api/v1/tools");
        setToolList(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  console.log(toolList);

  const toolsArr = toolList.map((el) => {
    return (
      <Link to={`/tools/${el.id}`}>
        <div className="tool-listing"></div>
        <h2>{el.name}</h2>
      </Link>
    );
  });

  if (toolList) {
    return (
      <div>
        <h1>Tools</h1>
        {toolsArr}
      </div>
    );
  } else {
    return <p>Loading tools...</p>;
  }
};
export default Tools;
