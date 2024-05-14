import Spline from "@splinetool/react-spline"
import '../Styles/Home.css'
import { useState, useEffect, lazy } from "react";
import '@splinetool/viewer';

export const HomeUniverse = () => {

    const getInitialSceneLink = () => {
        return window.innerWidth <= 767
            ? 'https://prod.spline.design/bO1zH3O5l23k9h2T/scene.splinecode'
            : 'https://prod.spline.design/hDOuM7N7cNB8XfWB/scene.splinecode';
    };

    const [modeloCargado, setModeloCargado] = useState(false);
    const [sceneLink, setSceneLink] = useState(getInitialSceneLink);
    useEffect(() => {
        const handleResize = () => {
            const newSceneLink = window.innerWidth <= 767 ? 'https://prod.spline.design/bO1zH3O5l23k9h2T/scene.splinecode' : 'https://prod.spline.design/hDOuM7N7cNB8XfWB/scene.splinecode';
            setSceneLink(newSceneLink);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  const handleModelLoad = () => {
    setModeloCargado(true);
  };
    


    return (

        <div className="container-home">

            <section className="container-presentacion">
                <div className="text-title">
                    <h1 className="title">Conociendo el cosmos</h1>

                    <div className="text-intro">
                        <p>Segun la teoria del Big Bang, hace aproximadamente 13.800 millones de años, el universo experimento una expansion a partir de una singularidad infinitamente densa y con una temperatura muy elevada. Este evento generó inmensas cantidades de energia y materia, dando lugar al universo observable de hoy en dia.</p>
                    </div>
                </div>
                <div className="container-earth">
                   {/*  {!modeloCargado && <div id="loadingMessage">Cargando...</div>} */}
                    <Spline loading="eager" scene={sceneLink}  /*  onLoad={handleModelLoad} *//>
                </div>
            </section>
            <section className="container-solarSystem">
               <h2 className="title subTitle">El Sistema Solar</h2>
                <div className="background">
                    <div className="centering">
                        <div className="articles">
                            <article>
                                <figure>
                                <img className="sol" src="public\sol-removebg-preview.png" alt="" />                             
                                </figure>
                                <div className="article-preview">
                                    <h2>SOL</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        <a href="#" className="read-more" title="Read More">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </article>
                            <article>
                                <figure>
                                    <img src="public\el-planeta-mercurio_c7bafef8_1280x720-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Mercurio</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        <a href="#" className="read-more" title="Read More">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </article>
                            <article>
                                <figure>
                                    <img src="public\Venus_globe-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Venus</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        <a href="#" className="read-more" title="Read More">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </article>
                            <article>
                                <figure>
                                <img className="tierra" src="public\world-1348808__340.webp" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Tierra</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        <a href="#" className="read-more" title="Read More">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </article>
                            <article>
                                <figure>
                                    <img className="marte" src="public\Schiaparelli_Hemisphere_Enhanced-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Marte</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        <a href="#" className="read-more" title="Read More">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </article>
                            <article>
                                <figure>
                                    <img className="jupiter" src="public\Jupiter-removebg-preview.png" alt="" /> 
                                </figure>
                                <div className="article-preview">
                                    <h2>Júpiter</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        <a href="#" className="read-more" title="Read More">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </article>
                            <article>
                                <figure>
                                    <img className="saturno" src="public\saturno-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Saturno</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        <a href="#" className="read-more" title="Read More">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </article>
                            <article>
                                <figure>
                                    <img src="public\Uranus-removebg-preview.png" alt="" />
                                </figure>
                                <div className="article-preview">
                                    <h2>Urano</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        <a href="#" className="read-more" title="Read More">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </article>
                            <article>
                                <figure>
                                    <img className="neptuno" src="public\Neptuno-removebg-preview.png" alt="" />                 
                                 </figure>
                                <div className="article-preview">
                                    <h2>Neptuno</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Praesent in mauris eu tortor porttitor accumsan.
                                        <a href="#" className="read-more" title="Read More">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section>
               
            </section>
        </div>
    );
}