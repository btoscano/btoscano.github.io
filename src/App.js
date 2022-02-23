// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";

import "./Styles/Global/main.scss";

import React, { Suspense } from "react";

const Header = React.lazy(() => import("./Components/Header/Header"));
const Footer = React.lazy(() => import("./Components/Footer/Footer"));

function App() {

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


