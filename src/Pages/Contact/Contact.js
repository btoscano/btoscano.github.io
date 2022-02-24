
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import data from "../../Dati";
import ContactForm from "../../Components/ContactForm/ContactForm";


function Contact() {

  return <div className="contact">
    
    <section className="contact__wrapper">

        <div className="contact__leftWrapper">

        <img className="contact__img" src={data.contact.img}></img>
        <nav>
          <ul className="contact__list">
            <li className={`contact__item `}>
            <a className="contact__link"  href="https://www.linkedin.com/in/beatrice-toscano/"> 
            <FontAwesomeIcon className="contact__social contact__social--linkedin" icon={faLinkedinIn} />
            LinkedIn </a> 
            </li>                
            <li className={`contact__item`}>
            <a className="contact__link" href="#TODO"> 
            <FontAwesomeIcon className="contact__social contact__social--messenger" icon={faFacebookMessenger} />
            Messenger </a> 
            </li> 
            <li className={`contact__item`}>
            <a className="contact__link" href="mailto:btoscano95@gmail.com">
            <FontAwesomeIcon className="contact__social contact__social--email" icon={faEnvelope} />
            Email  </a> 
            </li>                
          </ul> 
      </nav>

        </div>

        <div className="contact__rightWrapper">
            <h1 className="contact__title">Scrivimi</h1>
            <p className="contact__paragraph">{data.contact.description} </p>

            <ContactForm />

        </div>

    </section>

  </div>;
}

export default Contact;
