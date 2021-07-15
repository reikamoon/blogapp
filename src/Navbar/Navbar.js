import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <a href="#articles">Articles</a>
        <a href="/">Chatterbox</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Navbar;
