import data from "../Dati";
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

function ChiSono() {
  const experience = useRef(null)
  const education = useRef(null)

  const educationScroll = () => education.current.scrollIntoView()
  const experienceScroll = () => experience.current.scrollIntoView()    

  return (
    <div className="chisono">
      <section className="chisono__wrapper">

          <div className="chisono__leftWrapper">

          <img className="home__img" src={data.chisono.img}></img>

          <ul className="chisono__list">
            <li className={`chisono__item `}>
            <button className="chisono__button" onClick={experienceScroll}> Esperienza </button> 
            </li>                
            <li className={`chisono__item`}>
            <button className="chisono__button" onClick={educationScroll}> Formazione </button> 
            </li>                
          </ul> 

        </div>

        <div className="chisono__rightWrapper">
          <h1 className="chisono__title">Chi sono</h1>
          <p className="chisono__paragraph">{data.chisono.paragrafo}</p>

          <div className="chisono__images" >
          <img className="home__imgItem" src={data.chisono.img1}></img>
          <img className="home__imgItem" src={data.chisono.img2}></img>
          <img className="home__imgItem" src={data.chisono.img3}></img>
          </div>  

          <div className="chisono__section" ref={experience}>
            <h2 className="chisono__sectionTitle">Esperienza</h2>
            <Timeline source={data.experience}/>
          </div>
          <div className="chisono__section"  ref={education}>
            <h2 className="chisono__sectionTitle">Formazione</h2>
            <Timeline source={data.education}/>
          </div>

        </div>

      </section>
    </div>
  );
}

export default ChiSono;
