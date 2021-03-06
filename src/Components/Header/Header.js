import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "../../Pages/Home/Home";
// import Contact from "../../Pages/Contact/Contact";
// import About from "../../Pages/About/About";
import Projects from "../../Pages/Projects/Projects";
import Redazione from "../../Pages/Redazione";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

import PropTypes from 'prop-types';
import Loader from "../Loader/Loader";

import React, { Suspense, useState } from "react";
import ReactGA from "react-ga4";

// import '../Components/Header/Header.scss';

function Header({ backgroundColor, ...props }) {
    const TRACKING_ID = "G-HQD5ETJ34G"; 
    ReactGA.initialize(TRACKING_ID);

    const Home = React.lazy(() => import("../../Pages/Home/Home"));
    const Contact = React.lazy(() => import("../../Pages/Contact/Contact"));
    const About = React.lazy(() => import("../../Pages/About/About"));

    const names = ['home', 'contact', 'projects', 'about', 'redazione'];
    const [active, setActive] = useState(names[0]);
    const [flag, setFlag] = useState(true);
    const contact = active === 'contact';
    const home = active === 'home';
    const projects = active === 'projects';
    const about = active === 'about';
    const redazione = active === 'redazione';

    if (flag){
      setActive(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
      setFlag(false)
    }

    function setSelected(name) {
        setActive(name);
        ReactGA.send({ hitType: "pageview", page:"/" + name });
    }


  return (
  <Suspense maxDuration={300} fallback={<Loader />}>

    <Router>
      <header className={['header', `header--${backgroundColor}`].join(' ')} id="header">
        {/* Links */}
        <div className="header__wrapper">
          <div className="header__before"></div>
          <nav className="header__nav">
            <div className="header__innerBefore"></div>
            <ul className="header__list">              
                <li className={`header__item `}>
                  <Link className={`header__link ${about ? "header__link--active" : ""} `} to="/esperienza" onClick={() => setSelected('about')}> Esperienza </Link>
                </li>
                <li className={`header__item header__item--title `}>
                  <Link className={`header__link header__title ${home ? "header__link--active" : ""} `}  to="/" onClick={() => setSelected('home')} >Beatrice Toscano</Link>
                </li>       
                <li className={`header__item `}>
                  <Link className={`header__link ${contact ? "header__link--active" : ""} `} to="/scrivimi" onClick={() => setSelected('contact')}> Scrivimi </Link>
                </li>           
                {/* <li className={`header__item `}>
                  <Link className={`header__link ${redazione ? "header__link--active" : ""} `} to="/redazione" onClick={() => setSelected('redazione')}> Redazione </Link>
                </li>    
                <li className={`header__item `}>
                  <Link className={`header__link ${projects ? "header__link--active" : ""} `} to="/progetti" onClick={() => setSelected('projects')}> Progetti </Link>
                </li>               */}
            </ul>        
            <div className="header__innerAfter"></div>     
          </nav>
          <div className="header__after"></div>  
        </div>
      </header>

      {/* Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scrivimi" element={<Contact />} />
        <Route path="/esperienza" element={<About />} />
        <Route path="/progetti" element={<Projects />} />
        <Route path="/redazione" element={<Redazione />} />
        <Route path="*" element={<ErrorPage func={setSelected}/>} />
      </Routes>
    </Router>

    </Suspense>
  );
}


Header.propTypes = {
  // primary: PropTypes.bool,
  backgroundColor: PropTypes.oneOf(['light', 'dark']),
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  // label: PropTypes.string.isRequired,
  // onClick: PropTypes.func,
};

Header.defaultProps = {
  backgroundColor: 'light',
  // primary: false,
  // size: 'medium',
  // onClick: undefined,
};


export default Header;
