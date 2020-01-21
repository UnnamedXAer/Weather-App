import React from 'react';
import './WeatherTodayDetails.css';
import { dateToLocalString } from '../../utils/time';
import Spinner from '../UI/Spinner';
import ErrorPanel from '../ErrorPanel/ErrorPanel';

const WeatherTodayDetails = ({ weatherData, location, loading, error }) => {
	const openWeatherMapUrl = `https://openweathermap.org/weathermap
		?basemap=map
		&cities=true
		&layer=temperature
		&lat=${location.latitude}
		&lon=${location.longitude}
		&zoom=7`;

	if (error) {
		return <ErrorPanel message={error} />;
	}
	return (
		<div className="weather-today-details">
			{loading ? <div className="weather-today-details__spinner"><Spinner /></div>
				: weatherData && <>{weatherData.dt && <p className="weather-today-details__date">Data forecasted at: {dateToLocalString(weatherData.dt, 'shortDT')}</p>}
					<table className="weather-today-details__table">
						<tbody>
							<tr>
								<td className="weather-today-details__cell">Wind</td>
								<td className="weather-today-details__cell">{weatherData.wind.speed} m/s</td>
							</tr>
							<tr>
								<td className="weather-today-details__cell">Cloudiness</td>
								<td className="weather-today-details__cell">{weatherData.description}<span> ({weatherData.clouds}%)</span></td>
							</tr>
							<tr>
								<td className="weather-today-details__cell">Pressure</td>
								<td className="weather-today-details__cell">{weatherData.pressure} hpa</td>
							</tr>
							<tr>
								<td className="weather-today-details__cell">Humidity</td>
								<td className="weather-today-details__cell">{weatherData.humidity} %</td>
							</tr>
							<tr>
								<td className="weather-today-details__cell">Sunrise</td>
								<td className="weather-today-details__cell">{dateToLocalString(weatherData.sunrise, "time")}</td>
							</tr>
							<tr>
								<td className="weather-today-details__cell">Sunset</td>
								<td className="weather-today-details__cell">{dateToLocalString(weatherData.sunset, "time")}</td>
							</tr>
							<tr>
								<td colSpan="2" style={{ fontSize: '0.7em' }} >
									<a
										href={`https://openweathermap.org/city/${location.id}?utm_source=openweathermap&utm_medium=widget&utm_campaign=html_old`}
										target="_bank"
									>
										...more on OpenWeather.com
							</a>
								</td>
							</tr>
							<tr>
								<td colSpan="2" style={{ fontSize: '0.7em' }}>
									<a
										data-tip="Open map on OpenWeather.com"
										href={openWeatherMapUrl}
										target="_bank"
									>
										, or Show Map
							</a>
								</td>
							</tr>
						</tbody>
					</table>
				</>}
		</div>
	);
};

export default WeatherTodayDetails;