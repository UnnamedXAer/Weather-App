import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MainLocation.css';
import LocationSearch from '../../components/LocationSearch/LocationSearch';
// import Darksky from 'darkskyjs';


const MainLocation = (props) => {

    const [locationText, setLocationText] = useState("");

    const locationTextChangeHandler = (ev) => {
        setLocationText(ev.target.value);
    }

    return (
        <div className="main-location">
            <h1>Twoje miasto</h1>
            <LocationSearch 
                valueChanged={locationTextChangeHandler}
                value={locationText}
            />
        </div>
    );
};

MainLocation.propTypes = {

};

export default MainLocation;
