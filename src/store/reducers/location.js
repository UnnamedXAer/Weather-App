import * as actionTypes from '../actions/actionTypes';

const initialState = {
	currentLocation: null,

// geolocation: null,
	geolocationDisabled: false,
	geolocationLoading: false,
	geolocationError: null,

	selectedLocation: null,
	searchResults: [],
	searchMetadata: {},
	searchLoading: false,
	searchError: null,

	redirectToCurrentWeather: false
};

// const initialState = {
// 	currentLocation: {
// 		"id": 159700,
// 		"coords": {
// 			"latitude": 52.23547,
// 			"longitude": 21.04191
// 	},
// 		"city": "Warszawa",
// 		"country": "Poland",
// 		"countryCode": "PL",
// 		"postalCode": "",
// 		"region": "Masovian Voivodeship"
// },
// 	geolocationDisabled: false,
// 	geolocationLoading: false,
// 	geolocationError: null,
// 	selectedLocation: null,
// 	searchResults: [
// 		{
// 			id: 147385,
// 			coords: {
// 				latitude: 18,
// 				longitude: 79.83333
// 			},
// 			city: 'Warangal',
// 			country: 'India',
// 			countryCode: 'IN',
// 			postalCode: '',
// 			region: 'Telangana'
// 		},
// 		{
// 			id: 169539,
// 			coords: {
// 				latitude: 0.23763,
// 				longitude: 32.47836
// 			},
// 			city: 'Wakiso District',
// 			country: 'Uganda',
// 			countryCode: 'UG',
// 			postalCode: '',
// 			region: 'Central Region'
// 		},
// 		{
// 			id: 171568,
// 			coords: {
// 				latitude: 42.28478,
// 				longitude: -83.26113
// 			},
// 			city: 'Wayne County',
// 			country: 'United States of America',
// 			countryCode: 'US',
// 			postalCode: '',
// 			region: 'Michigan'
// 		},
// 		{
// 			id: 159700,
// 			coords: {
// 				latitude: 52.23547,
// 				longitude: 21.04191
// 			},
// 			city: 'Warszawa',
// 			country: 'Poland',
// 			countryCode: 'PL',
// 			postalCode: '',
// 			region: 'Masovian Voivodeship'
// 		},
// 		{
// 			id: 92150,
// 			coords: {
// 				latitude: 52.22977,
// 				longitude: 21.01178
// 			},
// 			city: 'Warsaw',
// 			country: 'Poland',
// 			countryCode: 'PL',
// 			postalCode: '',
// 			region: 'Masovian Voivodeship'
// 		},
// 		{
// 			id: 141115,
// 			coords: {
// 				latitude: 30.70576,
// 				longitude: 108.40202
// 			},
// 			city: 'Wanzhou District',
// 			country: 'People\'s Republic of China',
// 			countryCode: 'CN',
// 			postalCode: '',
// 			region: 'Chongqing'
// 		},
// 		{
// 			id: 147805,
// 			coords: {
// 				latitude: 20.2,
// 				longitude: 77.2
// 			},
// 			city: 'Washim',
// 			country: 'India',
// 			countryCode: 'IN',
// 			postalCode: '',
// 			region: 'Maharashtra'
// 		},
// 		{
// 			id: 170635,
// 			coords: {
// 				latitude: 35.79012,
// 				longitude: -78.65022
// 			},
// 			city: 'Wake County',
// 			country: 'United States of America',
// 			countryCode: 'US',
// 			postalCode: '',
// 			region: 'North Carolina'
// 		},
// 		{
// 			id: 147739,
// 			coords: {
// 				latitude: 11.605,
// 				longitude: 76.083
// 			},
// 			city: 'Wayanad',
// 			country: 'India',
// 			countryCode: 'IN',
// 			postalCode: '',
// 			region: 'Kerala'
// 		},
// 		{
// 			id: 113920,
// 			coords: {
// 				latitude: 38.89511,
// 				longitude: -77.03637
// 			},
// 			city: 'Washington, D.C.',
// 			country: 'United States of America',
// 			countryCode: 'US',
// 			postalCode: '',
// 			region: 'District of Columbia'
// 		}
// 	],
// 	searchMetadata: {
// 		currentOffset: 0,
// 		totalCount: 249
// 	},
// 	searchLoading: false,
// 	searchError: null,
// 	redirectToCurrentWeather: false
// }

const setCurrentLocation = (state, action) => {
	return {
		...state,
		currentLocation: action.location
	}
} 

const setRedirectToCurrentWeather = (state, action) => {
	return {
		...state,
		redirectToCurrentWeather: action.shouldRedirect
	}
}

const fetchLocationByCoordsStart = (state, action) => {
	return {
		...state,
		currentLocation: null,
		geolocationLoading: true,
		geolocationError: null,
		geolocationDisabled: false,
	};
};

const fetchLocationByCoordsSuccess = (state, action) => {
	return {
		...state,
		currentLocation: action.payload,
		geolocationLoading: false,
		geolocationError: null,
		geolocationDisabled: false,
	};
};

const fetchLocationByCoordsFail = (state, action) => {

	let message = "";
	if (action.error.response && action.error.response.data) {
		const { data } = action.error.response;
		message = `Could not fetch data.\n${data.message || data.statusText}`;
	}

	return {
		...state,
		currentLocation: null,
		geolocationLoading: false,
		geolocationError: message,
		geolocationDisabled: true,
	};
};

const fetchLocationsByPrefixStart = (state, action) => {
	return {
		...state,
		searchResults: [],
		searchMetadata: {},
		searchLoading: true,
		searchError: null
	}
};

const fetchLocationsByPrefixSuccess = (state, action) => {
	
	const { locations, metadata } = action.payload;

	return {
		...state,
		searchResults: locations,
		searchMetadata: metadata,
		searchLoading: false,
		searchError: null
	}
};

const fetchLocationsByPrefixFail = (state, action) => {

	let message = "";
	if (action.error.response && action.error.response.data) {
		const { data } = action.error.response;
		message = `Could not fetch data.\n${data.message || data.statusText}`;
	}

	return {
		...state,
		searchResults: [],
		searchMetadata: {},
		searchLoading: false,
		searchError: message
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_CURRENT_LOCATION: return setCurrentLocation(state, action);
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