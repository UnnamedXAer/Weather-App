import axios, { logReqError } from '../../axios/axios';
import * as actionTypes from './actionTypes';


export const fetchCurrentWeather = (location) => {
	return async dispatch => {
		dispatch(fetchCurrentWeatherStart());
		// location = {
		// 	"id": 169539,
		// 	"coords": {
		// 		"latitude": 0.23763,
		// 		"longitude": 32.47836
		// 	},
		// 	"city": "Wakiso District",
		// 	"country": "Uganda",
		// 	"countryCode": "UG",
		// 	"postalCode": "",
		// 	"region": "Central Region"
		// }

		try {
			const payload = {
				provider: 'openweathermap',
				queryParams: {
					endPint: 'weather',
					units: 'metric',
					lang: "en",
					loc: {
						city: location.city,
						latitude: location.latitude,
						longitude: location.longitude,
						countryCode: location.countryCode
					}
				}
			};
			const { data } = await axios.post('/call-api', payload);
			dispatch(fetchCurrentWeatherSuccess(data));
		}
		catch (err) {
			logReqError(err);
			dispatch(fetchCurrentWeatherFail(err));
		}
	};
};

export const fetchCurrentWeatherStart = () => {
	return {
		type: actionTypes.FETCH_CURRENT_WEATHER_START
	};
};

export const fetchCurrentWeatherSuccess = (payload) => {
	return {
		type: actionTypes.FETCH_CURRENT_WEATHER_SUCCESS,
		payload
	};
};

export const fetchCurrentWeatherFail = (error) => {
	return {
		type: actionTypes.FETCH_CURRENT_WEATHER_FAIL,
		error
	};
};

export const fetchForecastWeather = (location) => {
	return async dispatch => {
		dispatch(fetchForecastWeatherStart());

		try {
			const payload = {
				provider: 'openweathermap',
				queryParams: {
					endPint: 'forecast',
					units: 'metric',
					lang: "en",
					loc: location
				}
			};
			const { data } = await axios.post('/call-api', payload);
			dispatch(fetchForecastWeatherSuccess(data));
		}
		catch (err) {
			logReqError(err);
			dispatch(fetchForecastWeatherFail(err));
		}
	};
};

export const fetchForecastWeatherStart = () => {
	return {
		type: actionTypes.FETCH_FORECAST_WEATHER_START
	};
};

export const fetchForecastWeatherSuccess = (payload) => {
	return {
		type: actionTypes.FETCH_FORECAST_WEATHER_SUCCESS,
		payload
	};
};

export const fetchForecastWeatherFail = (error) => {
	return {
		type: actionTypes.FETCH_FORECAST_WEATHER_FAIL,
		error
	};
};