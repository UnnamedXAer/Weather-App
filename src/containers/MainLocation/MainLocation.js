import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './MainLocation.css';
import ReactTooltip from 'react-tooltip';
import LocationSearch from '../../components/LocationSearch/LocationSearch';
import LocationSearchResults from '../../components/LocationSearch/LocationSearchResults/LocationSearchResults';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { getLocation, getLocationErrorMessage } from '../../utils/geolocation';
import { Redirect } from 'react-router-dom';

const MainLocation = (props) => {

	const [locationText, setLocationText] = useState("");
	
	const locationInputRef = useRef(null);

	useEffect(() => {
		locationInputRef.current.focus();
	}, []);

    const locationTextChangeHandler = (ev) => {
        setLocationText(ev.target.value);
	};
	
	const getGeolocationHandler = async (ev) => {
		let location;
		try {
			location = await getLocation();
			console.log('geolocation ', location);
		}
		catch (err) {
			console.error(getLocationErrorMessage(err));
		}

		props.fetchLocationByCoords(location.coords);
	};

	const selectLocationHandler = (index) => {
		// dispatch setLocation
	}

    return (
        <div className="main-location">
			{props.redirectToCurrentWeather && <Redirect to="/weather-today" />}
			<ReactTooltip delayShow={400} effect="solid" />
            <h1>Search for Your City</h1>
            <LocationSearch 
                valueChanged={locationTextChangeHandler}
				value={locationText}
				geolocationLoading={props.geolocationLoading}
				geolocationDisabled={props.geolocationDisabled}
				locationInputRef={locationInputRef}
				getGeolocation={getGeolocationHandler}
				
            />
			<LocationSearchResults 
				show={true}
				loading={props.searchLoading}
				locations={props.searchResults}
				selectLocation={selectLocationHandler}
			/>
        </div>
    );
};

MainLocation.propTypes = {
	redirectToCurrentWeather: PropTypes.bool,

	searchLoading: PropTypes.bool,
	geolocationLoading: PropTypes.bool,
	geolocationDisabled: PropTypes.bool,

	geolocation: PropTypes.object,
	selectedLocation: PropTypes.object,
	searchResults: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => {
	return {
		redirectToCurrentWeather: state.location.redirectToCurrentWeather,

		selectedLocation: state.location.selectedLocation,
		searchResults: state.location.searchResults,
		searchLoading: state.location.searchLoading,

		geolocation: state.location.geolocation,
		geolocationLoading: state.location.geolocationLoading,
		geolocationDisabled: state.location.geolocationDisabled
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchLocationsByPrefix: (prefix) => dispatch(actions.fetchLocationsByPrefix(prefix)),
		fetchLocationByCoords: (coords) => dispatch(actions.fetchLocationByCoords(coords))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLocation);