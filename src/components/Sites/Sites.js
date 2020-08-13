import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Sites.css";
import Map from "../Map/Map";


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

  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  const location = {
    address: '12904 Palms Blvd, Los Angeles, CA 90066',
    lat: '34.00617',
    lng: '-118.44636'
  }

  const sitesArr = siteList.map((el) => {
    return (
      <Link to={`/sites/${el.id}`}>
        <div className="listing">
          <h3>{el.name}</h3>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <Map location={location}/>
      <h1>Sites</h1>
      <div className="list">{sitesArr}</div>
    </div>
  );
};
export default Sites;
