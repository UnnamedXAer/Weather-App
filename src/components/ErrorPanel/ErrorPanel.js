import React from 'react';
import PropTypes from 'prop-types';
import './ErrorPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ErrorPanel = ({ message, showHeader }) => {
	return (
		(message !== null) && <section className="error-panel">
			<span>
				{showHeader !== false ? <h2>Opss, something went wrong</h2> : null}
				<p className="error-panel__message">{message}</p>
			</span>
			<div className="error-panel__icon-container">
				<FontAwesomeIcon className="error-panel__icon" icon="dizzy" />
			</div>
		</section>
	);
};

ErrorPanel.propTypes = {
	message: PropTypes.string,
	showHeader: PropTypes.bool
};

export default ErrorPanel;