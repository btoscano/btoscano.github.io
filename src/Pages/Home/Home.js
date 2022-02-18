import data from "../../Dati";

function Home() {
  return  <div className="home">
            <section className="home__wrapper">

                <div className="home__leftWrapper">
                    <img className="home__img" src={data.home.img}></img>
                </div>

                <div className="home__rightWrapper">
                    <h1 className="home__title">Beatrice Toscano</h1>
                    <p className="home__subtitle">{data.home.subtitle}</p>

                    <p  className="home__description">{data.home.description}</p>

                    <p  className="home__quote"> “{data.home.quote}” </p>

                    <p  className="home__description">{data.home.secondDescription}</p>

                    <hr className="home__line"></hr>

                    <p  className="home__description">{data.home.thirdDescription}</p>

                    <div className="home__images" >
                        <img className="home__imgItem" src={data.home.img1}></img>
                        <img className="home__imgItem" src={data.home.img5}></img>
                        <img className="home__imgItem" src={data.home.img2}></img>
                        <img className="home__imgItem" src={data.home.img3}></img>
                        <img className="home__imgItem" src={data.home.img4}></img>
                    </div>  

                </div>

            </section>


      </div>;
}

export default Home;
