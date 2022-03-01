
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import data from "../../Dati";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Row from '../../Components/Row/Row.js'
import Column from '../../Components/Column/Column.js'

function Contact() {

  return <div className="contact">

    <Row>

      <Column size={4} center sticky paddingBottom bgColor>
        <img className="contact__img" alt={data.contact.altText} src={data.contact.img}></img>
        <nav>
          <ul className="contact__list" >
            {data.socials.map((listitem) => (
              <li className="contact__item" key={listitem.index}>
                  <a className="contact__link" key={listitem.index} href={listitem.link}>
                  <FontAwesomeIcon className="contact__social" icon={listitem.iconName} />
                  {listitem.name} 
                  </a>
              </li>
            ))}
          </ul>  
        </nav>
      </Column>

      <Column size={8}>
        <h1 className="contact__title">{data.contact.title}</h1>
        <p className="contact__paragraph">{data.contact.description} </p>
        <ContactForm formTitle={data.contact.formTitle}/>        
      </Column>

    </Row>

  </div>;
}

export default Contact;
