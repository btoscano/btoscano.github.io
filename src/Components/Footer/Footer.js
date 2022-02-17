import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import ErrorPage from "../../Pages/ErrorPage";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p>Footer!</p>

        <Router>
            
          <nav>
            <Link to="/"> Footer Home Link</Link>
            <Link to="/about">Footer About Link</Link>
          </nav>

        </Router>
    </div>
  </footer>
  );
}

export default Footer;



