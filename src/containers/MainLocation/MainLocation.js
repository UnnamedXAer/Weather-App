import React from 'react';
import PropTypes from 'prop-types';
import './MainLocation.css';
import ReactTooltip from 'react-tooltip';
import LocationSearch from './LocationSearch/LocationSearch';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const MainLocation = (props) => {

    return (
        <section className="main-location">
			{props.redirectToCurrentWeather && <Redirect to="/weather-today" />}
			<ReactTooltip delayShow={400} effect="solid" multiline={true} />
            <h1>Search for Your City</h1>
            <LocationSearch />
        </section>
    );
};

MainLocation.propTypes = {
	redirectToCurrentWeather: PropTypes.bool,
};

const mapStateToProps = (state) => {
	return {
		redirectToCurrentWeather: state.location.redirectToCurrentWeather
	};
};

export default connect(mapStateToProps)(MainLocation);