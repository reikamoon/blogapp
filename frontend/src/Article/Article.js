import React, { useState, useEffect } from "react";

// import data from "../data.json";
import "./Article.css";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

function Article(props) {
  const id = props.match.params.id;
  const [article, setArticle] = useState("");

  // Use Effect is to prevent an infinite loop of getting articles.
  useEffect(() => {
    // Fetch the list of articles from the MongoDB.
    async function getArticle() {
      try {
        const res = await fetch(`/article/${id}`, {
          headers: { accepts: "application/json" },
        });
        const json = await res.json();
        console.log(json);
        return setArticle(json.article);
      } catch (err) {
        return console.log(err);
      }
    }
    // Calls getArticles() on Mount.
    getArticle();
  }, [id]);

  return (
    <div className="Article">
      <h1>{article.title}</h1>
      <h4>by {article.author}</h4>
      <img
        src={`${process.env.PUBLIC_URL}/img/${article.img}`}
        width="60%"
        height="60%"
        alt="Article"
      />
      <p>{article.body}</p>
      <i className="fas fa-heart"></i> Like
      <h2>Tags</h2>
      {/* { tags.map(tag => tag)} */}
      <h1> Comments </h1>
      <div className="commentsection">
        <div className="commentform">
          <CommentForm />
        </div>
        <div className="commentslist">
          <Comments comments={article.comments} />
        </div>
      </div>
    </div>
  );
}

export default Article;
