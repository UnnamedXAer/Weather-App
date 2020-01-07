import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './LocationSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LocationSearch = ({ value, valueChanged }) => {

    let overlayTextClass = "";

    const focusHandler = (ev) => {
        overlayTextClass = "focused";
    }

    const blurHandler = (ev) => {
        overlayTextClass = "";
    }

    return (
        <section className="location-search">
            <span className="location-search__container">
            
                <input 
                    id="location"
                    className="location-search__input"
                    autoComplete="off"
                    type="text"
                    name="location"
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    value={value}
                    onChange={valueChanged}
                    required
                    />
                <label className={["location-search__label", overlayTextClass].join(" ")} htmlFor="location">
                    <span className="location-search__label-text">Wpisz nazwę miejscowości</span>
                </label>
            </span>
            <button className="location-search__marker"><FontAwesomeIcon icon="map-marker-alt" /></button>
        </section>
    );
};

LocationSearch.propTypes = {

};

export default LocationSearch;