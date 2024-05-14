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
                    <h1>Conociendo el cosmos</h1>

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
               <h2>El Sistema Solar</h2>
                <div className="background">
                    <div className="centering">
                        <div className="articles">
                            <article>
                                <figure>
                                <spline-viewer loading="lazy" url="https://prod.spline.design/YVmIIZ1QtWL9ivYO/scene.splinecode"></spline-viewer>                             
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
                                <spline-viewer loading="lazy"  url="https://prod.spline.design/uZYGF-2y2nxhFXye/scene.splinecode"></spline-viewer>                                </figure>
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
                                <spline-viewer loading="lazy" url="https://prod.spline.design/JGddM06htbXQv2ta/scene.splinecode"></spline-viewer>                                </figure>
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
                                <spline-viewer loading="lazy" loading-anim-type="spinner-small-dark" url="https://prod.spline.design/NN2eoKitYY8nV9kI/scene.splinecode"></spline-viewer>                                </figure>
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
                                <spline-viewer loading="lazy" url="https://prod.spline.design/PEyyJc0aeGLXBBNE/scene.splinecode"></spline-viewer>                                </figure>
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
                                <spline-viewer loading="lazy" url="https://prod.spline.design/cYWZfaaUksN3tYL8/scene.splinecode"></spline-viewer>                                </figure>
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
                                <spline-viewer loading="lazy" url="https://prod.spline.design/OdFUCFWUIaQt19OP/scene.splinecode"></spline-viewer>                                </figure>
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
                                <spline-viewer loading="lazy" url="https://prod.spline.design/nCbXHxaVcPORVHCX/scene.splinecode"></spline-viewer>                                </figure>
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
                                <spline-viewer loading="lazy" url="https://prod.spline.design/D-N5G1UZ3pyEitWJ/scene.splinecode"></spline-viewer>                                </figure>
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