import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home";
import Scrivimi from "../../Pages/Scrivimi";
import ChiSono from "../../Pages/Chi-sono";
import Progetti from "../../Pages/Projects";
import Redazione from "../../Pages/Redazione";
import ErrorPage from "../../Pages/ErrorPage";

import { useState } from 'react';

function Header() {
    const names = ['Home', 'Scrivimi', 'Progetti', 'Chi sono', 'Redazione'];
    const [active, setActive] = useState(names[0]);

    function setSelected(name) {
        setActive(name);
    }

    const scrivimi = active === 'Scrivimi';
    const home = active === 'Home';
    const progetti = active === 'Progetti';
    const chiSono = active === 'Chi sono';
    const redazione = active === 'Redazione';

  return (
    <Router>
      <header className="header" id="header">
        {/* Links */}
        <div className="header__wrapper">
          <div className="header__before"></div>
          <nav className="header__nav">
            <div className="header__innerBefore"></div>
            <ul className="header__list">
                <li className={`header__item `}>
                  <Link className={`header__link ${scrivimi ? "header__link--active" : ""} `} to="/scrivimi" onClick={() => setSelected('Scrivimi')}> Scrivimi </Link>
                </li>                
                <li className={`header__item `}>
                  <Link className={`header__link ${chiSono ? "header__link--active" : ""} `} to="/chi-sono" onClick={() => setSelected('Chi sono')}> Chi sono </Link>
                </li>
                <li className={`header__item header__item--title `}>
                  <Link className={`header__link header__title ${home ? "header__link--active" : ""} `}  to="/" onClick={() => setSelected('Home')} > - Beatrice Toscano - </Link>
                </li>                
                <li className={`header__item `}>
                  <Link className={`header__link ${redazione ? "header__link--active" : ""} `} to="/redazione" onClick={() => setSelected('Redazione')}> Redazione </Link>
                </li>    
                <li className={`header__item `}>
                  <Link className={`header__link ${progetti ? "header__link--active" : ""} `} to="/progetti" onClick={() => setSelected('Progetti')}> Progetti </Link>
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
        <Route path="/scrivimi" element={<Scrivimi />} />
        <Route path="/chi-sono" element={<ChiSono />} />
        <Route path="/progetti" element={<Progetti />} />
        <Route path="/redazione" element={<Redazione />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default Header;
