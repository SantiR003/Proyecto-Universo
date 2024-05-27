import '../Styles/Home.css'
import { useState, useEffect} from "react";
import '@splinetool/viewer';
import { SistemaSolar } from "./Seccion-solarS.jsx";
import { UniverseData } from "./Seccion-UniverseData.jsx";
import Spline from '@splinetool/react-spline';

export const HomeUniverse = ({valueToDetails}) => {

    const getInitialSceneContent = () => {
        return window.innerWidth <= 767
            ? { type: 'image', url: 'world-1348808__340.webp' }
            : { type: 'spline', url: "https://prod.spline.design/hDOuM7N7cNB8XfWB/scene.splinecode" };
    };

    const [sceneContent, setSceneContent] = useState(getInitialSceneContent);

    useEffect(() => {
        const handleResize = () => {
            const newContent = window.innerWidth <= 767
                ? { type: 'image', url: 'world-1348808__340.webp' }
                : { type: 'spline', url: "https://prod.spline.design/hDOuM7N7cNB8XfWB/scene.splinecode" };
            setSceneContent(newContent);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
        
    return (
        <div className="container-home">
            <section className="container-presentacion">
                <div className="text-title">
                    <h1 className="title">Conociendo el cosmos</h1>
                    <div className="text-intro">
                        <p>Segun la teoria del Big Bang, hace aproximadamente 13.800 millones de años, el universo experimento una expansion a partir de una singularidad infinitamente densa y con una temperatura muy elevada. Este evento generó inmensas cantidades de energia y materia, dando lugar al universo observable de hoy en dia.</p>
                    </div>
                </div>
                <div id="spline-container" style={{ width: '100%', height: '100vh' }}>
                {sceneContent.type === 'spline' ? (
                        <Spline scene={sceneContent.url} />
                    ) : (
                        <img src={sceneContent.url} alt="world image" />
                    )}
                </div>
                
            </section>
            <SistemaSolar valueToDetails={valueToDetails}/>
            <UniverseData/>
        </div>
    );
}