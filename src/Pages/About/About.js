import data from "../../Dati";
import { Link } from "react-router-dom";

import { useState, useRef } from 'react';

function Timeline({source}) {
  return [...source].reverse().map((entry) => (
    <div className="entry__wrapper" key={entry.index}>
      <h2 className="entry__job">{entry.job}</h2>
      <p className="entry__employer">
        <a className="entry__link" href={entry.joblink}>
          {" "}
          {entry.employer}
        </a>
      </p>
      <p className="entry__date">
        <span>{entry.date}</span>
      </p>
      {entry.description ? <p className="entry__description">{entry.description}</p> : null}
      {entry.grade ? <p className="entry__grade">{entry.grade}</p> : null}

      {entry.list ? (
        <ul className="entry__list">
          {entry.list.map((listitem) => (
            <li className="entry__item" key={listitem.index}>
              {listitem.task}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  ));
}

function About() {
  const experience = useRef(null)
  const education = useRef(null)

  const educationScroll = () => education.current.scrollIntoView()
  const experienceScroll = () => experience.current.scrollIntoView()    

  return (
    <div className="about">
      <section className="about__wrapper">

          <div className="about__leftWrapper">

          <img className="home__img" src={data.about.img}></img>

          <ul className="about__list">
            <li className={`about__item `}>
            <button className="about__button" onClick={experienceScroll}> Esperienza </button> 
            </li>                
            <li className={`about__item`}>
            <button className="about__button" onClick={educationScroll}> Formazione </button> 
            </li>                
          </ul> 

        </div>

        <div className="about__rightWrapper">
          <h1 className="about__title">Chi sono</h1>
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

        </div>

      </section>
    </div>
  );
}

export default About;
