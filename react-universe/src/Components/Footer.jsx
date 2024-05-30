import '../Styles/footer.css';
import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Footer = () => {

    const location = useLocation();

    const back = () =>{
       window.scrollTo(0,0);
    }

    return (
        <div className="contenedor-footer">
            <div className="texto-footer">
                <p>© 2024<NavLink className={'footer-styles'}  to={location.pathname !== '/home' ? '/home' : back()}>Santiago Rubini</NavLink></p>
            </div>
        </div>
    );
}