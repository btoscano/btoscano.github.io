import data from "../../Dati";
import parse from 'html-react-parser';

function Parser(props){
    return parse(props.toParse);
}


function Testimonials({ source }) {
    return (
      <>
        {source ? (
          <ul className="testimonial__list">
            {[...source].reverse().map((listitem) => (
              <li className="testimonial__item" key={listitem.index}>
                  <p>{listitem.description} </p>
                  <p className="testimonial__person" >- {listitem.person} </p>
              </li>
            ))}
          </ul>
        ) : null}
      </>
    );
  }

function Home() {
  return  <div className="home">
            <section className="home__wrapper">

                <div className="home__leftWrapper">
                    <img className="home__img" src={data.home.img}></img>
                </div>

                <div className="home__rightWrapper">
                    <h1 className="home__title">Beatrice Toscano</h1>
                    <p className="home__subtitle">{data.home.subtitle}</p>

                    <p  className="home__description">
                        <Parser toParse={data.home.description} />
                    </p>

                    <div className="home__images" >
                      <a className="home__imgItemWrapper"  href={data.home.link1}>
                      <img className="home__imgItem" src={data.home.img1}></img>
                      </a>       
                      
                      <a className="home__imgItemWrapper"  href={data.home.link2}>
                      <img className="home__imgItem" src={data.home.img2}></img>
                      </a>   

                      <a className="home__imgItemWrapper"  href={data.home.link3}>
                      <img className="home__imgItem" src={data.home.img3}></img>
                      </a>

                      <a className="home__imgItemWrapper"  href={data.home.link4}>
                      <img className="home__imgItem" src={data.home.img4}></img>
                      </a>    

                      <a className="home__imgItemWrapper"  href={data.home.link5}>
                      <img className="home__imgItem" src={data.home.img5}></img>
                      </a>     

                      <a className="home__imgItemWrapper"  href={data.home.link6}>
                      <img className="home__imgItem" src={data.home.img6}></img>
                      </a>
 
                    </div>  

                    <hr className="home__line"></hr>

                    <h2 className="home__sectionTitle">{data.home.sectionTitle}</h2>

                    <p  className="home__description">
                        <Parser toParse={data.home.secondDescription} />
                    </p>

                    <div  className="home__description">
                        <Parser toParse={data.home.thirdDescription} />
                    </div>

                    <hr className="home__line"></hr>

                    <p  className="home__quote"> “{data.home.quote}” </p>

                    <hr className="home__line"></hr>

                    <h2 className="home__sectionTitle">{data.testimonials.title}</h2>

                    <p  className="home__description">
                        <Parser toParse={data.testimonials.description} />
                    </p>

                    <Testimonials source={data.testimonials.list} />

                </div>

            </section>


      </div>;
}

export default Home;
