import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About">
      <h1>About Me</h1>
      <img src="img/reika2.png" alt="profilepic" width="25%" height="25%" />
      <div className="Abouttxt">
        <h2>Name: Anjelica</h2>
        <h2>Favorite Topics:</h2>
        <p>
          {" "}
          Software Engineering, Front End Web Development, Fashion, Baking,
          Digital Art
        </p>
        <h2>Biography:</h2>
        <p>
          Hi, my name is Anjelica! I enjoy writing, drawing, and coding. I
          recently graduated from Dominican University of California with a B.S.
          in Applied Computer Science. I participated in the Applied Computer
          Science program for two years, as a Back-End Web student.
        </p>
        <a href="https://github.com/reikamoon">My Github</a>
      </div>
    </div>
  );
}

export default About;
