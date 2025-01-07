import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="container">
      <div className="signin">
        <form className="login-form">
          <h2>Sign in</h2>
          <div className="input-field">
            <label>User Name</label>
            <input
              type="text"
              placeholder="Enter your user name "
              required
            ></input>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your user password"
              required
            ></input>
          </div>
          <div className="btn">
            <Link to ="/navbar">
            <button type="submit">Sign in</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
