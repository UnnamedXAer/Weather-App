import React from 'react';
import PropTypes from 'prop-types';
import './PageLocationHeader.css';

const PageLocationHeader = ({ location, style }) => {
	return (
		<h1 className="page-location-header" style={{ ...style }}>
			{location.city}{(location.country ? `, ${location.country}` : (location.countryCode ? `, ${location.countryCode}` : ""))}
			</h1>
	);
};

PageLocationHeader.propTypes = {
	location: PropTypes.object
};

export default PageLocationHeader;