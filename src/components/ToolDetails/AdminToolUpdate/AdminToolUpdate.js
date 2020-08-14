import React, { useState } from "react";
import axios from "axios";

const AdminToolUpdate = (props) => {
  const [input, setInput] = useState({
    name: "",
    make: "",
    model: "",
    serial: "",
    image: "",
  });
  const [isUpdated, setIsUpdated] = useState(false);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3000/tools/${props.match.params.id}`,
      method: "PUT",
      data: input,
    })
      .then(() => setIsUpdated(true))
      .catch(console.error);
    setInput({
      name: "",
      make: "",
      model: "",
      serial: "",
      image: "",
    });
    props.history.push("/tools");
  };

if (!isUpdated) {
  return (
    <div>
      <h1>Update Tool Info</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label>Tool name</label>
        <input
          type="text"
          value={input.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label>Make</label>
        <input
          type="text"
          value={input.make}
          name="make"
          onChange={handleChange}
        />
        <br />
        <label>Model</label>
        <input
          type="text"
          value={input.model}
          name="model"
          onChange={handleChange}
        />
        <br />
        <label>Serial number</label>
        <input
          type="text"
          value={input.serial}
          name="serial"
          onChange={handleChange}
        />
        <br />
        <label>Image URL</label>
        <input
          type="text"
          value={input.image}
          name="image"
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  )} else {
      return (<h4>Thanks for updating!</h4>)
  }
};

export default AdminToolUpdate;
