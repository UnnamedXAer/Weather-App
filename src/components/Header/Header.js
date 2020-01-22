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
                    <FontAwesomeIcon flip="vertical" icon="umbrella" transform="shrink-2" />
                </Link>
                <nav className="header__nav">
                    <NavLink to="/"
                        exact
                        className="header__nav-item"
                        activeClassName="header__nav-item--active">Location</NavLink>
                    <NavLink to="/weather-today"
                        exact
                        className="header__nav-item"
                        activeClassName="header__nav-item--active">Current Weather</NavLink>
                    <NavLink to="/weather-long-term"
                        exact
                        className="header__nav-item"
                        activeClassName="header__nav-item--active">Long Term Weather</NavLink>
                </nav>
            </div>
            <div className="header__border-bottom" ></div>
        </header>
    );
};

export default Header;
