
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';



function Scrivimi() {
  return <div className="scrivimi">
    
    <section className="scrivimi__wrapper">
                <div className="scrivimi__rightWrapper">
                    <h1 className="scrivimi__title">Scrivimi</h1>
                    <p className="scrivimi__paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus, eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus. Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc euismod mi nunc, ut vehicula lorem fermentum a.
                    </p>

                    <div className='scrivimi__linkWrapper' >
                      <a className='scrivimi__link' href="mailto:btoscano95@gmail.com">
                        <FontAwesomeIcon className="scrivimi__social" icon={faEnvelope} />
                        btoscano95@gmail.com
                      </a>
                    </div>

                </div>
                <div className="scrivimi__leftWrapper">
                </div>

            </section>


  </div>;
}

export default Scrivimi;
