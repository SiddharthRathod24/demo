import React from "react";
 
 const Signin = () => {
    return (
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"></input> <br></br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"></input> <br></br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"></input> <br></br>
            <button>Sign In</button>

        </div>
    );
     }
    export default Signin;