import data from "../../Dati";

import Testimonials from "../../Components/Testimonials/Testimonials";
import Row from '../../Components/Row/Row.js'
import Column from '../../Components/Column/Column.js'
import Line from '../../Components/Line/Line.js'
import GroupImgs from '../../Components/GroupImgs/GroupImgs.js'


import parse from 'html-react-parser';

function Parser(props){
    return parse(props.toParse);
}


function Home() {
  return  <div className="home">

    <Row>
        <Column size={4} center sticky paddingBottom bgColor>
            <img className="home__img" src={data.home.img} alt="Beatrice Toscano smiling" width="50%" height="50%"></img>
            <div className="home__tagsWrapper">
                <p className="home__tags home__tags--color1">#SEO</p>
                <p className="home__tags  home__tags--color3">#MARKETING</p>
                <p className="home__tags home__tags--color4">#SOCIALMEDIA</p>
                <p className="home__tags home__tags--color2">#EDITOR</p>
                <p className="home__tags home__tags--color5">#CMS</p>
                <p className="home__tags home__tags--color6">#WORDPRESS</p>
            </div>
        </Column>
        <Column size={8} paddingLR>
            <h1 className="home__title">Beatrice Toscano</h1>
            <p className="home__subtitle">{data.home.subtitle}</p>

            <p  className="home__description">
                <Parser toParse={data.home.description} />
            </p>

            <GroupImgs source={data.home.imgLinks}></GroupImgs>

            <Line></Line>

            <h2 className="home__sectionTitle">{data.home.sectionTitle}</h2>

            {/* <p  className="home__description">
                <Parser toParse={data.home.secondDescription} />
            </p> */}

            <div  className="home__description">
                <Parser toParse={data.home.thirdDescription} />
            </div>

            <Line></Line>

            <p  className="home__quote"> “{data.home.quote}” </p>

            <Line></Line>

            <h2 className="home__sectionTitle">{data.testimonials.title}</h2>
{/* 
            <p  className="home__description">
                <Parser toParse={data.testimonials.description} />
            </p> */}

            <Testimonials source={data.testimonials.list} />

        </Column>
    </Row>

  </div>;
}

export default Home;
