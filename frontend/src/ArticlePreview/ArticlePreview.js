import React from "react";
import { Link } from "react-router-dom";
import './ArticlePreview.css'
import Article from '../Article/Article'

function ArticlePreview(props) {
  const { id, title, author, img, desc, tags } = props;
  return (
    <div className="ArticleDetails">
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/img/${img}`}
          width="80%"
          height="60%"
          alt="Article"
        />
      </Link>
      <Link to={`/details/${id}`}>
        <h1>{title}</h1>
      </Link>
      <h3>by {author}</h3>
      <p>{desc}</p>
      <p>
        Tags: {tags[0]}, {tags[1]}
      </p>
    </div>
  );
}

export default ArticlePreview;
