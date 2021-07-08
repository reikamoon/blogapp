import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import ArticleList from './ArticleList/ArticleList';
import Page from './Page/Page';
import About from './About/About';
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Route exact path="/" component={ArticleList} />

        <Footer />
      </header>
    </div>
  );
}

export default App;
