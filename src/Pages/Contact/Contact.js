
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import '@fortawesome/free-brands-svg-icons'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import data from "../../Dati";

function Contact() {
  return <div className="contact">
    
    <section className="contact__wrapper">

        <div className="contact__leftWrapper">

        </div>

        <div className="contact__rightWrapper">
            <h1 className="contact__title">Scrivimi</h1>
            <p className="contact__paragraph">{data.contact.description} </p>

            {/* <div className='contact__linkWrapper' >
              <a className='contact__link' href="mailto:btoscano95@gmail.com">
                <FontAwesomeIcon className="contact__social" icon={faEnvelope} /> {data.contact.mail}
              </a>
            </div> */}

            <nav>
            <ul className="contact__socialList"> 
            <li>
                <a className='contact__link' href="https://www.linkedin.com/in/beatrice-toscano/">
                <FontAwesomeIcon className="contact__social contact__social--linkedin" icon={faLinkedinIn} />
                LinkedIn
                </a>
              </li>           
              <li>
                {/* TODO link */}
                <a className='contact__link' href="#">
                <FontAwesomeIcon className="contact__social contact__social--messenger" icon={faFacebookMessenger} />
                Messenger
                </a>
              </li> 
              <li>
                <a className='contact__link' href="mailto:btoscano95@gmail.com">
                <FontAwesomeIcon className="contact__social contact__social--email" icon={faEnvelope} />
                Email
                </a>
              </li> 
          </ul>
        </nav>


        <form className="contact__form" aria-labelledby="formTitle">
          <h2 className='contact__formTitle' id='formTitle'>Fill form</h2>
          <div className='contact__group'>
            <label className='contact__label' htmlFor="firstname">Nome:</label>
            <input className='contact__input' placeholder="Nome" type="text" name="firstname" id="firstname"></input>
          </div>

          <div className='contact__group'>
            <label className='contact__label' htmlFor="surname">Cognome:</label>
            <input className='contact__input' placeholder="Cognome" type="text" name="surname" id="surname"></input>            
          </div>

          <div className='contact__group'>
            <label className='contact__label' >Oggetto:</label>
            <input className='contact__input' placeholder="Oggetto" type="text" name="subject" id="subject"></input>            
          </div>

          <div className='contact__group'>
            <label className='contact__label' >Messaggio:</label>
            <textarea className='contact__input' rows="8" placeholder="Messaggio" type="textarea" name="message" id="message"></textarea>            
          </div>

          <button className='contact__button'>Invia</button>  

        </form>


        </div>

    </section>

  </div>;
}

export default Contact;
