import React, { useState } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";

const AddSite = ({makeAPICall}) => {
  const [input, setInput] = useState({
    name: "",
    address: "",
    isCurrent: true,
    manager: "",
    contact: "",
    lat: "",
    lng: "",
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    axios
      .post(`${apiUrl}/sites`, {
        site: {
          name: input.name,
          address: input.address,
          isCurrent: true,
          manager: input.manager,
          contact: input.contact,
          lat: input.lat,
          lng: input.lng,
        },
      })
      .then((response) => {
        makeAPICall();
        console.log(response.data);
      })
      .catch((err) => {
        console.log("site add error", err);
      });
    event.preventDefault();
    setInput({
      name: "",
      address: "",
      isCurrent: true,
      manager: "",
      contact: "",
      lat: "",
      lng: "",
    });
  };

  return (
    <div>
      <h1>Add a New Site</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label>Site name</label>
        <input
          type="text"
          value={input.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label>Address</label>
        <input
          type="text"
          value={input.address}
          name="address"
          onChange={handleChange}
        />
        <br />
        <label>Project Manager</label>
        <input
          type="text"
          value={input.manager}
          name="manager"
          onChange={handleChange}
        />
        <br />
        <label>Onsite Contact</label>
        <input
          type="text"
          value={input.contact}
          name="contact"
          onChange={handleChange}
        />
        <br />
        <label>Site Coordinates - Latitude</label>
        <input
          type="text"
          value={input.lat}
          name="lat"
          onChange={handleChange}
        />
        <br />
        <label>Site Coordinates - Longitude</label>
        <input
          type="text"
          value={input.lng}
          name="lng"
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Add Site
        </button>
      </form>
    </div>
  );
};

export default AddSite;
