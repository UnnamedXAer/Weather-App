import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './WeatherLongTerm.css';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { dateToLocalString } from '../../utils/time';
import { addUnits } from '../../utils/units';
import { Link } from 'react-router-dom';
import PageLocationHeader from '../../components/PageLocationHeader/PageLocationHeader';
import ErrorPanel from '../../components/ErrorPanel/ErrorPanel';
import Spinner from '../../components/UI/Spinner';

const WeatherLongTerm = ({ fetchForecastWeather, location, forecastData, error, loading }) => {
	useEffect(() => {
		if (location) {
			fetchForecastWeather(location);
		}

	}, [location, fetchForecastWeather]);

	const showWeatherColDetails = (pos) => {
		const colData = forecastData.weatherData[pos];
		console.log(colData);
	};

	const weatherData = forecastData ? forecastData.weatherData : null;

	const content = error ? <ErrorPanel message={error} /> : <section className="weather-long-term__container">
		{loading ? <Spinner /> : <div>
			<ReactTooltip
				className="weather-long-term__tooltip"
				delayShow={300}
				effect="solid"
				multiline={true} />
			{weatherData && weatherData.map((x, i) => {
				const iconSrc = `http://openweathermap.org/img/wn/${x.imgName}@2x.png`;
				return (<div
					className="weather-long-term__col"
					key={i}
					onClick={() => showWeatherColDetails(i)}
					data-tip={x.description}
				>
					<p>{dateToLocalString(x.time, 'shortDT')}</p>
					<div className="weather-long-term__col-img">
						<img src={iconSrc} alt={forecastData.shortDescription} />
						<p style={{ fontSize: "0.7em" }}>clouds: {x.clouds}%</p>
					</div>
					<div>
						<p style={{ fontSize: "1.1em" }}><strong>{addUnits(x.temperature.main)}</strong></p>
						<p style={{ fontSize: "0.7em" }}>Feels Like: <br /><strong>{addUnits(x.temperature.feelsLike)}</strong></p>
					</div>
				</div>);
			})}
		</div>}
	</section>

	return (
		<section className="weather-long-term">
			<h1>Weather Long Term</h1>
			{location
				? <PageLocationHeader
					location={location}
					style={{
						textAlign: 'center',
						padding: '16px 36px',
						fontSize: '1.17em',
						backgroundColor: 'var(--color-secondary)'
					}} />
				: <div className="weather-long-term__missing-location"><p>Please go to <Link to="/">Location</Link> and select location first.</p></div>}

			{content}
		</section>
	);
};

WeatherLongTerm.propTypes = {
	location: PropTypes.object,
	forecastData: PropTypes.object,
	loading: PropTypes.bool,
	error: PropTypes.string,

	fetchForecastWeather: PropTypes.func
};

const mapStateToProps = (state) => ({
	location: state.location.currentLocation,
	forecastData: state.weather.forecastWeather,
	error: state.weather.forecastWeatherError,
	loading: state.weather.forecastWeatherLoading
});

const mapDispatchToProps = dispatch => {
	return {
		fetchForecastWeather: (location) => dispatch(actions.fetchForecastWeather(location))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherLongTerm);
