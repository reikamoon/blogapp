import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h1>Error!</h1>
      <h3>Something went wrong...</h3>
      <p>
        <Link to="/">
          <button className="btn btn-secondary">Go Home</button>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
