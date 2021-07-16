import React from "react";
import "../data.json";
import { Link } from "react-router-dom";

function ArticleDetails(props) {
  const { id, title, author, img, desc, tags } = props;
  return (
    <div className="ArticleDetails">
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/img/${img}`}
          width="40%"
          height="40%"
          alt="Article"
        />
      </Link>
      <h1>
        {title}
      </h1>
      <h3>by {author}</h3>
      <p>{desc}</p>
      <p>Tags: {tags}</p>
    </div>
  );
}

export default ArticleDetails;
