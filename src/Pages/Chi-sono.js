function ChiSono() {
  return (
    <div className="chisono">
      <section className="chisono__wrapper">
        <div className="chisono__rightWrapper">
          <h1 className="chisono__title">Chi sono</h1>
          <p className="chisono__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet
            nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit
            dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus,
            eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada
            convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit
            ligula, vel semper est dolor a nulla. Donec eu blandit metus.
            Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc
            euismod mi nunc, ut vehicula lorem fermentum a.
          </p>

          <div className="entry__wrapper">
            <h2 className="entry__job">Redattrice</h2>
            <p className="entry__employer">laFeltrinelli - IBS.it</p>
            <p className="entry__date"><span>giugno 2021 - oggi</span></p>

            <ul className="entry__list">
              <li className="entry__item">
                 Creazione contenuti per il sito web, redazione di articoli
              </li>
              <li className="entry__item">Correzione bozze</li>
              <li className="entry__item">Gestione CMS</li>
              <li className="entry__item">
                 Gestione delle partnership e delle relazioni con gli uffici                stampa
              </li>
              <li className="entry__item">
                Organizzazione di interviste agli autori
              </li>
            </ul>
          </div>
        </div>
        <div className="chisono__leftWrapper"></div>
      </section>
    </div>
  );
}

export default ChiSono;
