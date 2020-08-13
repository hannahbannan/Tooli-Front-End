import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Map from "../Map/Map"

const SiteDetails = (props) => {
  const [site, setSite] = useState(null);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios(
          // `http://localhost:3000/api/v1/sites/${props.match.params.id}`
          `http://localhost:3000/sites/${props.match.params.id}`
        );
        setSite(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const location = {
    address: '12904 Palms Blvd, Los Angeles, CA 90066',
    lat: '34.00617',
    lng: '-118.44636'
  }

  if (site) {
    console.log(site.tools);
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
        <Map location={location}/>
        <div className="details">
          <h2>{site.address}</h2>
          <h3>Project Manager: {site.manager}</h3>
          <h4>Property Contact: {site.contact}</h4>
          <h2>Tools at this location:</h2>
          <div className="list">{toolsList}</div>
        </div>
      </div>
    );
  } else {
    return <p>Loading site info...</p>;
  }
};

export default SiteDetails;
