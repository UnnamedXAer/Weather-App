import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './WeatherToday.css';
import { Link } from 'react-router-dom';
import WeatherTodayDetails from '../../components/WeatherTodayDetails/WeatherTodayDetails';
import { connect } from 'react-redux'
import * as actions from '../../store/actions';
import { addUnits } from '../../utils/units';

const WeatherToday = ({ setRedirectToCurrentWeather, location, weatherData, fetchCurrentWeather }) => {
console.log('weatherData', weatherData)

	// useEffect(() => {
	// 	if (location) {
	// 		fetchCurrentWeather(location);
	// 	}
	// }, [location, fetchCurrentWeather]);

    useEffect(() => {
        setRedirectToCurrentWeather(false);
	}, [setRedirectToCurrentWeather]);

	let content;
	if (location) {
		const iconSrc = `http://openweathermap.org/img/wn/${weatherData.imgName}@2x.png`;
		content = <>
			<section className="weather-today__container">
				<h1>{location.city}{(location.country ? `, ${location.country}` : (location.countryCode ? `, ${location.countryCode}` : ""))}</h1>
				<section className="weather-today__temperature">
					<div>
						<p>Current temperature: <strong>{addUnits(weatherData.temperature.main)}</strong></p>
						<p>Feels Like: <strong>{addUnits(weatherData.temperature.feelsLike)}</strong></p>
					</div>
					<div className="weather-today__icon">
						<img src={iconSrc} alt={weatherData.shortDescription} />
					</div>
				</section>
			</section>
			<WeatherTodayDetails location={location} weatherData={weatherData} />
		</>
	}
	else {
		content = <p>Please go to <Link to="/">Location</Link> and select location first.</p>
	}

	return (
		<div className="weather-today">
			<h1>Weather Today</h1>
			{content}
		</div>
	);
};

WeatherToday.propTypes = {
	setRedirectToCurrentWeather: PropTypes.func,
	
	location: PropTypes.object,
	weatherData: PropTypes.object
};

const mapStateToProps = (state) => ({
	location: state.location.currentLocation,
	weatherData: state.weather.currentWeather
});

const mapDispatchToProps = dispatch => {
    return {
		setRedirectToCurrentWeather: (shouldRedirect) => dispatch(actions.setRedirectToCurrentWeather(shouldRedirect)),
		fetchCurrentWeather: (location) => dispatch(actions.fetchCurrentWeather(location))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);