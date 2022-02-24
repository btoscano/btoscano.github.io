import data from "../../Dati";

import Timeline from "../../Components/Timeline/Timeline";

import { useRef } from 'react';

function About() {
  const experience = useRef(null)
  const education = useRef(null)
  const acknowledgements = useRef(null)

  const educationScroll = () => education.current.scrollIntoView()
  const experienceScroll = () => experience.current.scrollIntoView()    
  const acknowledgementsScroll = () => acknowledgements.current.scrollIntoView()    

  return (
    <div className="about">
      <section className="about__wrapper">

          <div className="about__leftWrapper">

          <img className="about__img" src={data.about.img}></img>

          <ul className="about__list">
            <li className={`about__item `}>
            <button className="about__button" onClick={experienceScroll}> Lavoro </button> 
            </li>                
            <li className={`about__item`}>
            <button className="about__button" onClick={educationScroll}> Formazione </button> 
            </li> 
            <li className={`about__item`}>
            <button className="about__button" onClick={acknowledgementsScroll}> Riconoscimenti </button> 
            </li>                
          </ul> 

        </div>

        <div className="about__rightWrapper">
          <h1 className="about__title">Esperienza</h1>
          <p className="about__paragraph">{data.about.paragrafo}</p>

          <div className="about__images" >
          <img className="about__imgItem" src={data.about.img1}></img>
          <img className="about__imgItem" src={data.about.img2}></img>
          <img className="about__imgItem" src={data.about.img3}></img>
          </div>  

          <div className="about__section" ref={experience}>
            <h2 className="about__sectionTitle">Esperienza</h2>
            <Timeline source={data.experience}/>
          </div>
          <div className="about__section"  ref={education}>
            <h2 className="about__sectionTitle">Formazione</h2>
            <Timeline source={data.education}/>
          </div>          
          
          <div className="about__section"  ref={acknowledgements}>
            <h2 className="about__sectionTitle">Riconoscimenti</h2>
            <Timeline source={data.acknowledgements}/>
          </div>

        </div>

      </section>
    </div>
  );
}

export default About;
