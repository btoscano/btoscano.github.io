import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import '@fortawesome/free-brands-svg-icons'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import data from "../../Dati";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">

        <div className="footer__leftWrapper">
            <p className='footer__title'>{data.footer.title}</p>
            <p className='footer__subtitle'> {data.footer.subtitle}</p>
            <p className='footer__paragraph'>{data.footer.description}</p>
            <a className='footer__copyright' href="https://github.com/etoscano">
            Copyright © {(new Date().getFullYear())}, Beatrice Toscano's Team. All rights reserved.
            </a>
        </div>

        <div className="footer__rightWrapper">
          <nav>
            <ul className="footer__socialList" >
              {data.socials.map((listitem) => (
                <li key={listitem.index}>
                    <a className="footer__link" key={listitem.index} href={listitem.link}>
                    <FontAwesomeIcon className={'footer__social footer__social--' + listitem.name} icon={listitem.iconName} />
                     <span className='sr-only'> {listitem.name} </span>
                    </a>
                </li>
              ))}
            </ul>  
          </nav>
        </div>

    </div>
  </footer>
  );
}

export default Footer;



