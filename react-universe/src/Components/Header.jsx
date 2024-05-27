import { NavLink, useLocation } from 'react-router-dom';
import '../Styles/Header.css'

export const Header = () => {

    const location = useLocation();
    return (
        <header className='container-header'>
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
                        <li><NavLink className={'toHome elemento-nav'} to={'/home'}>Inicio</NavLink></li>
                    </ul>
                </nav>
            )
            }
        </header>
    );
};