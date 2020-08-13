import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Sites.css";
import MapContainer from "../Map/MapContainer"


const Sites = (props) => {
  const [siteList, setSiteList] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios("http://localhost:3000/sites");
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
        <div className="listing">
          <h3>{el.name}</h3>
          <h4>{el.address}</h4>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <MapContainer siteList={siteList}/>
      <br/>
      <h1>Sites</h1>
      <div className="list">{sitesArr}</div>
    </div>
  );
};
export default Sites;
