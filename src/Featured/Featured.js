import React from "react";
import "./Featured.css";

function Featured() {
  return (
    <div>
      <div className="featured">
        <img
          src="img/computer.jpg"
          alt="computer"
          width="55%"
          height="55%"
        ></img>
        <div className="featuredcontent">
          <h1>
            <i class="fas fa-star"></i>Featured Article
            <i class="fas fa-star"></i>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Featured;
