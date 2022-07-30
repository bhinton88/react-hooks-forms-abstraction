import React, { useState } from "react";

function Form() {

// abstracted away the need for two state functions into only one   
const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry"
  })

  function handleChange(event) {
    const name = event.target.name // we set name attributes below so that when the input is submitted we can target that specific name 
    const value = event.target.value

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form>
      <input 
        type="text" 
        name="firstName" // giving our form input a name attribute that matches the key in our object will allow us to abstract away two diff naming functions 
        onChange={handleChange} 
        value={formData.firstName} 
      />
      <input 
        type="text" 
        name="lastName"
        onChange={handleChange} 
        value={formData.lastName} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
