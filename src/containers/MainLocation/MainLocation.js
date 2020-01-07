import React from 'react';
import PropTypes from 'prop-types';
import './MainLocation.css';
import LocationSearch from '../../components/LocationSearch/LocationSearch';
// import Darksky from 'darkskyjs';

const mainLocalization = props => {
    return (
        <div className="main-location">
            <h1>Twoje miasto</h1>
            <LocationSearch />
        </div>
    );
};

mainLocalization.propTypes = {

};

export default mainLocalization;
