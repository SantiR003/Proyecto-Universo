import { NavLink, useLocation } from 'react-router-dom';
import '../Styles/Header.css'
import { useEffect } from 'react';


export const Header = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return (
        <header className={`container-header ${location.pathname === '/home' ? 'home-header' : 'details-header'}`}>
            {location.pathname === '/home' ? (
                <nav>
                    <ul>
                        <li><a href="#" className='elemento-nav'>Inicio</a></li>
                        <li><a href="#container-solarSystem" className='elemento-nav'>Sistema Solar</a></li>
                        <li><a href="#container-universeData" className='elemento-nav'>El Universo</a></li>
                    </ul>
                </nav>
            ) : (
                <nav>
                    <ul>
                        <li><NavLink className='elemento-detailsPage elemento-nav' to='/home'>Inicio</NavLink></li>
                    </ul>
                </nav>
            )
            }
        </header>
    );
};