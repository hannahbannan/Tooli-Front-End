import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Sites = (props) => {
  const [siteList, setSiteList] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios("http://localhost:3000/api/v1/sites");
        setSiteList(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const sitesArr = siteList.map((el) => {
    return (
      <Link to={`/sites/${el.id}`}>
        <div className="site-listing">
          <h3>{el.name}</h3>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>Sites</h1>
      {sitesArr}
    </div>
  );
};
export default Sites;
