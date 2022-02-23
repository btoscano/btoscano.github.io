

function Loader() {

    return (
     <div className="loader">
        <div className="loader__wrapper loader__book">
            <figure className="loader__page"></figure>
            <figure className="loader__page"></figure>
            <figure className="loader__page"></figure> 
        </div>
        <p className="loader__text">Loading</p>
     </div>
    );
  }
  
  export default Loader;
  