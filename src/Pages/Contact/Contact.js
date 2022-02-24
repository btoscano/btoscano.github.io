
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import data from "../../Dati";
import ContactForm from "../../Components/ContactForm/ContactForm";


function Contact() {

  return <div className="contact">
    
    <section className="contact__wrapper">

        <div className="contact__leftWrapper">
          <img className="contact__img" src={data.contact.img}></img>
          <nav>
            <ul className="contact__list" >
              {data.socials.map((listitem) => (
                <li className="contact__item" key={listitem.index}>
                    <a className="contact__link" key={listitem.index} href={listitem.link}>
                    <FontAwesomeIcon className="contact__social contact__social--linkedin" icon={listitem.iconName} />
                    {listitem.name} 
                    </a>
                </li>
              ))}
            </ul>  
          </nav>
        </div>

        <div className="contact__rightWrapper">
            <h1 className="contact__title">{data.contact.title}</h1>
            <p className="contact__paragraph">{data.contact.description} </p>
            <ContactForm formTitle={data.contact.formTitle}/>
        </div>

    </section>

  </div>;
}

export default Contact;
