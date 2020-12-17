

// Nav
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink className="router-link" to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink className="router-link" to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink className="router-link" to={'/favourites'}>Favourites</NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;

// className="tags"