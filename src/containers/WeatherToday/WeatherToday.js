import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './WeatherToday.css';
import { Link } from 'react-router-dom';
import WeatherTodayDetails from '../../components/WeatherTodayDetails/WeatherTodayDetails';
import { connect } from 'react-redux'
import * as actions from '../../store/actions';
import { addUnits } from '../../utils/units';

const WeatherToday = ({ setRedirectToCurrentWeather, location, currentWeather, fetchCurrentWeather }) => {

	useEffect(() => {
		if (location) {
			fetchCurrentWeather(location);
		}
	}, [location, fetchCurrentWeather]);

    useEffect(() => {
        setRedirectToCurrentWeather(false);
	}, [setRedirectToCurrentWeather]);

	let content;
	if (location) {
		if (currentWeather) {
			const { weatherData } = currentWeather;
			const iconSrc = `http://openweathermap.org/img/wn/${weatherData.imgName}@2x.png`;
			content = <>
				<section className="weather-today__container">
					<h1>{location.city}{(location.country ? `, ${location.country}` : (location.countryCode ? `, ${location.countryCode}` : ""))}</h1>
					<section className="weather-today__temperature">
						<div>
							<p>Current temperature: <strong style={{fontSize: '1.4em'}}>{addUnits(weatherData.temperature.main)}</strong></p>
							<p>Feels Like: <strong>{addUnits(weatherData.temperature.feelsLike)}</strong></p>
						</div>
						<div className="weather-today__icon">
							<img src={iconSrc} alt={weatherData.shortDescription} />
						</div>
					</section>
				</section>
				<WeatherTodayDetails location={location} weatherData={weatherData} />
			</>;
		}
		else {
			content = <p>Could not retrieve weather data.</p>
		}
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
	fetchCurrentWeather: PropTypes.func,
	
	location: PropTypes.object,
	currentWeather: PropTypes.object
};

const mapStateToProps = (state) => ({
	location: state.location.currentLocation,
	currentWeather: state.weather.currentWeather
});

const mapDispatchToProps = dispatch => {
    return {
		setRedirectToCurrentWeather: (shouldRedirect) => dispatch(actions.setRedirectToCurrentWeather(shouldRedirect)),
		fetchCurrentWeather: (location) => dispatch(actions.fetchCurrentWeather(location))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);