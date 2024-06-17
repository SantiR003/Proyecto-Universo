import '../Styles/Home.css'
import { useState, useEffect } from "react";
import '@splinetool/viewer';
import { SistemaSolar } from "./Seccion-solarS.jsx";
import { UniverseData } from "./Seccion-UniverseData.jsx";
import Spline from '@splinetool/react-spline';

export const HomeUniverse = ({ valueToDetails }) => {

    const getInitialSceneContent = () => {
        return window.innerWidth <= 1919
            ? { type: 'image', url: 'world-1348808__340.png' }
            : { type: 'spline', url: "https://prod.spline.design/hDOuM7N7cNB8XfWB/scene.splinecode" };
    };

    const [sceneContent, setSceneContent] = useState(getInitialSceneContent);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const newContent = window.innerWidth <= 1919
                ? { type: 'image', url: 'world-1348808__340.png' }
                : { type: 'spline', url: "https://prod.spline.design/hDOuM7N7cNB8XfWB/scene.splinecode" };
            setSceneContent(newContent);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLoading = () => {
        setLoading(false);
    }

    return (
        <div className="container-home">
            <section className="container-presentacion">
                <div className="text-title">
                    <h1 className="title">Conociendo el cosmos</h1>
                    <div className="text-intro">
                        <p>
                            Según la teoría del Big Bang, hace aproximadamente 13.800 millones de años, el universo experimentó una expansión a partir de una singularidad infinitamente densa y con una temperatura muy elevada. Este evento generó inmensas cantidades de energía y materia, dando lugar al universo observable de hoy en día.
                        </p>
                    </div>
                </div>
                <div id="spline-container">
                    {sceneContent.type === 'spline' ? (
                        <>
                            {loading && (
                                <div className="d-flex justify-content-center personalized-spinner">
                                    <div className="spinner-border text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}
                            <Spline onLoad={handleLoading} scene={sceneContent.url} />
                        </>
                    ) : (
                        <img src={sceneContent.url} alt="world image" />
                    )}
                </div>
            </section>
            <SistemaSolar valueToDetails={valueToDetails} />
            <UniverseData />
        </div>
    );
}