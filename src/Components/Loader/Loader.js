import data from "../../Dati";

function Loader() {

    return (
     <div className="loader">
        <div className="loader__wrapper loader__book">
            <figure className="loader__page"></figure>
            <figure className="loader__page"></figure>
            <figure className="loader__page"></figure> 
        </div>
        <p className="loader__text">{data.loader.text}</p>
     </div>
    );
  }
  
  export default Loader;
  