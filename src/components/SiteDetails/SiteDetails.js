import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SingleMap from "../Map/SingleMap/SingleMap";
import apiUrl from "../../apiConfig";

const SiteDetails = (props) => {
  const [site, setSite] = useState(null);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios(
          `${apiUrl}/sites/${props.match.params.id}`
        );
        setSite(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  if (site) {
    let tools = site.tools;
    const toolsList = tools.map((el) => {
      return (
        <Link to={`/tools/${el.id}`}>
          <div className="listing">
            <h3>{el.name}</h3>
          </div>
        </Link>
      );
    });

    return (
      <div>
        <h1>{site.name}</h1>
        <SingleMap lat={site.lat} lng={site.lng} />
        <div className="details">
          <h2>{site.address}</h2>
          <h3>Project Manager: {site.manager}</h3>
          <h4>Property Contact: {site.contact}</h4>
          <h2>Tools at this location:</h2>
          <div className="list">{toolsList}</div>
          <Link to="/sites">
            <h3>Back to All Sites</h3>
          </Link>
        </div>
      </div>
    );
  } else {
    return <p>Loading site info...</p>;
  }
};

export default SiteDetails;
