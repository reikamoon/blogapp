import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import Header from './Header/Header'
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Featured from './Featured/Featured';
import About from './About/About';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Navbar />
      <Featured />
      <Route path="/about" component={About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
