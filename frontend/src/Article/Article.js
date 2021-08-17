import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../data.json";
import "./Article.css";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

function Article(props) {
  const { id } = props.match.params // Location index
  const {title, author, img, body, tags, comments } = data[id]
  console.log(tags);

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

      <i className="fas fa-heart"></i> Like //Upvote

      <h2>Tags</h2>
      <div className="tags">
        {tags[0]} {tags[1]} {tags[2]}
      </div>
      <h1> Comments </h1>
      <div className="commentsection">
        <div className="commentform">
          <CommentForm />
        </div>
        <div className="commentslist">
          <Comments comments={comments} key={id} />
        </div>
      </div>
    </div>
  );
}

export default Article