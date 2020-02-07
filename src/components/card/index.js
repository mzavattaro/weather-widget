import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ReactComponent as SunriseSVG } from './sunrise.svg';
import { ReactComponent as SunsetSVG } from './sunset.svg';
import './card.css';

// Card is receiving four properties from its parent component
const Card = ({ reading, forecastLocation, sunset, sunrise }) => (
    <div className="card-container">
        <div className="header">
            <div className="day-tag">
                <h2 className="day">
                    {moment.unix(reading.dt).format('dddd')}
                </h2>
            </div>

            <div className="temp-condition-icon">
                <div className="temp-condition">
                    <div className="temperature">
                        {Math.round(reading.main.temp)}<sup><span><sup>o</sup>C</span></sup>
                    </div>
                    <div className="weather-condition">
                        {/* The weather data is stored as an array. index[0] is the location we need to access to pass the weather description */}
                        {reading.weather[0].description}
                    </div>
                    <div className="feels-like">
                        Feels like {Math.round(reading.main.feels_like)}<sup><span><sup>o</sup>C</span></sup>
                    </div>
                    <div className="wind-speed">
                        Winds up to {Math.round(reading.wind.speed * 3.6)} km/h
                    </div>
                    <div className="humidity">
                        Daily humidity of {reading.main.humidity}%
                    </div>
                    <div className="pressure">
                        BP of {reading.main.pressure} hPa
                    </div>
                </div>

                <div className="icon-temperature">
                    <div className="weather-icon">
                        <img src={`http://openweathermap.org/img/wn/${reading.weather[0].icon}@2x.png`} alt="weather icon" />
                    </div>
                </div>
            </div>
        </div>

        <div className="footer">
            <div className="twilight-hours">
                <div className="subheader">
                    Twilight
                </div>
                <div className="sunrise-sunset">
                    <div className="sunrise">
                        <SunriseSVG className="sunrise-svg" />
                        {moment.unix(sunrise).format('h:mm a')}
                    </div>
                    <div className="sunset">
                        <SunsetSVG className="sunset-svg" />
                        {moment.unix(sunset).format('h:mm a')}
                    </div>
                </div>
            </div>
            <div className="location-date">
                <div className="location">
                    {forecastLocation}
                </div>
                <div className="date">
                    {moment.unix(reading.dt).format('Do MMMM h:mm a')}
                </div>
            </div>
        </div>

    </div>

);
export default Card;

// propTypes define the properties required by the Card component
Card.propTypes = {
    forecastLocation: PropTypes.string.isRequired,
    sunset: PropTypes.number.isRequired,
    sunrise: PropTypes.number.isRequired,
    reading: PropTypes.shape({
        dt: PropTypes.number.isRequired,
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired,
        }).isRequired,
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired,
            feels_like: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired,
            pressure: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};
