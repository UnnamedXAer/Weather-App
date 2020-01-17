import * as actionTypes from '../actions/actionTypes';

const initialState = {
	geolocation: null,
	geolocationDisabled: false,
	geolocationLoading: false,
	geolocationError: null,

	selectedLocation: null,
	searchResults: [],
	searchLoading: false,
	searchError: null,

	redirectToCurrentWeather: false
};

const setRedirectToCurrentWeather = (state, action) => {
	return {
		...state,
		redirectToCurrentWeather: action.shouldRedirect
	}
}

const fetchLocationByCoordsStart = (state, action) => {
	return {
		...state,
		geolocation: null,
		geolocationLoading: true,
		geolocationError: null,
		geolocationDisabled: false,
	};
};

const fetchLocationByCoordsSuccess = (state, action) => {
	return {
		...state,
		geolocation: action.payload,
		geolocationLoading: false,
		geolocationError: null,
		geolocationDisabled: false,
	};
};

const fetchLocationByCoordsFail = (state, action) => {
	return {
		...state,
		geolocation: null,
		geolocationLoading: false,
		geolocationError: action.error,
		geolocationDisabled: true,
	};
};

const fetchLocationsByPrefixStart = (state, action) => {
	return {
		...state,
		searchResults: [],
		searchLoading: true,
		searchError: null
	}
};

const fetchLocationsByPrefixSuccess = (state, action) => {
	return {
		...state,
		searchResults: action.payload,
		searchLoading: false,
		searchError: null
	}
};

const fetchLocationsByPrefixFail = (state, action) => {
	return {
		...state,
		searchResults: [],
		searchLoading: false,
		searchError: action.error
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_REDIRECT_TO_CURRENT_WEATHER: return setRedirectToCurrentWeather(state, action);

		case actionTypes.FETCH_LOCATIONS_BY_PREFIX_START: return fetchLocationsByPrefixStart(state, action);
		case actionTypes.FETCH_LOCATIONS_BY_PREFIX_SUCCESS: return fetchLocationsByPrefixSuccess(state, action);
		case actionTypes.FETCH_LOCATIONS_BY_PREFIX_FAIL: return fetchLocationsByPrefixFail(state, action);
	
		case actionTypes.FETCH_LOCATION_BY_COORDS_START: return fetchLocationByCoordsStart(state, action);
		case actionTypes.FETCH_LOCATION_BY_COORDS_SUCCESS: return fetchLocationByCoordsSuccess(state, action);
		case actionTypes.FETCH_LOCATION_BY_COORDS_FAIL: return fetchLocationByCoordsFail(state, action);

		default: return state;
	};
};

export default reducer;