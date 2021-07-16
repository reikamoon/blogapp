import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import Header from './Header/Header'
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Featured from './Featured/Featured';
import About from './About/About';
import ArticleList from './ArticleList/ArticleList'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Route exact path="/" component={Featured} />
        <Route exact path="/about" component={About} />
        <Route exact path="/articles" component={ArticleList} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
