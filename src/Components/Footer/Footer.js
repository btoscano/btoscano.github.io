import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import '@fortawesome/free-brands-svg-icons'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import data from "../../Dati";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__leftWrapper">
            <p className='footer__title'> Beatrice Toscano</p>
            <p className='footer__subtitle'> {data.footer.subtitle}</p>
            <p className='footer__paragraph'>{data.footer.description}</p>

            <a className='footer__copyright' href="https://github.com/etoscano">
            Copyright © {(new Date().getFullYear())}, Beatrice Toscano's Team. All rights reserved.
            </a>

        </div>
        <div className="footer__rightWrapper">
          <nav>
            <ul className="footer__socialList"> 
            <li>
                <a className='footer__link' href="https://www.linkedin.com/in/beatrice-toscano/">
                <FontAwesomeIcon className="footer__social footer__social--linkedin" icon={faLinkedinIn} />
                </a>
              </li>           
              {/* <li>
                <a className='footer__link' href="https://it-it.facebook.com/beatrice.toscano">
                  <FontAwesomeIcon className="footer__social footer__social--facebook" icon={faFacebookF} />
                </a>
              </li>  */}
              <li>
                {/* TODO link */}
                <a className='footer__link' href="#">
                <FontAwesomeIcon className="footer__social footer__social--messenger" icon={faFacebookMessenger} />
                </a>
              </li> 
              <li>
                <a className='footer__link' href="mailto:btoscano95@gmail.com">
                <FontAwesomeIcon className="footer__social footer__social--email" icon={faEnvelope} />
                </a>
              </li> 
          </ul>
        </nav>
      </div>

    </div>
  </footer>
  );
}

export default Footer;



