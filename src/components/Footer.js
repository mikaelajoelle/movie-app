import { getYear } from '../utilities/utilities';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer>
        
        <a href="#0"><img class="footer-logo" src={process.env.PUBLIC_URL + '/dbl-logo.png'} alt="logo"/></a>
        <ul>
            <li>
                <NavLink className="footer-link" to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink className="footer-link" to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink className="footer-link" to={'/favourites'}>Favourites</NavLink>
            </li>
        </ul>

        <ul>
            <li>
                <NavLink className="help-link" to={'/'}>Contact</NavLink>
            </li>
            <li>
                <NavLink className="help-link" to={'/about'}>Help Center</NavLink>
            </li>
            <li>
                <NavLink className="help-link" to={'/favourites'}>Media Center</NavLink>
            </li>
        </ul>

        <div class="educational">
        <p>For Educational Purposes Only</p>
        <p>Mikaela Abrams, &copy; {getYear()}</p>
        </div>
        
    </footer>
);

export default Footer;