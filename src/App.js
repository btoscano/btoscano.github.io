import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import "./Global/main.scss";


function App() {

  return (
    <div className="app">

      <Header/>

      <canvas className="webgl"></canvas>
      {/* Some content that stays in all pages */}


      {/* <Footer/> */}

    </div>
  );
}

export default App;

