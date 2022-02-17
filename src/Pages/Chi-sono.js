import data from "../Dati";

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
  return (
    <div className="chisono">
      <section className="chisono__wrapper">
        <div className="chisono__rightWrapper">
          <h1 className="chisono__title">Chi sono</h1>
          <p className="chisono__paragraph">{data.chisono.paragrafo}</p>

          <h2 className="chisono__experience">Esperienza</h2>
          <Timeline source={data.experience}/>

          <h2 className="chisono__experience">Formazione</h2>
          <Timeline source={data.education}/>


        </div>

        <div className="chisono__leftWrapper"></div>
      </section>
    </div>
  );
}

export default ChiSono;
