import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {

    const NavButton = ({ id, label }) => {
        return (
            <Link to={`/${id}`} className={`navbar-button ${id}`}>
            {label}
            </Link>
        )
    }

    return (
        <div className='navbar-principal-container'>
            <div className="navbar-chips-container">
                <NavButton id="home"   label="Home" />
                <NavButton id="about-me" label="About Me" />
                <NavButton id="experience" label="Experience" />
                <NavButton id="services" label="services" />
                <NavButton id="projects" label="Projects" />
                <NavButton id="contact" label="Contact Me" />
            </div>
        </div>
    )

}
export default Navbar;