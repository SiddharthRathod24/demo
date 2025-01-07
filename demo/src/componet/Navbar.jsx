import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/form"}>Form</Link>
        </li>
      </ul>
      <div className="btn">
        <Link to={"/signin"}>
          <button>Sign In</button>
        </Link>
        <Link to={"/Logout"}></Link>
      </div>
    </nav>
  );
};
export default Navbar;
