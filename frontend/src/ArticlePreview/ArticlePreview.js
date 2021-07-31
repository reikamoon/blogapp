import React from "react";
import { Link } from "react-router-dom";
import './ArticlePreview.css'
import Article from '../Article/Article'
// import Comments from "../Comments/Comments";

function ArticlePreview(props) {
  const id = props.match.id;
  const { title, author, img, desc, tags, comments } = props;
  console.log({props})
  return (
    <div className="ArticleDetails">
      <Link
        to={{
          pathname: `/details/${id}`,
          state: {
            title,
            author,
            img,
            desc,
            tags,
            comments,
          },
        }}
        component={Article}
      >
        <img
          src={`${process.env.PUBLIC_URL}/img/${img}`}
          width="80%"
          height="60%"
          alt="Article"
        />
      </Link>
      <h1>{title}</h1>
      <h3>by {author}</h3>
      <p>{desc}</p>
      <p>
        Tags: {tags[0]}, {tags[1]}
      </p>
    </div>
  );
}

export default ArticlePreview;
