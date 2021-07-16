import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to ="/articles">Articles</Link>
        <Link to ="/">Chatterbox</Link>
        <Link to = "/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
