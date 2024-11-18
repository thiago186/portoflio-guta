import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({ theme }) => {
    console.log('Navbar theme:', theme);
    const NavButton = ({ id, label, theme }) => {
        return (
            <Link to={`/${id}`} className={`navbar-button ${id} ${theme == 'light' ? 'light' : 'dark'}`}>
            {label}
            </Link>
        )
    }

    return (
        <div className='navbar-principal-container'>
            <div className="navbar-chips-container">
                <NavButton id="home"   label="Home" theme={theme}/>
                <NavButton id="about-me" label="About Me" theme={theme}/>
                <NavButton id="experience" label="Experience" theme={theme}/>
                <NavButton id="services" label="services" theme={theme}/>
                <NavButton id="projects" label="Projects" theme={theme}/>
                <NavButton id="contact" label="Contact Me" theme={theme}/>
            </div>
        </div>
    )

}
export default Navbar;