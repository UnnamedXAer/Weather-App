import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './WeatherToday.css';
import { Link } from 'react-router-dom';
import WeatherTodayDetails from '../../components/WeatherTodayDetails/WeatherTodayDetails';
import Spinner from '../../components/UI/Spinner';
import { connect } from 'react-redux'
import * as actions from '../../store/actions';
import { addUnits } from '../../utils/units';
import PageLocationHeader from '../../components/PageLocationHeader/PageLocationHeader';
import ErrorPanel from '../../components/ErrorPanel/ErrorPanel';

const WeatherToday = ({ 
	setRedirectToCurrentWeather, 
	location, 
	currentWeather, 
	fetchCurrentWeather, 
	loading, 
	error 
}) => {

	useEffect(() => {
		if (location) {
			fetchCurrentWeather(location);
		}
	}, [location, fetchCurrentWeather]);

	useEffect(() => {
		setRedirectToCurrentWeather(false);
	}, [setRedirectToCurrentWeather]);

	const weatherData = currentWeather ? currentWeather.weatherData : null;

	return (
		<section className="weather-today">
			<h1>Weather Today</h1>
			<section className="weather-today__container">
				{!location ? <p>Please go to <Link to="/">Location</Link> and select location first.</p>
					: <>
						<PageLocationHeader location={location} />
						{loading ? <Spinner />
							: weatherData && <section className="weather-today__temperature">
								<div>
									<p>Current temperature:
									<strong style={{ fontSize: '1.4em' }}>
											{" " + addUnits(weatherData.temperature.main)}
									</strong>
									</p>
									<p>
										Feels Like: <strong>{addUnits(weatherData.temperature.feelsLike)}</strong>
									</p>
								</div>
								<div className="weather-today__icon">
									<img src={`http://openweathermap.org/img/wn/${weatherData.imgName}@2x.png`}
										alt={weatherData.shortDescription} />
								</div>
							</section>}
					</>}
			</section>
			{error ? <ErrorPanel message={error} />
			: <WeatherTodayDetails 	
				loading={loading} 
				location={location} 
				weatherData={weatherData} />}
		</section>
	);
};

WeatherToday.propTypes = {
	setRedirectToCurrentWeather: PropTypes.func,
	fetchCurrentWeather: PropTypes.func,

	location: PropTypes.object,
	currentWeather: PropTypes.object,
	loading: PropTypes.bool,
	error: PropTypes.string
};

const mapStateToProps = (state) => ({
	location: state.location.currentLocation,
	currentWeather: state.weather.currentWeather,
	loading: state.weather.currentWeatherLoading,
	error: state.weather.currentWeatherError,
});

const mapDispatchToProps = dispatch => {
	return {
		setRedirectToCurrentWeather: (shouldRedirect) => dispatch(actions.setRedirectToCurrentWeather(shouldRedirect)),
		fetchCurrentWeather: (location) => dispatch(actions.fetchCurrentWeather(location))
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);