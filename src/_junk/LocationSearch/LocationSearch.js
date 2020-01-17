import React from 'react';
import PropTypes from 'prop-types';
import './LocationSearch.css';
import gpsIcon from '../../assets/images/gps.svg';
import Spinner from '../UI/Spinner';

const LocationSearch = ({ 
	value, 
	valueChanged, 
	getGeolocation, 
	locationInputRef,
	geolocationLoading,
	geolocationDisabled
 }) => {

    let overlayTextClass = "";

    const focusHandler = (ev) => {
        overlayTextClass = "focused";
    }

    const blurHandler = (ev) => {
        overlayTextClass = "";
    }

    return (
        <section className="location-search">
            <span className="location-search__container">
                <input 
                    id="location"
                    className="location-search__input"
                    autoComplete="off"
                    type="text"
					name="location"
					ref={locationInputRef}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    value={value}
                    onChange={valueChanged}
                    required
				/>
                <label className={["location-search__label", overlayTextClass].join(" ")} htmlFor="location">
                    <span className="location-search__label-text">Type Your City</span>
                </label>
            </span>
			<div>
				{
					geolocationLoading ? <Spinner />
					: <button 
						className="location-search__gps" 
						onClick={getGeolocation} 
						disabled={geolocationDisabled}
					>
						<img src={gpsIcon} alt="GPS" data-tip="Use Your position"/>
					</button>
				}
			</div>
        </section>
    );
};

LocationSearch.propTypes = {
	value: PropTypes.string,
	valueChanged: PropTypes.func,
	getGeolocation: PropTypes.func,
	locationInputRef: PropTypes.object,
	geolocationLoading: PropTypes.bool,
	geolocationDisabled: PropTypes.bool
};

export default LocationSearch;