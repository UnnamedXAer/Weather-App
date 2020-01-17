import React from 'react';
import './LocationSearchResults.css';
import PropTypes from 'prop-types';
import Spinner from "../../UI/Spinner";


const LocationSearchResults = ({ show, loading, locations, selectLocation }) => {
	let content = <Spinner />;
	if (!loading) {
		if (locations.length === 0) {
			content = <p>No results</p>;
		}
		else {
			content = (<ul className="location-results__list">
				{locations.map(city => (
					<ol key={city.id} onClick={(ev) => selectLocation(city.id)}>
						<div className="location-results__element" >
							<p className="location-list__location-name">{city.name}</p>
							<p>{city.country} ({city.countryCode})</p>
							<p>Region: {city.region}</p>
						</div>
					</ol>
				))}
			</ul>);
		}
	}

	return (
		<div className="location-results">
			{show && content}
		</div>
	);
};

LocationSearchResults.propTypes = {
	show: PropTypes.bool,
	loading: PropTypes.bool,
	locations: PropTypes.arrayOf(PropTypes.object),
	selectLocation: PropTypes.func
};

export default LocationSearchResults;