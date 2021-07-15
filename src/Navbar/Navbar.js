import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <a href="#articles">Articles</a>
        <a href="/">Chatterbox</a>
        <Link to = "/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
