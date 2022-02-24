import { Link } from "react-router-dom";
import data from "../../Dati";

function ErrorPage({func}) {

  return (
    <div className="errorPage">
      <section className="errorPage__wrapper">
        <div className="errorPage__leftWrapper"></div>
        <div className="errorPage__rightWrapper">
          <h1 className="errorPage__title">{data.errorPage.title}</h1>
          <p className="errorPage__subtitle">{data.errorPage.description}</p>
          <Link className="errorPage__link" to="/" onClick={() => func('home')} >{data.errorPage.backToHomepageText}</Link>
        </div>
        
      </section>
    </div>
  );
}

export default ErrorPage;
