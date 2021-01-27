// Header

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';



const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }
   
    const isDesktop = (e) => {
        if(e.matches){
            setNavOpen(false);
        }
    }
    
    useEffect(() => {
          let mediaQuery = window.matchMedia('(min-width: 600px)');
          mediaQuery.addListener(isDesktop);
          // this is the cleanup function to remove the listener
          return () => mediaQuery.removeListener(isDesktop);
    }, []);

    return (
        <header className={navOpen ? 'show' : undefined}>
           <NavLink className="logo-link" to={'/'}><img src={process.env.PUBLIC_URL + '/dbl-logo.png'} alt="dbl feature logo"/></NavLink>
            {/**
             * HTML for the Hamburger icon modified from HTMl 
             * found at this codepen:
             * https://codepen.io/RRoberts/pen/ZBYaJr
             */}
            <button className="btn-main-nav" 
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={showHideNav}>
                <span className="hamburger-icon">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
                <span className="sr-only">Menu</span>
            </button>
            <Nav />
            
        </header>
    );
}

export default Header;