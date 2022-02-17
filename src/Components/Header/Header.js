import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Projects from "../../Pages/Projects";
import ErrorPage from "../../Pages/ErrorPage";

import { useState } from 'react';

function Header() {
    const names = ['Home', 'About', 'Projects'];
    const [active, setActive] = useState(names[0]);

    function setSelected(name) {
        setActive(name);

    }

    const isAboutSelected = active === 'About';
    const isHomeSelected = active === 'Home';
    const isProjectsSelected = active === 'Projects';

  return (
    <Router>
      <header className="header" id="header">
        {/* Links */}
        <div className="header__wrapper">
          <div className="header__before"></div>
          <nav className="header__nav">
            <div className="header__innerBefore"></div>
            <ul className="header__list">
                <li className={`header__item ${isAboutSelected ? "header__item--active" : ""} `}>
                  <Link className="header__link" to="/about" onClick={() => setSelected('About')}> Scrivimi </Link>
                </li>                
                <li className={`header__item ${isAboutSelected ? "header__item--active" : ""} `}>
                  <Link className="header__link" to="/about" onClick={() => setSelected('About')}> Chi sono </Link>
                </li>
                <li className={`header__item header__item--title ${isHomeSelected ? "header__item--active" : ""} `}>
                  <Link className="header__link header__title" to="/" onClick={() => setSelected('Home')} > - Beatrice Toscano - </Link>
                </li>                
                <li className={`header__item ${isProjectsSelected ? "header__item--active" : ""} `}>
                  <Link className="header__link" to="/projects" onClick={() => setSelected('Projects')}> Redazione </Link>
                </li>    
                <li className={`header__item ${isProjectsSelected ? "header__item--active" : ""} `}>
                  <Link className="header__link" to="/projects" onClick={() => setSelected('Projects')}> Progetti </Link>
                </li>              
            </ul>        
            <div className="header__innerAfter"></div>     
          </nav>
          <div className="header__after"></div>  
        </div>
      </header>

      {/* Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default Header;
