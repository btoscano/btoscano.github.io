import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">

        <p> Del testo qui</p>
        <nav>
          <ul className="footer__socialList"> 
          <li>
              <a href="https://www.linkedin.com/in/beatrice-toscano/">
              <FontAwesomeIcon className="footer__social footer__social--linkedin" icon={faLinkedinIn} />
              </a>
            </li>           
            {/* <li>
              <a href="https://it-it.facebook.com/beatrice.toscano">
                <FontAwesomeIcon className="footer__social footer__social--facebook" icon={faFacebookF} />
              </a>
            </li>  */}
            <li>
              {/* TODO link */}
              <a href="#">
              <FontAwesomeIcon className="footer__social footer__social--messenger" icon={faFacebookMessenger} />
              </a>
            </li> 
            <li>
              <a href="mailto:btoscano95@gmail.com">
              <FontAwesomeIcon className="footer__social footer__social--email" icon={faEnvelope} />
              </a>
            </li> 
        </ul>
      </nav>


    </div>
  </footer>
  );
}

export default Footer;



