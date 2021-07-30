import React from "react";
import "./Comments.css";

function Comments() {
  const date = new Date();
    async function getComments() {
        const path = "/details/:id/comments";
        const res = await fetch(path);
        const json = await res.json();

        const comments = json.comments;
    }
  return (
    <div>
    
    </div>
  );
}

export default Comments;
