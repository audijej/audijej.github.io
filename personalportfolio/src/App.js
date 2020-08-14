import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer/Footer";
import "./components/style.css"
import LandingPage from './pages/LandingPage';




function App() {
  return (
    <Router>
      <div>



        <Navbar />

        

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />

      </div>
    </Router>
    
  );
}

export default App;