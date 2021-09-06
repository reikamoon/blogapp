import "./App.css";
import React from "react";
import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Featured from "./Featured/Featured";
import About from "./About/About";
import ArticleList from "./ArticleList/ArticleList";
import Article from "./Article/Article";
import NotFound from "./NotFound/NotFound";

function App() {
  const [health, setHealth] = useState("");

  const healthCheck = async () => {
    try {
      const res = await fetch("/health", {
        headers: { accepts: "application/json" },
      });

      const json = await res.json();
      console.log(json);
      return setHealth(json.msg);
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route
            path="/health"
            render={() => {
              healthCheck();
              return (
                <div>
                  <h1>Health Check</h1>
                  <h2>{health}</h2>
                </div>
              );
            }}
          />
          <Route exact path="/" component={Featured} />
          <Route exact path="/about" component={About} />
          <Route exact path="/articles" component={ArticleList} />
          <Route path="/details/:id" component={Article} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
