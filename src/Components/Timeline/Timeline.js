

function Timeline({source}) {
    return [...source].reverse().map((entry) => (
      <div className="timeline__wrapper" key={entry.index}>
        <h2 className="timeline__job">{entry.job}</h2>
        <p className="timeline__employer">
          <a className="timeline__link" href={entry.joblink}>
            {" "}
            {entry.employer}
          </a>
        </p>
        <p className="timeline__date">
          <span>{entry.date}</span>
        </p>
        {entry.description ? <p className="timeline__description">{entry.description}</p> : null}
        {entry.grade ? <p className="timeline__grade">{entry.grade}</p> : null}
  
        {entry.list ? (
          <ul className="timeline__list">
            {entry.list.map((listitem) => (
              <li className="timeline__item" key={listitem.index}>
                {listitem.task}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    ));
  }

  export default Timeline;