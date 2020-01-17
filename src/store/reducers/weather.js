import * as actionTypes from '../actions/actionTypes';

const initialState = {
	currentWeather: null,
	currentWeatherError: null,
	currentWeatherLoading: false,
	forecastWeather: null,
	forecastWeatherError: null,
	forecastWeatherLoading: false
}

const fetchCurrentWeatherStart = (state, action) => {
	return {
		...state,
		currentWeather: null,
		currentWeatherError: null,
		currentWeatherLoading: true
	};
};

const fetchCurrentWeatherSuccess = (state, action) => {
	return {
		...state,
		currentWeatherLoading: false,
		currentWeatherError: null,
		currentWeather: action.payload
	};
};

const fetchCurrentWeatherFail = (state, action) => {
	return {
		...state,
		currentWeatherLoading: false,
		currentWeather: null,
		currentWeatherError: action.error
	};
};

const fetchForecastWeatherStart = (state, action) => {
	return {
		...state,
		forecastWeather: null,
		forecastWeatherError: null,
		forecastWeatherLoading: true
	};
};

const fetchForecastWeatherSuccess = (state, action) => {
	return {
		...state,
		forecastWeatherLoading: false,
		forecastWeatherError: null,
		forecastWeather: action.payload
	};
};

const fetchForecastWeatherFail = (state, action) => {
	return {
		...state,
		forecastWeatherLoading: false,
		forecastWeather: null,
		forecastWeatherError: action.error
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_CURRENT_WEATHER_START: return fetchCurrentWeatherStart(state, action);
		case actionTypes.FETCH_CURRENT_WEATHER_SUCCESS: return fetchCurrentWeatherSuccess(state, action);
		case actionTypes.FETCH_CURRENT_WEATHER_FAIL: return fetchCurrentWeatherFail(state, action);

		case actionTypes.FETCH_FORECAST_WEATHER_START: return fetchForecastWeatherStart(state, action);
		case actionTypes.FETCH_FORECAST_WEATHER_SUCCESS: return fetchForecastWeatherSuccess(state, action);
		case actionTypes.FETCH_FORECAST_WEATHER_FAIL: return fetchForecastWeatherFail(state, action);

		default: return state;
	}
};

export default reducer;