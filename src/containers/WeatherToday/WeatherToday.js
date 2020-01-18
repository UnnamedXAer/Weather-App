import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './WeatherToday.css';
import { connect } from 'react-redux'
import * as actions from '../../store/actions';

const WeatherToday = ({ setRedirectToCurrentWeather }) => {

    useEffect(() => {
        setRedirectToCurrentWeather(false);
    }, [setRedirectToCurrentWeather])

    return (
        <div className="weather-today">
            <h1>Weather Today</h1>
        </div>
    );
};

WeatherToday.propTypes = {
    setRedirectToCurrentWeather: PropTypes.func
};

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = dispatch => {
    return {
        setRedirectToCurrentWeather: (shouldRedirect) => dispatch(actions.setRedirectToCurrentWeather(shouldRedirect))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);