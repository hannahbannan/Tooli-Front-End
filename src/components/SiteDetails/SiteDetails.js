import React, { useState, useEffect } from "react";
import axios from "axios";

const SiteDetails = (props) => {
  const [site, setSite] = useState(null);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios(
          `http://localhost:3000/api/v1/sites/${props.match.params.id}`
        );
        setSite(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  console.log(site);

  if (site) {
    return (
      <div>
        <h1>{site.name}</h1>
        <h2>{site.address}</h2>
        <h3>Project Manager: {site.manager}</h3>
        <h4>Property Contact: {site.contact}</h4>
        <h2>Tools at this location:</h2>
      </div>
    );
  } else {
    return <p>Loading site info...</p>;
  }
};

export default SiteDetails;
