import Spline from "@splinetool/react-spline";
import '../../Styles/Details.css'
import { findById } from "../../Services/DetailsService";
import { useState, useEffect } from "react";

export const PlanetDetail = ({ valueToDetails, valueToDetails2 }) => {

    const [planet, setPlanet] = useState({});
    const [sceneContent, setSceneContent] = useState({ type: '', url: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const newSceneContent = window.innerWidth <= 767
            ? { type: 'image', url: planet.imageURL }
            : { type: 'spline', url: planet.modelUrl };

        setSceneContent(newSceneContent);
    }, [planet]);

    const obtainPlanetById = async () => {
        const response = await findById(valueToDetails, valueToDetails2);
        setPlanet(response.data);
    }

    useEffect(() => {
        obtainPlanetById();
    }, []);

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

    return (
        <>
            <div className="container-details">
                <div className="planet-model">
                    {sceneContent.type === 'spline' ? (
                        <>
                            {loading && (<div class="d-flex justify-content-center personalized-spinner">
                                <div class="spinner-border text-light" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>)}
                            <Spline onLoad={handleLoading} className="model" scene={sceneContent.url} />
                            {planet.distanciaALaTierra !== '0' && (
                                <div className="container-button"> {/* Hacer que al darle click al boton comparar, se cambie el texto al nombre del planeta solo.
                                Corregir header y footer. 
                                Añadir un boton de ver mas caracteristicas de cada planeta y sea mas texto interesante de cada uno*/}
                                    <button onClick={handlerScene} className="btn btn-secondary handler-scene" type="button">Comparar con la tierra</button>
                                </div>
                            )}
                        </>
                    ) : (
                        <img src={sceneContent.url} alt="world image" />
                    )}
                </div>
                <div className="data-table">
                    <table className="table table-dark table-personalized table-bordered border-light">
                        <tbody>
                            <tr>
                                <th scope="row">Nombre</th>
                                <td>{planet.nombre}</td>
                            </tr>
                            <tr>
                                <th scope="row">Categoria</th>
                                <td>{planet.categoria}</td>
                            </tr>
                            {valueToDetails2 === 'p' ? (<tr>
                                <th scope="row">Tipo de Planeta</th>
                                <td>{planet.tipoDePlaneta}</td>
                            </tr>
                            ) : (<tr>
                                <th scope="row">Tipo de Estrella</th>
                                <td>{planet.tipoDeEstrella}</td>
                            </tr>)
                            }
                            <tr>
                                <th scope="row">Masa</th>
                                <td>{planet.masa} kg</td>
                            </tr>
                            <tr>
                                <th scope="row">Radio</th>
                                <td>{planet.radio} km</td>
                            </tr>
                            <tr>
                                <th scope="row">Distancia a la Tierra</th>
                                <td>{planet.distanciaALaTierra} km</td>
                            </tr>
                            <tr>
                                <th scope="row">Densidad</th>
                                <td>{planet.densidad} g/cm³</td>
                            </tr>
                            <tr>
                                <th scope="row">Temperatura</th>
                                <td>{planet.temperatura} °C</td>
                            </tr>
                            <tr>
                                <th scope="row">Velocidad</th>
                                <td>{planet.velocidad} km/s</td>
                            </tr>
                            <tr>
                                <th scope="row">Periodo de Rotación</th>
                                <td>{planet.periodoDeRotacion > 24 ? (planet.periodoDeRotacion / 24).toFixed(2) + " días" : planet.periodoDeRotacion + " horas"}</td>
                            </tr>


                            {valueToDetails2 === 'p' ? (<tr>
                                <th scope="row">Periodo Orbital(Sol)</th>
                                <td>{planet.periodoOrbital > 365 ? (planet.periodoOrbital / 365).toFixed(2) + " año/s" : planet.periodoOrbital + " días"}</td>
                            </tr>
                            ) : (<tr>
                                <th scope="row">Periodo Orbital(Via Lactea)</th>
                                <td>{planet.periodoOrbital} millones de años</td>
                            </tr>)
                            }
                            <tr>
                                <th scope="row">Edad</th>
                                <td>{planet.edad} mil millones de años</td>
                            </tr>
                            <tr>
                                <th scope="row">Gravedad</th>
                                <td>{planet.gravedad} m/s²</td>
                            </tr>
                            {valueToDetails2 === 'p' ? (<tr>
                                <th scope="row">Satelite/s Natural/es</th>
                                <td>{planet.orbita}</td>
                            </tr>
                            ) : (<tr>
                                <th scope="row">Planetas en Orbita</th>
                                <td>{planet.orbita}</td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}