import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
				<Link className="fa-layers fa-fw header__logo" to="/">
					<FontAwesomeIcon icon="cloud-sun-rain" transform="shrink-8 up-9 left-6" />
					<FontAwesomeIcon icon="cloud-moon-rain" transform="shrink-8 up-9 right-6" />
					<FontAwesomeIcon flip="vertical" icon="umbrella" transform="shrink-2"/>
                </Link>
                <nav className="header__nav">
                    <NavLink to="/">Location</NavLink> 
                    <NavLink to="/weather-today">Current Weather</NavLink>
                    <NavLink to="/weather-long-term">Long Term Weather</NavLink>
                </nav>
            </div>
            <div className="header__border-bottom" ></div>
        </header>
    );
};

export default Header;
