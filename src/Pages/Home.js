
function Home() {
  return  <div className="home">
            <section className="section__first">
            <div className="home__textWrapper">
                    <h1 className="home__name">Beatrice Toscano</h1>
                    <p className="home__paragraph">some text in a paragraph</p>
                </div>
                <div className="home__imgWrapper">
                    <img className="home__img" src="BeatriceToscano.png"></img>
                </div>
            </section>
            <section className="section">
                <h2>My projects</h2>
            </section>
            <section className="section">
                <h2>Contact me</h2>
            </section>
      </div>;
}

export default Home;
