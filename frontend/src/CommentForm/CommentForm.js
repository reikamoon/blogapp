import React, {useState} from "react";
import { useParams } from "react-router-dom";
import "./CommentForm.css";

function CommentForm() {
//   const { handleSubmit, control, reset } = useForm();
  const [values, setValues] = useState({
    name: "",
    comment: ""
  });
  const { id } = useParams();
  const onSubmit = (event) => {
    event.preventDefault();
    // TO DO: Push the form to the DB (BackEnd), DEPLOY
    // Example POST method implementation:
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData(`/articles/details/${id}/comment`, values ).then(
      (data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      }
    );
  }


  const handleNameChange = (event) => {
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleCommentChange = (event) => {
      setValues((values) => ({
          ...values,
          comment: event.target.value,
      }));
  };



  return (
    <div className = "commentform">
      <form onSubmit={onSubmit}>
        <label htmlFor="Name">Name</label>
        <input id="Name" name="Name" type="text" value={values.name} onChange={handleNameChange}></input>
        <label htmlFor="Comment">Comment</label>
        <textarea id="Comment" name="Comment" value={values.comment} onChange={handleCommentChange}></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CommentForm
