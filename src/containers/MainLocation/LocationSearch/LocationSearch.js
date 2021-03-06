import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './LocationSearch.css';
import LocationInput from '../../../components/LocationSearch/LocationInput/LocationInput';
import LocationSearchResults from '../../../components/LocationSearch/LocationSearchResults/LocationSearchResults';
import Spinner from '../../../components/UI/Spinner';
import Button from '../../../components/UI/Button';
import gpsIcon from '../../../assets/images/gps.svg';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { getLocation, getLocationErrorMessage } from '../../../utils/geolocation';

const LocationSearch = (props) => {

	const [locationText, setLocationText] = useState("");
	const [showResults, setShowResults] = useState(false);
	
	const locationInputRef = useRef(null);
	let suggestionsCheckTimeoutRef = useRef(null);

	useEffect(() => {
		locationInputRef.current.focus();
	}, []);

    const locationTextChangeHandler = (ev) => {

		clearTimeout(suggestionsCheckTimeoutRef.current);

		const { value } = ev.target;
		setLocationText(value);

		const trimmedValue = value.trimLeft();
		if (trimmedValue.length > 1) {
			suggestionsCheckTimeoutRef.current = setTimeout(() => {
				setShowResults(true);
				props.fetchLocationsByPrefix(trimmedValue, 0);
			}, 700);
		}
	};
	
	const getGeolocationHandler = async (ev) => {
		let location;
		try {
			location = await getLocation();
		}
		catch (err) {
			console.error(getLocationErrorMessage(err));
		}

		props.fetchLocationByCoords(location.coords);
	};

	const changePageHandler = (offset) => {
		const trimmedValue = locationText.trimLeft();
		props.fetchLocationsByPrefix(trimmedValue, offset);
	};

	const selectLocationHandler = (index) => {
		const location = props.searchResults[index];
		props.setCurrentLocation(location);
		props.setRedirectToCurrentWeather(true);
	};

    return (
        <section className="location-search">
			<div className="location-search__container">
				<div className="location-search__input-container">
					<LocationInput 
						inputRef={locationInputRef}
						value={locationText}
						valueChanged={locationTextChangeHandler}
					/>
					<div className="location-search__gps">
						{props.geolocationLoading ? <Spinner /> :						
							<Button 
								data-tip="Use Your position"
								onClick={getGeolocationHandler} 
								disabled={props.geolocationDisabled}
							>
								<svg>
									<use xlinkHref={`${gpsIcon}#gps_icon`} />	
								</svg>
							</Button>
						}
					</div>
				</div>
			</div>
			<LocationSearchResults 
				show={showResults}
				loading={props.searchLoading}
				error={props.searchError}
				locations={props.searchResults}
				offsetInfo={props.searchMetadata}
				selectLocation={selectLocationHandler}
				changePage={changePageHandler}
			/>
        </section>
    );
};

LocationSearch.propTypes = {
	geolocationLoading: PropTypes.bool,	
	geolocationDisabled: PropTypes.bool,	
	searchMetadata: PropTypes.object,	
	searchLoading: PropTypes.bool,	
	searchResults: PropTypes.array,	
	searchError: PropTypes.string,	
	
	fetchLocationsByPrefix: PropTypes.func,
	fetchLocationByCoords: PropTypes.func,
	setCurrentLocation: PropTypes.func,
	setRedirectToCurrentWeather: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		geolocationLoading: state.location.geolocationLoading,
		geolocationDisabled: state.location.geolocationDisabled,
		searchMetadata: state.location.searchMetadata,
		searchLoading: state.location.searchLoading,
		searchResults: state.location.searchResults,
		searchError: state.location.searchError
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchLocationsByPrefix: (prefix, offset) => dispatch(actions.fetchLocationsByPrefix(prefix, offset)),
		fetchLocationByCoords: (coords) => dispatch(actions.fetchLocationByCoords(coords)),
		setCurrentLocation: (location) => dispatch(actions.setCurrentLocation(location)),
		setRedirectToCurrentWeather: (shouldRedirect) => dispatch(actions.setRedirectToCurrentWeather(shouldRedirect))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);