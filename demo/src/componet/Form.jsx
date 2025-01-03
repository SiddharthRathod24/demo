import React from "react";
const Form = () => {
  return (
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"></input> <br></br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"></input> <br></br>
      
    </div>
  );
}
export default Form;