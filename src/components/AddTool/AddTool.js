
import React, {useState} from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";



const AddTool = ({user}) => {
    console.log(user)

    const [input, setInput] = useState({
      name: "",
      make: "",
      model: "",
      serial: "",
      image: "",
    });
  
  
    const handleChange = event => {
      setInput({
          ...input, 
          [event.target.name]:event.target.value
      });
    }
  
    const handleSubmit = event => {
      axios.post(`${apiUrl}/tools`, {
          tool: {
              name: input.name,
              make: input.make,
              model: input.model,
              serial: input.serial,
              image: input.image,
          }
      }, 
      ).then(response => {
        console.log(response.data)
      }).catch(err => {
          console.log("tool add error", err);
      });
    
      event.preventDefault();
      setInput({
        name: "",
        make: "",
        model: "",
        serial: "",
        image: "",
        site: ""
      })
  }
  
  
    return (
      <div>
        <h1>Add a New Tool</h1>
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
          <label>Serial Number</label>
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
          <button type="submit" onClick={handleSubmit}>Add Tool</button>
        </form>
      </div>
    );
  };

  export default AddTool;