import data from "../../Dati";

import Testimonials from "../../Components/Testimonials/Testimonials";


import parse from 'html-react-parser';

function Parser(props){
    return parse(props.toParse);
}


function Home() {
  return  <div className="home">
    <section className="home__wrapper">

        <div className="home__leftWrapper">
            <img className="home__img" src={data.home.img} alt="Beatrice Toscano smiling" width="50%" height="50%"></img>

            <div className="home__tagsWrapper">
                <p className="home__tags home__tags--color1">#SEO</p>
                <p className="home__tags  home__tags--color3">#MARKETING</p>
                <p className="home__tags home__tags--color4">#SOCIALMEDIA</p>
                <p className="home__tags home__tags--color2">#EDITOR</p>
                <p className="home__tags home__tags--color5">#CMS</p>
                <p className="home__tags home__tags--color6">#WORDPRESS</p>
            </div>
        </div>

        <div className="home__rightWrapper">
            <h1 className="home__title">Beatrice Toscano</h1>
            <p className="home__subtitle">{data.home.subtitle}</p>

            <p  className="home__description">
                <Parser toParse={data.home.description} />
            </p>

            <ul className="home__images" >

              {data.home.imgLinks.map((listitem) => (
                <li className="home__imgItemWrapper" key={listitem.index}>
                    <a className="home__imgItemLink" key={listitem.index} href={listitem.link}>
                    <img className="home__imgItem" src={listitem.img} alt={listitem.altText}></img>
                    </a>
                </li>
              ))}

            </ul>  

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
