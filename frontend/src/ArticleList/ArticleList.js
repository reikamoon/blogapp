import React from "react";
import { useEffect, useState } from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import "./ArticleList.css";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  // Use Effect is to prevent an infinite loop of getting articles.
  useEffect(() => {
    // Fetch the list of articles from the MongoDB.
    async function getArticles() {
      try {
        const res = await fetch("/all", {
          headers: { accepts: "application/json" }
        });
        const json = await res.json()
        console.log(json)
        return setArticles(json.articles)
      } catch (err) {
        return console.log(err)
      }
    }

    // Calls getArticles() on Mount.
    getArticles();
  }, []);

  const articleList = articles.map(({ id, title, author, img, desc, tags, comments }, i) => {
    return (
      <div className="articlepreview" key={id}>
        <ArticlePreview
          id={id}
          title={title}
          author={author}
          img={img}
          desc={desc}
          tags={tags}
          comments={comments}
        />
      </div>
    );
  });

  return (
    <div className="ArticleList">{articleList}</div>
  )
}

export default ArticleList;
