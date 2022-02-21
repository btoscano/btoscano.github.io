
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import '@fortawesome/free-brands-svg-icons'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import data from "../../Dati";

import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com';

const toastifySuccess = () => {
  toast('Messaggio inviato!', {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,  
    draggable: false,
    className: 'contact__success',
    toastId: 'notifyToast'
  });
};

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  // const onSubmit = async (data) => {
  //   const { firstname, surname, email, subject, message } = data;
    
  //   console.log('Name: ', firstname);
  //   console.log('Surname: ', surname);
  //   console.log('Email: ', email);
  //   console.log('Subject: ', subject);
  //   console.log('Message: ', message);
  // };

  const onSubmit = async (data) => {
    const { firstname, surname, email, subject, message } = data;
    try {
      const templateParams = {
        firstname,
        surname,
        email,
        subject,
        message
      };
      await emailjs.send(
        "service_g4dvut8",
        "template_3wt4u0c",
        templateParams,
        "user_tDcGr4CBcRLjFJud7yicI"
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };



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


        <form className="contact__form" aria-labelledby="formTitle"  onSubmit={handleSubmit(onSubmit)} >
          <h2 className='contact__formTitle' id='formTitle'>Fill form</h2>

          <div className='contact__group'>
            <label className='contact__label' htmlFor="firstname">Nome</label>
            <input className='contact__input' placeholder="Nome" type="text" name="firstname" id="firstname" 
            {...register('firstname', {
              required: { value: true, message: 'Please enter your name' }
            })}></input>
            {errors.firstname && (
              <span className='contact__errorMessage'>{errors.firstname.message}</span>
            )}              
          </div>

          <div className='contact__group'>
            <label className='contact__label' htmlFor="surname">Cognome</label>
            <input className='contact__input' placeholder="Cognome" type="text" name="surname" id="surname"
            {...register('surname', {
              required: { value: true, message: 'Please enter your surname' }
            })}></input>    
            {errors.surname && (
              <span className='contact__errorMessage'>{errors.surname.message}</span>
            )}                     
          </div>          
          
          <div className='contact__group'>
            <label className='contact__label' htmlFor="email">Email</label>
            <input className='contact__input' placeholder="Cognome" type="email" name="email" id="email"
            {...register('email', {
              required: { value: true, message: 'Please enter your email' }
            })}></input>    
            {errors.email && (
              <span className='contact__errorMessage'>{errors.email.message}</span>
            )}                   
          </div>

          <div className='contact__group'>
            <label className='contact__label' >Oggetto</label>
            <input className='contact__input' placeholder="Oggetto" type="text" name="subject" id="subject"
            {...register('subject', {
              required: { value: true, message: 'Please enter a subject' },
              maxLength: {
                value: 75,
                message: 'Subject cannot exceed 75 characters'
              }
            })} ></input>    
            {errors.subject && (
              <span className='contact__errorMessage'>{errors.subject.message}</span>
            )} 
          </div>

          <div className='contact__group'>
            <label className='contact__label' >Messaggio</label>
            <textarea className='contact__input' rows="8" placeholder="Messaggio" type="textarea" name="message" id="message"
            {...register('message', {
              required: { value: true, message: 'Please enter a message' },
            })} ></textarea>   
            {errors.message && (
              <span className='contact__errorMessage'>{errors.message.message}</span>
            )}           
          </div>

          <button className='contact__button' type='submit'>Invia</button>  

        </form>

        <ToastContainer />

        </div>

    </section>

  </div>;
}

export default Contact;
