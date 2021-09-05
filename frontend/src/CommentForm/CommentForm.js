import React, {useState} from "react";
import "./CommentForm.css";

function CommentForm() {
//   const { handleSubmit, control, reset } = useForm();
  const [values, setValues] = useState({
    name: "",
    comment: ""
  });
  const onSubmit = (event) => {
    event.preventDefault();
    // TO DO: Push the form to the DB (BackEnd), DEPLOY
    

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
