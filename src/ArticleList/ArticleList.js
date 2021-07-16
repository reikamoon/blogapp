import React from "react";
import ArticleDetails from "../ArticleDetails/ArticleDetails"
import "./ArticleList.css";
import data from "../data.json";

function ArticleList() {
  const articles = data.map(
    ({ title, author, img, desc, tags}, i) => {
      return (
        <ArticleDetails
          id={i}
          title={title}
          author={author}
          img={img}
          desc={desc}
          tags={tags}
        />
      );
    }
  );

  return (
        <div className="ArticleList">
        {articles}
        </div>
  )
}

export default ArticleList;
