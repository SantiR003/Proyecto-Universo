import Spline from "@splinetool/react-spline";
import '../../Styles/Details.css'
import { findById } from "../../Services/DetailsService.js";
import { useState, useEffect } from "react";
import { Header } from "../Header.jsx";
import { Footer } from "../Footer.jsx";

export const PlanetDetail = (/* { valueToDetails, valueToDetails2 } */) => {

    const [planet, setPlanet] = useState({});
    const [sceneContent, setSceneContent] = useState({ type: '', url: '' });
    const [loading, setLoading] = useState(true);
    const [Info, setInfo] = useState(1);
    const valueToDetails = localStorage.getItem('value1');
    const valueToDetails2 = localStorage.getItem('value2');

    useEffect(() => {
        if (planet.modelUrl && planet.imageURL) {
            const newSceneContent = window.innerWidth <= 1919
                ? { type: 'image', url: planet.imageURL }
                : { type: 'spline', url: planet.modelUrl };

            setSceneContent(newSceneContent);
        }
    }, [planet]);

    useEffect(() => {
        const obtainPlanetById = async () => {
            const response = await findById(valueToDetails, valueToDetails2);
            setPlanet(response.data);
        };

        obtainPlanetById();
    }, []);



    const planetText = {
        Sol: `Nuestro Sol, la estrella central de nuestro sistema solar, fue descubierto y observado por civilizaciones antiguas,
        siendo objeto de culto y estudio desde tiempos remotos. Se compone principalmente de hidrógeno y helio, con pequeñas
        cantidades de otros elementos. Aunque no posee satélites naturales, su actividad solar, como las manchas solares y las
        eyecciones de masa coronal, impactan directamente en la vida en la Tierra, afectando las comunicaciones y el clima
        espacial. Su energía es esencial para mantener la vida en nuestro planeta y ha sido fuente de inspiración y estudio
        científico durante siglos.`,

        Mercurio: `Mercurio, el planeta más cercano al Sol, fue conocido desde la antigüedad. Fue observado por los antiguos
        astrónomos, pero su verdadera naturaleza y órbita fueron comprendidas con el advenimiento de la astronomía moderna.
        Está compuesto principalmente de rocas y metales, con una superficie marcada por cráteres de impacto y acantilados.
        A pesar de su proximidad al Sol, Mercurio tiene agua helada en sus cráteres polares permanentemente en sombra. No
        posee satélites naturales conocidos.`,

        Venus: `Venus, el segundo planeta del sistema solar, fue objeto de estudio desde la antigüedad. Su brillante apariencia
        en el cielo nocturno lo convirtió en un objeto de observación para muchas culturas. Está compuesto principalmente de
        dióxido de carbono y nitrógeno, con densas nubes de ácido sulfúrico que cubren su superficie. Aunque no tiene
        satélites naturales, su atmósfera está llena de fenómenos interesantes, como la super-rotación, donde su atmósfera
        tarda solo cuatro días en girar alrededor del planeta, a pesar de que su rotación es mucho más lenta.`,

        Tierra: `La Tierra, nuestro hogar, ha sido estudiada y habitada por la humanidad desde tiempos prehistóricos. Conocida por
        su diversidad biológica y su única atmósfera rica en oxígeno, la Tierra es el único planeta conocido que alberga vida.
        Su composición rocosa y metálica ha sido moldeada por procesos geológicos y biológicos a lo largo de millones de años.
        Además de la Luna, la Tierra tiene miles de satélites artificiales en órbita, utilizados para una variedad de
        propósitos, desde la comunicación hasta la observación del clima y la navegación.`,

        Marte: `Marte, el planeta rojo, ha fascinado a la humanidad durante siglos. Fue objeto de observación por parte de
        civilizaciones antiguas, pero su verdadera naturaleza y su posibilidad de albergar vida capturaron la imaginación
        humana. Está compuesto principalmente de rocas y óxidos metálicos, con una fina atmósfera de dióxido de carbono.
        Marte tiene dos satélites naturales, Fobos y Deimos, que probablemente sean asteroides capturados. Además de su
        geología intrigante, Marte es objeto de investigación para futuras misiones de exploración y posible colonización
        humana.`,

        Júpiter: `Júpiter, el gigante gaseoso, ha sido observado durante siglos por astrónomos aficionados y profesionales
        por igual. Es conocido por sus impresionantes bandas atmosféricas y la Gran Mancha Roja, una gigantesca tormenta
        que ha durado siglos. Está compuesto principalmente de hidrógeno y helio, con una densa atmósfera de nubes de
        amoníaco y metano. Júpiter tiene 79 satélites naturales conocidos, siendo los más destacados las lunas de Galileo,
        Io, Europa, Ganimedes y Calisto. Además, su magnetosfera extensa y poderosa lo convierte en un protector natural
        contra las radiaciones cósmicas en el sistema solar.`,

        Saturno: `Saturno, conocido por sus impresionantes anillos, ha sido objeto de estudio y fascinación desde la antigüedad.
        Es un gigante gaseoso compuesto principalmente de hidrógeno y helio, con densas nubes de amoníaco en su atmósfera.
        Sus anillos, compuestos principalmente de partículas de hielo y roca, son el resultado de la fragmentación de lunas
        o la captura de cometas. Saturno tiene 82 satélites naturales conocidos, siendo los más destacados Titán, el único
        satélite en el sistema solar con una atmósfera densa, y Encélado, que tiene géiseres de agua en su polo sur.`,

        Urano: `Urano, el gigante helado, fue descubierto en 1781 por el astrónomo William Herschel. Es un mundo misterioso,
        con una inclinación extrema de su eje que lo hace girar casi de lado. Está compuesto principalmente de hielo de agua,
        metano y amoníaco en su atmósfera. Urano tiene 27 satélites naturales conocidos, siendo el más destacado Miranda,
        que muestra signos de actividad geológica pasada y presente.`,

        Neptuno: `Neptuno, el gigante helado más distante del Sol, fue descubierto en 1846 por el matemático francés Urbain
        Le Verrier y el astrónomo alemán Johann Galle. Está compuesto principalmente de hielo de agua, amoníaco y metano,
        con una atmósfera dinámica llena de vientos huracanados y tormentas. Neptuno tiene 14 satélites naturales conocidos,
        siendo el más destacado Tritón, que tiene una órbita retrógrada y podría ser un objeto capturado del Cinturón de
        Kuiper, lo que lo convierte en uno de los mundos más intrigantes del sistema solar`
    };

    const handlerScene = () => {
        setLoading(true);
        if (sceneContent.url === planet.modelUrl) {
            setSceneContent({ type: 'spline', url: planet.modelCompareUrl });
        } else {
            setSceneContent({ type: 'spline', url: planet.modelUrl });
        }
    }

    const handleLoading = () => {
        setLoading(false);
    }

    const handleInfo = () => {
        if (Info === 1) {
            setInfo(2);
        }
        else {
            setInfo(1);
        }
    }

    return (
        <>
            <Header />
            <div className="container-details">
                <div className="subcontainer-page">
                    <div className="subcontainer-details">
                        <div className="planet-model">
                            {sceneContent.type === 'spline' ? (
                                <>
                                    {loading && (
                                        <div className="d-flex justify-content-center personalized-spinner">
                                            <div className="spinner-border text-light" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    )}
                                    <Spline onLoad={handleLoading} className="model" scene={sceneContent.url} />
                                    {planet.distanciaALaTierra !== '0' && (
                                        <div className="container-button">
                                            <button onClick={handlerScene} className="btn btn-secondary handler-scene" type="button">
                                                {planet.modelCompareUrl !== sceneContent.url ? 'Comparar con la tierra' : 'Volver'}
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                {loading && (
                                        <div className="d-flex justify-content-center personalized-spinner">
                                            <div className="spinner-border text-light" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    )}
                                <img onLoad={handleLoading} loading="eager" src={sceneContent.url} alt="" />
                                </>
                            )}
                        </div>
                        <div className="container-information">
                            {Info === 1 ? (
                                <div className="data-table">
                                    <table className="table table-dark table-personalized table-bordered border-light">
                                        <tbody>
                                            <tr><th scope="row">Nombre</th><td>{planet.nombre}</td></tr>
                                            <tr><th scope="row">Categoria</th><td>{planet.categoria}</td></tr>
                                            {valueToDetails2 === 'p' ? (
                                                <tr><th scope="row">Tipo de Planeta</th><td>{planet.tipoDePlaneta}</td></tr>
                                            ) : (
                                                <tr><th scope="row">Tipo de Estrella</th><td>{planet.tipoDeEstrella}</td></tr>
                                            )}
                                            <tr><th scope="row">Masa</th><td>{planet.masa} kg</td></tr>
                                            <tr><th scope="row">Radio</th><td>{planet.radio} km</td></tr>
                                            <tr><th scope="row">Distancia a la Tierra</th><td>{planet.distanciaALaTierra} km</td></tr>
                                            <tr><th scope="row">Densidad</th><td>{planet.densidad} g/cm³</td></tr>
                                            <tr><th scope="row">Temperatura</th><td>{planet.temperatura} °C</td></tr>
                                            <tr><th scope="row">Velocidad</th><td>{planet.velocidad} km/s</td></tr>
                                            <tr>
                                                <th scope="row">Periodo de Rotación</th>
                                                <td>{planet.periodoDeRotacion > 24 ? `${Math.round(planet.periodoDeRotacion / 24).toFixed()} días` : `${Math.round(planet.periodoDeRotacion)} horas`}</td>
                                            </tr>
                                            {valueToDetails2 === 'p' ? (
                                                <tr>
                                                    <th scope="row">Periodo Orbital(Sol)</th>
                                                    <td>{planet.periodoOrbital > 365 ? `${Math.round(planet.periodoOrbital / 365)} año/s` : `${Math.round(planet.periodoOrbital)} días`}</td>
                                                </tr>
                                            ) : (
                                                <tr>
                                                    <th scope="row">Periodo Orbital(Via Lactea)</th>
                                                    <td>{planet.periodoOrbital} millones de años</td>
                                                </tr>
                                            )}
                                            <tr><th scope="row">Edad</th><td>{planet.edad} mil millones de años</td></tr>
                                            <tr><th scope="row">Gravedad</th><td>{planet.gravedad} m/s²</td></tr>
                                            {valueToDetails2 === 'p' ? (
                                                <tr><th scope="row">Satelite/s Natural/es</th><td>{planet.orbita}</td></tr>
                                            ) : (
                                                <tr><th scope="row">Planetas en Orbita</th><td>{planet.orbita}</td></tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="container-dataText">
                                    <div className="title-dataText">
                                        {planet.nombre}
                                    </div>
                                    <div className="body-dataText">
                                        <p style={{ color: "white" }} id="text-details">
                                            {planet.nombre ? planetText[planet.nombre] : ''}
                                        </p>
                                    </div>
                                </div>
                            )}
                            <div className="container-button">
                                <button onClick={handleInfo} className="btn btn-secondary handler-scene" type="button">
                                    {Info === 1 ? 'Acerca del planeta' : 'Datos Técnicos'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-footer-details">
                <Footer />
            </div>
        </>
    );
}