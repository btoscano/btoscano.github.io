import data from "../Dati";

function Projects() {
  return  <div className="projects">
            <section className="projects__wrapper">
                <div className="projects__rightWrapper">
                    <h1 className="projects__title">Progetti</h1>
                    <p  className="projects__description">{data.progetti.description}</p>
                    
                    <div className="projects__firstSection">
                        <div className="projects__firstSection__left">
                            <h2 className="projects__firstSection_title"> </h2>
                            <p>
                            </p>
                        </div>
                        <div className="projects__firstSection__right">
                        <img className="projects__img2" src="img_6.jpeg"></img>
                        </div>
                    </div>

                    <div className="projects__secondSection">
                        <div className="projects__firstSection__left">
                            <h2 className="projects__firstSection_title"> Lorem ipsum dolor sit amet</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus, eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus. Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc euismod mi nunc, ut vehicula lorem fermentum a.
                            </p>
                         </div>
                        <div className="projects__firstSection__right">
                        <img className="projects__img2" src="img_2.jpeg"></img>
                        </div>
                    </div>

                    <div className="projects__thirdSection">
                        <div className="projects__firstSection__left">
                            <h2 className="projects__firstSection_title"> Lorem ipsum dolor sit amet</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet nunc fermentum, rhoncus magna vel, ultrices arcu. Nam finibus velit dolor, at semper lorem mattis nec. Phasellus ultricies ante tellus, eget eleifend ex tempus in. Duis pulvinar nulla eu quam malesuada convallis. Ut posuere, odio vel aliquet molestie, nisi eros blandit ligula, vel semper est dolor a nulla. Donec eu blandit metus. Maecenas eu justo accumsan, lobortis tortor non, lacinia ex. Nunc euismod mi nunc, ut vehicula lorem fermentum a.
                            </p>
                         </div>
                        <div className="projects__firstSection__right">
                        <img className="projects__img2" src="img_3.jpeg"></img>
                        </div>
                    </div>


                </div>
                <div className="projects__leftWrapper">
                    <img className="projects__img" src="BeatriceToscano.png"></img>
                </div>

            </section>

      </div>;
}

export default Projects;
