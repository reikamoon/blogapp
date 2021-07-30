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
        const res = await fetch("/articles", {
          headers: { accepts: "application/json" },
        });
        const json = await res.json();
        console.log(json);
        return setArticles(json.articles);
      } catch (err) {
        return console.log(err);
      }
    }

    // Calls getArticles() on Mount.
    getArticles();
  }, []);

  const articleList = articles.map(({ title, author, img, desc, tags }, i) => {
    return (
      <ArticlePreview
        id={i}
        key={i}
        title={title}
        author={author}
        img={img}
        desc={desc}
        tags={tags}
      />
    );
  });

  return (
    <div className="ArticleList">
    {articleList}
    </div>
  )}

export default ArticleList;
