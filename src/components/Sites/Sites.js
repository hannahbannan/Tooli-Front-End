import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Sites.css";
import MapContainer from "../Map/MapContainer";
import AddSite from "../AddSite/AddSite";
import apiUrl from "../../apiConfig";

const Sites = (props) => {
  const [siteList, setSiteList] = useState([]);

  const makeAPICall = async () => {
    try {
      const res = await axios(`${apiUrl}/sites`);
      setSiteList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
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

  if (props.user) {
    return (
      <div className="sites">
        <br />
        <h1>Sites</h1>
        <div className="list">{sitesArr}</div>
        {props.user && props.user.isAdmin ? (
          <AddSite makeAPICall={makeAPICall} />
        ) : null}
        <br />
        <br />
         <MapContainer siteList={siteList} />
      </div>
    );
  } else {
    return (
      <div className="make-login">
        <h4>Please log in to see your site dashboard.</h4>
        <Link to='/login'><button>Login</button></Link>
      </div>
    );
  }
};
export default Sites;
