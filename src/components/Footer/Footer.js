import React from 'react';
import './Footer.css'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<p>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon" rel="noopener noreferrer" target="_blank"> www.flaticon.com</a></p>
				<a className="footer-powered-by-dark-sky" href="_" rel="noopener noreferrer" target="_blank">
					<img src={""} alt="Powered by ..." />
				</a>
			</div>
		</footer>
	);
};

export default Footer;