import { getYear } from '../utilities/utilities';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer>
        
        <NavLink className="logo-link" to={'/'}><img class="footer-logo" src={process.env.PUBLIC_URL + '/dbl-logo.png'} alt="dbl feature logo"/></NavLink>
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
                <NavLink className="help-link" to={'#0'}>Contact</NavLink>
            </li>
            <li>
                <NavLink className="help-link" to={'#0'}>Help Center</NavLink>
            </li>
            <li>
                <NavLink className="help-link" to={'#0'}>Media Center</NavLink>
            </li>
        </ul>

        <div class="educational">
        <p>For Educational Purposes Only</p>
        <p>Mikaela Abrams, &copy; {getYear()}</p>
        </div>
        
    </footer>
);

export default Footer;