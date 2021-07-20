import React from "react";
import "./Featured.css";
import "../data.json";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <div>
      <div className="featured">
        <Link to={"/details/0"}>
          <img
            src="img/computer.jpg"
            alt="computer"
            width="55%"
            height="55%"
          ></img>
        </Link>
        <div className="featuredcontent">
          <h1>
            <i class="fas fa-star"></i>Featured Article
            <i class="fas fa-star"></i>
          </h1>
          <Link to={"/details/0"}>
            <h2>Creating Your Own Blog</h2>
          </Link>
          <h4>by reikamoon</h4>
          <p>Step-by-Step How I Created This Blog.</p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
