import React from 'react';
import './Footer.css'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<p>Icons made by <a href="https://www.flaticon.com/authors/those-icons" 
					title="Those Icons" target="_blank" rel="noopener noreferrer">
						Those Icons
					</a> from <a href="https://www.flaticon.com/" 
						title="Flaticon" rel="noopener noreferrer" target="_blank">www.flaticon.com</a>
				</p>
				<p>Other Icons made by <a href="https://fontawesome.com/" 
					title="Font Awesome" target="_blank" rel="noopener noreferrer">Font Awesome</a>
				</p>
				<p>Locations are provided by <a href="http://geodb-cities-api.wirefreethought.com/" 
					title="GeoDB Cities API" target="_blank" rel="noopener noreferrer">GeoDB Cities API</a>
				</p>
				<p>Weather data provided by <a href="https://openweathermap.org/" 
					title="OpenWeatherMap" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a>
				</p>
				<p>Geocoding provided by <a href="http://www.mapquest.com" 
					title="MapQuest" target="_blank" rel="noopener noreferrer">MapQuest</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;