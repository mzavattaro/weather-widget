import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ReactComponent as SunriseSVG } from './sunrise.svg';
import { ReactComponent as SunsetSVG } from './sunset.svg';
import './card.css';

// Card is receiving two properties (reading and forecastlocation) from its parent component
const Card = ({ reading, forecastLocation, sunset, sunrise }) => {

    // To transform the APIs data into a readable format, we ue the Moment.js to return the day of the week using the reading object's dt key
    const newDate = new Date();
    const weekday = reading.dt * 1000;
    newDate.setTime(weekday);

    const dailySunrise = new Date();
    const sunriseTime = sunrise * 1000;
    dailySunrise.setTime(sunriseTime);

    const dailySunset = new Date();
    const sunseTime = sunset * 1000;
    dailySunset.setTime(sunseTime);


    // From the properties passed down from the parent component, we can specify and display the data from the reading object and the user's forecastLocation
    return (
        <div className="card-container">
            <div className="header">
                <div className="day-tag">
                    <h2 className="day">
                        {moment(newDate).format('dddd')}
                    </h2>
                </div>


                <div className="temp-condition-icon">
                    <div className="temp-condition">
                        <div className="temperature">
                            {Math.round(reading.main.temp)}<sup><span><sup>o</sup>C</span></sup>
                        </div>
                        <div className="weather-condition">
                            {/* The weather data is stored as an array with index[0] as the location we need to access the weather description */}
                            {reading.weather[0].description}
                        </div>
                        <div className="wind-speed">
                            Winds up to {Math.round(reading.wind.speed * 3.6)} kms
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
                            {moment(dailySunrise).format('h:mm a')}
                        </div>
                        <div className="sunset">
                            <SunsetSVG className="sunset-svg" />
                            {moment(dailySunset).format('h:mm a')}
                        </div>
                    </div>
                </div>
                <div className="location-date">
                    <div className="location">
                        {forecastLocation}
                    </div>
                    <div className="date">
                        {moment(newDate).format('Do MMMM')}
                    </div>
                </div>
            </div>

        </div>

    );
};


export default Card;

// propTypes define the properties required by the Card component
Card.propTypes = {
    reading: PropTypes.shape({ root: PropTypes.string }),
    forecastLocation: PropTypes.string.isRequired,
    main: PropTypes.shape({ root: PropTypes.object }),
    temp: PropTypes.string,
    dt: PropTypes.number,
};

Card.defaultProps = {
    reading: '',
    main: {},
    temp: '',
    dt: 0,
};
