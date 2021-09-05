import React from "react";
import "./Comments.css";

function Comments(props) {
  const { comments } = props;
  return (
    <div>
        {comments !== undefined ? comments.map((comment, i) => {
          return (
            <div className="comment" key={i}>
              <p>Created at: {comment.createdAt}</p>
              <h4>{comment.name}:</h4><p> {comment.comment}</p>
            </div>
          );
        }) : ''}
    </div>
  );
}

export default Comments;
