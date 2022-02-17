import data from "../Dati";

function Timeline() {
  // return data.timeline.map((entry) => (
  return [...data.timeline].reverse().map((entry) => (
    <div className="entry__wrapper" key={entry.index}>
      <h2 className="entry__job">{entry.job}</h2>
      <p className="entry__employer"><a className="entry__link" href={entry.joblink}> {entry.employer}</a></p>
      <p className="entry__date">
        <span>{entry.date}</span>
      </p>

      <ul className="entry__list">
        {entry.list.map((listitem) => (
          <li className="entry__item" key={listitem.index}>{listitem.task}</li>
        ))}
      </ul>
    </div>
  ));
}

function ChiSono() {
  return (
    <div className="chisono">
      <section className="chisono__wrapper">
        <div className="chisono__rightWrapper">
          <h1 className="chisono__title">Chi sono</h1>
          <p className="chisono__paragraph">
          {data.chisono.paragrafo}
          </p>

          <h2 className="chisono__experience">Esperienza</h2>
          <Timeline />
        </div>

        <div className="chisono__leftWrapper"></div>
      </section>
    </div>
  );
}

export default ChiSono;
