import * as actionTypes from '../actions/actionTypes';

const initialState = {
	currentWeather: null,
	currentWeatherError: null,
	currentWeatherLoading: false,
	forecastWeather: null,
	forecastWeatherError: null,
	forecastWeatherLoading: false
};

// const initialState = {
// 	// currentWeather: {
// 	// 	weatherDate: {
// 	// 		imgName: '04d',
// 	// 		temperature: {
// 	// 			main: 3.49,
// 	// 			feelsLike: -1.47,
// 	// 			min: 1.67,
// 	// 			max: 5
// 	// 		},
// 	// 		pressure: 1043,
// 	// 		humidity: 74,
// 	// 		wind: {
// 	// 			speed: 4.1,
// 	// 			deg: 280
// 	// 		},
// 	// 		time: 1579520113000,
// 	// 		sunrise: 1579502026,
// 	// 		sunset: 1579532363,
// 	// 		visibility: 10000,
// 	// 		description: 'broken clouds',
// 	// 		shortDescription: 'Clouds',
// 	// 		clouds: 75
// 	// 	},
// 	// 	location: {
// 	// 		id: 756135,
// 	// 		city: 'Warsaw',
// 	// 		latitude: 52.23,
// 	// 		longitude: 21.01
// 	// 	}
// 	// },
// 	currentWeather: {
// 		weatherData: {
// 			dt: 1579602788000,
// 			imgName: '02d',
// 			temperature: {
// 				main: 4.79,
// 				feelsLike: -2.29,
// 				min: 2.78,
// 				max: 6.11
// 			},
// 			pressure: 1035,
// 			humidity: 69,
// 			wind: {
// 				speed: 7.2,
// 				deg: 270
// 			},
// 			time: 1579602788000,
// 			sunrise: 1579588360000,
// 			sunset: 1579618866000,
// 			visibility: 10000,
// 			description: 'few clouds',
// 			shortDescription: 'Clouds',
// 			clouds: 17
// 		},
// 		location: {
// 			id: 756135,
// 			city: 'Warsaw',
// 			latitude: 52.23,
// 			longitude: 21.01
// 		}
// 	},
// 	currentWeatherError: null,
// 	currentWeatherLoading: false,
// 	forecastWeather: {
// 		weatherData: [
// 			{
// 				imgName: '03d',
// 				temperature: {
// 					main: 3.44,
// 					feelsLike: -4.92,
// 					min: 3.07,
// 					max: 3.44
// 				},
// 				pressure: 1021,
// 				humidity: 64,
// 				wind: {
// 					speed: 8.59,
// 					deg: 271
// 				},
// 				time: 1579597200000,
// 				clouds: 33,
// 				description: 'scattered clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '02d',
// 				temperature: {
// 					main: 5.08,
// 					feelsLike: -3.46,
// 					min: 4.8,
// 					max: 5.08
// 				},
// 				pressure: 1019,
// 				humidity: 56,
// 				wind: {
// 					speed: 8.8,
// 					deg: 270
// 				},
// 				time: 1579608000000,
// 				clouds: 17,
// 				description: 'few clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '01d',
// 				temperature: {
// 					main: 3.31,
// 					feelsLike: -4.4,
// 					min: 3.13,
// 					max: 3.31
// 				},
// 				pressure: 1018,
// 				humidity: 61,
// 				wind: {
// 					speed: 7.52,
// 					deg: 272
// 				},
// 				time: 1579618800000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01n',
// 				temperature: {
// 					main: 2.07,
// 					feelsLike: -5.01,
// 					min: 1.98,
// 					max: 2.07
// 				},
// 				pressure: 1017,
// 				humidity: 69,
// 				wind: {
// 					speed: 6.71,
// 					deg: 282
// 				},
// 				time: 1579629600000,
// 				clouds: 4,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '02n',
// 				temperature: {
// 					main: 0.91,
// 					feelsLike: -5.6,
// 					min: 0.91,
// 					max: 0.91
// 				},
// 				pressure: 1016,
// 				humidity: 78,
// 				wind: {
// 					speed: 5.99,
// 					deg: 274
// 				},
// 				time: 1579640400000,
// 				clouds: 12,
// 				description: 'few clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '03n',
// 				temperature: {
// 					main: 1.4,
// 					feelsLike: -5.99,
// 					min: 1.4,
// 					max: 1.4
// 				},
// 				pressure: 1014,
// 				humidity: 79,
// 				wind: {
// 					speed: 7.36,
// 					deg: 271
// 				},
// 				time: 1579651200000,
// 				clouds: 46,
// 				description: 'scattered clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '04n',
// 				temperature: {
// 					main: 2.36,
// 					feelsLike: -6.16,
// 					min: 2.36,
// 					max: 2.36
// 				},
// 				pressure: 1009,
// 				humidity: 86,
// 				wind: {
// 					speed: 9.39,
// 					deg: 243
// 				},
// 				time: 1579662000000,
// 				clouds: 100,
// 				description: 'overcast clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '04n',
// 				temperature: {
// 					main: 2.84,
// 					feelsLike: -6.25,
// 					min: 2.84,
// 					max: 2.84
// 				},
// 				pressure: 1008,
// 				humidity: 86,
// 				wind: {
// 					speed: 10.3,
// 					deg: 276
// 				},
// 				time: 1579672800000,
// 				clouds: 88,
// 				description: 'overcast clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '10d',
// 				temperature: {
// 					main: 4.77,
// 					feelsLike: -3.03,
// 					min: 4.77,
// 					max: 4.77
// 				},
// 				pressure: 1007,
// 				humidity: 85,
// 				wind: {
// 					speed: 8.86,
// 					deg: 286
// 				},
// 				time: 1579683600000,
// 				clouds: 100,
// 				description: 'light rain',
// 				shortDescription: 'Rain'
// 			},
// 			{
// 				imgName: '10d',
// 				temperature: {
// 					main: 5.48,
// 					feelsLike: -2.81,
// 					min: 5.48,
// 					max: 5.48
// 				},
// 				pressure: 1007,
// 				humidity: 68,
// 				wind: {
// 					speed: 9.02,
// 					deg: 308
// 				},
// 				time: 1579694400000,
// 				clouds: 94,
// 				description: 'light rain',
// 				shortDescription: 'Rain'
// 			},
// 			{
// 				imgName: '04d',
// 				temperature: {
// 					main: 3.89,
// 					feelsLike: -3.07,
// 					min: 3.89,
// 					max: 3.89
// 				},
// 				pressure: 1008,
// 				humidity: 68,
// 				wind: {
// 					speed: 6.81,
// 					deg: 300
// 				},
// 				time: 1579705200000,
// 				clouds: 60,
// 				description: 'broken clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '03n',
// 				temperature: {
// 					main: 2.22,
// 					feelsLike: -4.67,
// 					min: 2.22,
// 					max: 2.22
// 				},
// 				pressure: 1011,
// 				humidity: 60,
// 				wind: {
// 					speed: 6.16,
// 					deg: 323
// 				},
// 				time: 1579716000000,
// 				clouds: 35,
// 				description: 'scattered clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '01n',
// 				temperature: {
// 					main: 0.71,
// 					feelsLike: -5.55,
// 					min: 0.71,
// 					max: 0.71
// 				},
// 				pressure: 1013,
// 				humidity: 71,
// 				wind: {
// 					speed: 5.38,
// 					deg: 308
// 				},
// 				time: 1579726800000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01n',
// 				temperature: {
// 					main: 0.21,
// 					feelsLike: -6.46,
// 					min: 0.21,
// 					max: 0.21
// 				},
// 				pressure: 1015,
// 				humidity: 74,
// 				wind: {
// 					speed: 5.97,
// 					deg: 305
// 				},
// 				time: 1579737600000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01n',
// 				temperature: {
// 					main: -0.25,
// 					feelsLike: -6.31,
// 					min: -0.25,
// 					max: -0.25
// 				},
// 				pressure: 1016,
// 				humidity: 78,
// 				wind: {
// 					speed: 5.15,
// 					deg: 309
// 				},
// 				time: 1579748400000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01n',
// 				temperature: {
// 					main: -0.65,
// 					feelsLike: -6.21,
// 					min: -0.65,
// 					max: -0.65
// 				},
// 				pressure: 1017,
// 				humidity: 81,
// 				wind: {
// 					speed: 4.45,
// 					deg: 299
// 				},
// 				time: 1579759200000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01d',
// 				temperature: {
// 					main: 1.42,
// 					feelsLike: -4.14,
// 					min: 1.42,
// 					max: 1.42
// 				},
// 				pressure: 1018,
// 				humidity: 70,
// 				wind: {
// 					speed: 4.46,
// 					deg: 306
// 				},
// 				time: 1579770000000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01d',
// 				temperature: {
// 					main: 3.13,
// 					feelsLike: -2.58,
// 					min: 3.13,
// 					max: 3.13
// 				},
// 				pressure: 1017,
// 				humidity: 57,
// 				wind: {
// 					speed: 4.5,
// 					deg: 284
// 				},
// 				time: 1579780800000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01d',
// 				temperature: {
// 					main: 0.65,
// 					feelsLike: -4.08,
// 					min: 0.65,
// 					max: 0.65
// 				},
// 				pressure: 1016,
// 				humidity: 69,
// 				wind: {
// 					speed: 3.13,
// 					deg: 266
// 				},
// 				time: 1579791600000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '02n',
// 				temperature: {
// 					main: -0.42,
// 					feelsLike: -5.23,
// 					min: -0.42,
// 					max: -0.42
// 				},
// 				pressure: 1015,
// 				humidity: 74,
// 				wind: {
// 					speed: 3.22,
// 					deg: 251
// 				},
// 				time: 1579802400000,
// 				clouds: 24,
// 				description: 'few clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '02n',
// 				temperature: {
// 					main: -0.59,
// 					feelsLike: -5.61,
// 					min: -0.59,
// 					max: -0.59
// 				},
// 				pressure: 1015,
// 				humidity: 74,
// 				wind: {
// 					speed: 3.5,
// 					deg: 244
// 				},
// 				time: 1579813200000,
// 				clouds: 12,
// 				description: 'few clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '01n',
// 				temperature: {
// 					main: -0.68,
// 					feelsLike: -5.63,
// 					min: -0.68,
// 					max: -0.68
// 				},
// 				pressure: 1014,
// 				humidity: 74,
// 				wind: {
// 					speed: 3.39,
// 					deg: 236
// 				},
// 				time: 1579824000000,
// 				clouds: 6,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01n',
// 				temperature: {
// 					main: -0.9,
// 					feelsLike: -5.94,
// 					min: -0.9,
// 					max: -0.9
// 				},
// 				pressure: 1012,
// 				humidity: 77,
// 				wind: {
// 					speed: 3.56,
// 					deg: 240
// 				},
// 				time: 1579834800000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01n',
// 				temperature: {
// 					main: -1.06,
// 					feelsLike: -5.83,
// 					min: -1.06,
// 					max: -1.06
// 				},
// 				pressure: 1011,
// 				humidity: 77,
// 				wind: {
// 					speed: 3.15,
// 					deg: 231
// 				},
// 				time: 1579845600000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01d',
// 				temperature: {
// 					main: 1.61,
// 					feelsLike: -3.86,
// 					min: 1.61,
// 					max: 1.61
// 				},
// 				pressure: 1010,
// 				humidity: 64,
// 				wind: {
// 					speed: 4.17,
// 					deg: 229
// 				},
// 				time: 1579856400000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01d',
// 				temperature: {
// 					main: 3.89,
// 					feelsLike: -1.44,
// 					min: 3.89,
// 					max: 3.89
// 				},
// 				pressure: 1009,
// 				humidity: 57,
// 				wind: {
// 					speed: 4.07,
// 					deg: 234
// 				},
// 				time: 1579867200000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01d',
// 				temperature: {
// 					main: 1.24,
// 					feelsLike: -3.52,
// 					min: 1.24,
// 					max: 1.24
// 				},
// 				pressure: 1007,
// 				humidity: 66,
// 				wind: {
// 					speed: 3.16,
// 					deg: 217
// 				},
// 				time: 1579878000000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01n',
// 				temperature: {
// 					main: -0.31,
// 					feelsLike: -5.29,
// 					min: -0.31,
// 					max: -0.31
// 				},
// 				pressure: 1006,
// 				humidity: 71,
// 				wind: {
// 					speed: 3.4,
// 					deg: 199
// 				},
// 				time: 1579888800000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01n',
// 				temperature: {
// 					main: -0.6,
// 					feelsLike: -6.15,
// 					min: -0.6,
// 					max: -0.6
// 				},
// 				pressure: 1005,
// 				humidity: 69,
// 				wind: {
// 					speed: 4.12,
// 					deg: 202
// 				},
// 				time: 1579899600000,
// 				clouds: 0,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '01n',
// 				temperature: {
// 					main: -1.39,
// 					feelsLike: -6.31,
// 					min: -1.39,
// 					max: -1.39
// 				},
// 				pressure: 1004,
// 				humidity: 77,
// 				wind: {
// 					speed: 3.32,
// 					deg: 222
// 				},
// 				time: 1579910400000,
// 				clouds: 8,
// 				description: 'clear sky',
// 				shortDescription: 'Clear'
// 			},
// 			{
// 				imgName: '03n',
// 				temperature: {
// 					main: -1.61,
// 					feelsLike: -6.38,
// 					min: -1.61,
// 					max: -1.61
// 				},
// 				pressure: 1003,
// 				humidity: 83,
// 				wind: {
// 					speed: 3.23,
// 					deg: 228
// 				},
// 				time: 1579921200000,
// 				clouds: 35,
// 				description: 'scattered clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '04n',
// 				temperature: {
// 					main: -1.28,
// 					feelsLike: -5.66,
// 					min: -1.28,
// 					max: -1.28
// 				},
// 				pressure: 1003,
// 				humidity: 82,
// 				wind: {
// 					speed: 2.69,
// 					deg: 230
// 				},
// 				time: 1579932000000,
// 				clouds: 67,
// 				description: 'broken clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '04d',
// 				temperature: {
// 					main: 0.67,
// 					feelsLike: -4.11,
// 					min: 0.67,
// 					max: 0.67
// 				},
// 				pressure: 1003,
// 				humidity: 73,
// 				wind: {
// 					speed: 3.32,
// 					deg: 238
// 				},
// 				time: 1579942800000,
// 				clouds: 100,
// 				description: 'overcast clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '04d',
// 				temperature: {
// 					main: 2.45,
// 					feelsLike: -2.38,
// 					min: 2.45,
// 					max: 2.45
// 				},
// 				pressure: 1002,
// 				humidity: 67,
// 				wind: {
// 					speed: 3.49,
// 					deg: 246
// 				},
// 				time: 1579953600000,
// 				clouds: 100,
// 				description: 'overcast clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '04d',
// 				temperature: {
// 					main: 0.93,
// 					feelsLike: -3.92,
// 					min: 0.93,
// 					max: 0.93
// 				},
// 				pressure: 1002,
// 				humidity: 80,
// 				wind: {
// 					speed: 3.68,
// 					deg: 228
// 				},
// 				time: 1579964400000,
// 				clouds: 100,
// 				description: 'overcast clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '04n',
// 				temperature: {
// 					main: 0.14,
// 					feelsLike: -4.49,
// 					min: 0.14,
// 					max: 0.14
// 				},
// 				pressure: 1002,
// 				humidity: 83,
// 				wind: {
// 					speed: 3.31,
// 					deg: 251
// 				},
// 				time: 1579975200000,
// 				clouds: 100,
// 				description: 'overcast clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '04n',
// 				temperature: {
// 					main: -0.36,
// 					feelsLike: -4.94,
// 					min: -0.36,
// 					max: -0.36
// 				},
// 				pressure: 1003,
// 				humidity: 88,
// 				wind: {
// 					speed: 3.29,
// 					deg: 257
// 				},
// 				time: 1579986000000,
// 				clouds: 100,
// 				description: 'overcast clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '04n',
// 				temperature: {
// 					main: -0.56,
// 					feelsLike: -4.89,
// 					min: -0.56,
// 					max: -0.56
// 				},
// 				pressure: 1003,
// 				humidity: 93,
// 				wind: {
// 					speed: 3.04,
// 					deg: 255
// 				},
// 				time: 1579996800000,
// 				clouds: 100,
// 				description: 'overcast clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '04n',
// 				temperature: {
// 					main: -0.87,
// 					feelsLike: -5.2,
// 					min: -0.87,
// 					max: -0.87
// 				},
// 				pressure: 1003,
// 				humidity: 93,
// 				wind: {
// 					speed: 2.99,
// 					deg: 263
// 				},
// 				time: 1580007600000,
// 				clouds: 98,
// 				description: 'overcast clouds',
// 				shortDescription: 'Clouds'
// 			},
// 			{
// 				imgName: '04n',
// 				temperature: {
// 					main: -0.96,
// 					feelsLike: -5.11,
// 					min: -0.96,
// 					max: -0.96
// 				},
// 				pressure: 1004,
// 				humidity: 94,
// 				wind: {
// 					speed: 2.73,
// 					deg: 261
// 				},
// 				time: 1580018400000,
// 				clouds: 97,
// 				description: 'overcast clouds',
// 				shortDescription: 'Clouds'
// 			}
// 		],
// 		location: {
// 			city: 'Warsaw',
// 			countryCode: 'PL',
// 			latitude: 52.2298,
// 			longitude: 21.0118
// 		},
// 		linesCnt: 40,
// 		sun: {
// 			sunrise: 1579588360000,
// 			sunset: 1579618865000
// 		}
// 	},
// 	forecastWeatherError: null,
// 	forecastWeatherLoading: false
// };

const fetchCurrentWeatherStart = (state, action) => {
	return {
		...state,
		currentWeather: null,
		currentWeatherError: null,
		currentWeatherLoading: true
	};
};

const fetchCurrentWeatherSuccess = (state, action) => {

	const currentWeather = action.payload;
	return {
		...state,
		currentWeatherLoading: false,
		currentWeatherError: null,
		currentWeather: currentWeather
	};
};

const fetchCurrentWeatherFail = (state, action) => {

	let message = "";
	if (action.error.response && action.error.response.data) {
		const { data } = action.error.response;
		message = `Could not fetch weather data.\n${data.message || data.statusText}`;
	}

	return {
		...state,
		currentWeatherLoading: false,
		currentWeather: null,
		currentWeatherError: message
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

	let message = "";
	if (action.error.response && action.error.response.data) {
		const { data } = action.error.response;
		message = `Could not fetch weather data.\n${data.message || data.statusText}`;
	}

	return {
		...state,
		forecastWeatherLoading: false,
		forecastWeather: null,
		forecastWeatherError: message
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