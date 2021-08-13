import React, { useState } from "react";
import "./ArticleForm.css";

function ArticleForm() {
  const [values, setValues] = useState({
    title: "",
    author: "",
    img:"",
    desc: "",
    body: "",
    tags: "",
  });
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  const handleTitleChange = (event) => {
    setValues((values) => ({
      ...values,
      title: event.target.value,
    }));
  };

  const handleAuthorChange = (event) => {
    setValues((values) => ({
      ...values,
      author: event.target.value,
    }));
  };

  const handleImgChange = (event) => {
    setValues((values) => ({
      ...values,
      img: event.target.value,
    }));
  };

  const handleDescChange = (event) => {
    setValues((values) => ({
      ...values,
      desc: event.target.value,
    }));
  };

  const handleBodyChange = (event) => {
    setValues((values) => ({
      ...values,
      body: event.target.value,
    }));
  };

  const handleTagsChange = (event) => {
    setValues((values) => ({
      ...values,
      tags: event.target.value,
    }));
  };

  return (
    <div className="articleform">
      <form onSubmit={onSubmit}>
        <label htmlFor="Title">Article Title</label>
        <input
          id="Title"
          name="Title"
          type="text"
          value={values.title}
          onChange={handleTitleChange}
        ></input>

        <label htmlFor="Author">Author</label>
        <input
          id="Author"
          name="Author"
          type="text"
          value={values.author}
          onChange={handleAuthorChange}
        ></input>

        <label htmlFor="img">Image</label>
        <input
          id="Image"
          name="Image"
          type="text"
          value={values.image}
          onChange={handleImgChange}
        ></input>

        <label htmlFor="desc">Description</label>
        <input
          id="Description"
          name="Description"
          type="Description"
          value={values.description}
          onChange={handleDescChange}
        ></input>

        <label htmlFor="Body">Article Body</label>
        <textarea
          id="Body"
          name="Body"
          value={values.body}
          onChange={handleBodyChange}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ArticleForm;
