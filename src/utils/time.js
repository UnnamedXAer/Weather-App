const allDateOptions = {
	month: '2-digit',
	day: '2-digit',
	year: 'numeric',//'2-digit',
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
	hour12: false
};

const formats = {
	fullDTOptions: {...allDateOptions},
	shortDTOptions: {
		hour12: allDateOptions.hour12,
		hour: allDateOptions.hour,
		minute: allDateOptions.minute,
		month: 'short',
		day: allDateOptions.day
	},
	timeOptions: {
		hour12: allDateOptions.hour12,
		hour: allDateOptions.hour,
		minute: allDateOptions.minute,
	},
	dateOptions: {
		year: allDateOptions.year,
		month: allDateOptions.month,
		day: allDateOptions.day
	}
};

/**
 * @param {Date | String | Number} date 
 * @param {"fullDT" | "shortDT" | "time" | "date"} format 
 * 
 * @returns {String} convertedDate
 */
export function dateToLocalString(date, format) {
	let options = formats[format+'Options'];
	if (!options) console.log('date/time "format" is not recognized');
	if (date instanceof Date) {
		return date.toLocaleString('en', options);
	}
	else {
		return new Date(date).toLocaleString('en', options || allDateOptions);
	}
}