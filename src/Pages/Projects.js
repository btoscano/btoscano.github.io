import data from "../Dati";

function ProjectsList({ source }) {
  return (
    <>
      {source ? (
        <ul className="projects__list">
          {[...source].reverse().map((listitem) => (
            <li className="projects__section" key={listitem.index}>
              <div className="projects__section__left">
                <h2 className="projects__section_title">{listitem.title}</h2>
                <p>{listitem.description} </p>
              </div>
              <div className="projects__section__right">
                <img className="projects__img2" src={listitem.img}></img>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function Projects() {
  return (
    <div className="projects">
      <section className="projects__wrapper">
        <div className="projects__rightWrapper">
         
          <h1 className="projects__title">Progetti</h1>
          <p className="projects__description">{data.progetti.description}</p>
          <ProjectsList source={data.progetti.list} />

        </div>

        <div className="projects__leftWrapper">

          <img className="projects__img" src="BeatriceToscano.png"></img>

        </div>
        
      </section>
    </div>
  );
}

export default Projects;
