
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import data from "../Dati";

function Scrivimi() {
  return <div className="scrivimi">
    
    <section className="scrivimi__wrapper">
                <div className="scrivimi__rightWrapper">
                    <h1 className="scrivimi__title">Scrivimi</h1>
                    <p className="scrivimi__paragraph">{data.scrivimi.description} </p>

                    <div className='scrivimi__linkWrapper' >
                      <a className='scrivimi__link' href="mailto:btoscano95@gmail.com">
                        <FontAwesomeIcon className="scrivimi__social" icon={faEnvelope} /> {data.scrivimi.mail}
                      </a>
                    </div>

                </div>
                <div className="scrivimi__leftWrapper">
                </div>

            </section>


  </div>;
}

export default Scrivimi;
