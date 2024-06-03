import { Navigate, Route, Routes } from "react-router-dom";
import { PageUniverse } from "./Components/Page";
import { PlanetDetail } from "./Components/PlanetDetails/Details";
import { useState } from "react";
import { Footer } from "./Components/Footer.jsx";
import { Header } from "./Components/Header";

export const UniverseLanding = () => {

    /* const [data, setData] = useState(0);
    const[data2, setData2] = useState(''); */
 
    const ValueToDetails = (value, secondValue) => {
        /* setData(value);
        setData2(secondValue); */
        localStorage.setItem('value1', value);
        localStorage.setItem('value2', secondValue);
    };

    return (
        <>
            <Routes>
                <Route path="home" element={<PageUniverse valueToDetails={ValueToDetails}/>} />
                <Route path="details" element={<PlanetDetail /* valueToDetails={data}  valueToDetails2 = {data2} */ />} />

                <Route path="/" element={<Navigate to={'/home'} />} />
                <Route path="**" element={<Navigate to={'/home'} />} />
                <Route path="Home" element={<Navigate to={'/home'} />} />
            </Routes>
        </>
    );

}