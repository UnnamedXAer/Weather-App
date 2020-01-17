
export function getLocationErrorMessage(error) {

	if (!error.code) {
		return error.message;
	}

	switch (error.code) {
		case error.PERMISSION_DENIED:
			return "User denied the request for Geolocation.";
		case error.POSITION_UNAVAILABLE:
			return "Location information is unavailable.";
		case error.TIMEOUT:
			return "The request to get user location timed out.";
		case error.UNKNOWN_ERROR:
			return "An unknown error occurred.";
		default:
			return "An error occurred.";
	}
}

export function getLocation() {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(resolve, reject, {/* options */ });
		} else {
			reject(new Error("Geolocation is not supported by this browser."));
		}
	})
}


