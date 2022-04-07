import data from "../../Dati";

import Timeline from "../../Components/Timeline/Timeline";
import Row from '../../Components/Row/Row.js'
import Column from '../../Components/Column/Column.js'
import GroupImgs from '../../Components/GroupImgs/GroupImgs.js'

import parse from 'html-react-parser';

import { useRef } from 'react';

function Parser(props){
  return parse(props.toParse);
}

function About() {
  const experience = useRef(null)
  const education = useRef(null)
  const acknowledgements = useRef(null)

  const educationScroll = () => education.current.scrollIntoView()
  const experienceScroll = () => experience.current.scrollIntoView()    
  const acknowledgementsScroll = () => acknowledgements.current.scrollIntoView()    

  return (
    <div className="about">
      <Row>
        <Column size={4} center sticky paddingBottom bgColor>
          <img className="about__img" alt={data.about.altText} src={data.about.img}></img>
          <nav>
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
          </nav>
        </Column>
        <Column size={8} paddingLR>
          <h1 className="about__title">Esperienza</h1>
          <p className="about__paragraph">
            <Parser toParse={data.about.paragrafo} />
          </p>

          <GroupImgs source={data.about.imgs}></GroupImgs>

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
        </Column>
      </Row>

    </div>
  );
}

export default About;
