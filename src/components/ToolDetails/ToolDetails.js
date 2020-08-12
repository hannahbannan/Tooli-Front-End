import React, { useState, useEffect } from "react";
import axios from "axios";

const ToolDetails = (props) => {

    const [tool, setTool] = useState(null);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios(
          `http://localhost:3000/api/v1/tools/${props.match.params.id}`
        );
        setTool(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  console.log(tool);


if (tool) {
    return (
        <div>
        <h1>{tool.name}</h1>
        <img src={tool.image} alt="{tool.name}"/>
        <h2>Make: {tool.make}</h2>
        <h3>Model: {tool.model}</h3>
        <p>Serial Number: {tool.serial}</p>
        </div>
    )
} else {
    return <p>Loading tool details...</p>
}
}

export default ToolDetails;