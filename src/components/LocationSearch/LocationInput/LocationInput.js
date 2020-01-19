import React from 'react';
import './LocationInput.css';
import PropTypes from 'prop-types';

const LocationInput = ({ value, valueChanged, inputRef }) => {
    return <input 
        className="location-input"
        data-tip={`To make it more precise put the city's name, comma, 2-letter country code.<br />The order is important - the first is city name then comma then country. Example - London, GB or New York, US.`}
        id="location"
        autoComplete="off"
        type="text"
        name="location"
        ref={inputRef}
        value={value}
        onChange={valueChanged}
        required
        placeholder="Type Your City"
    />;
};

LocationInput.propTypes = {
    value: PropTypes.string,
    valueChanged: PropTypes.func,
    inputRef: PropTypes.object
}

export default LocationInput;