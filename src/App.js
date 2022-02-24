// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";

import "./Styles/Global/main.scss";

import React, { Suspense } from "react";
import ReactGA from "react-ga4";

const Header = React.lazy(() => import("./Components/Header/Header"));
const Footer = React.lazy(() => import("./Components/Footer/Footer"));

function App() {
  const TRACKING_ID = "G-HQD5ETJ34G"; 
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page:"/home" });

  return (
    <>
        <Suspense maxDuration={300} fallback={<Loader />}>

          <div className="app">
            <Header/>
          </div>

          <Footer/>

        </Suspense>
    </>
  );
}

export default App;


