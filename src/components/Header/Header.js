import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const header = props => {
    return (
        <header className="header">
            <div className="header__container">
                <Link className="header__logo" to="/">
                    <FontAwesomeIcon icon="umbrella" />
                </Link>
                <nav className="header__nav">
                    <NavLink to="/">Szukaj Pogody</NavLink> 
                    <NavLink to="/weather-today">Pogoda na dziś</NavLink>
                    <NavLink to="/weather-long-term">Pogoda długoterminowa</NavLink>
                </nav>
            </div>
            <div className="header__border-bottom" ></div>
        </header>
    )
}

header.propTypes = {

};

export default header;
