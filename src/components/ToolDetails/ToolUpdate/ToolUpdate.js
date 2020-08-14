import React, { useState, useEffect } from "react";
import axios from "axios";

const ToolUpdate = ({ tool, user }) => {
  const [siteId, setSiteId] = useState({ value: null });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [siteList, setSiteList] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios("http://localhost:3000/sites");
        setSiteList(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const optionArr = siteList.map((el) => {
    return <option value={el.id}>{el.name}</option>;
  });

  const handleChange = (event) => {
    setSiteId({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/logs", {
        log: {
          user_id: user.id,
          tool_id: tool.id,
          site_id: siteId.value,
        },
      })
      .then((response) => {
        console.log("created log");
      })
      .catch((err) => {
        console.error(err);
      });

    setIsSubmitted(true);
  };

  if (user) {
    return (
      <div>
        {isSubmitted ? null : (
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <select value={siteId}>{optionArr}</select>
            <br />
            <button>Update location</button>
          </form>
        )}
      </div>
    );
  } else {
    return <h4>You must login before you update this tool's location.</h4>;
  }
};

export default ToolUpdate;
