import React from "react";
import data from "../data.json";
import "./Article.css";

function Article(props) {
  const { id } = props.match.params // Location index
  const { title, author, img, body, tags } = data[id]
  console.log(data);

  return (
    <div className="Article">
      <h1>{title}</h1>
      <h4>by {author}</h4>
      <img
        src={`${process.env.PUBLIC_URL}/img/${img}`}
        width="60%"
        height="60%"
        alt="Article"
      />
      <p>{body}</p>
      <h2>Tags</h2><div className="tags">{tags[0]} {tags[1]} {tags[2]}</div>
    </div>
  );
}

export default Article