import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './card.css';

// Card is receiving two properties (reading and forecastlocation) from its parent component
const Card = ({ reading, forecastLocation }) => {

    // To transform the APIs data into a readable format, we ue the Moment.js to return the day of the week using the reading object's dt key
    const newDate = new Date();
    const weekday = reading.dt * 1000;
    newDate.setTime(weekday);

    // From the properties passed down from the parent component, we can specify and display the data from the reading object and the user's forecastLocation
    return (
        <div className="card-container">
            <div className="wrapper">
                <div className="header">
                    <h1 className="day">
                        {moment(newDate).format('dddd')}
                    </h1>
                    <div className="date">
                        {moment(newDate).format('Do MMM h:mm a')}
                    </div>
                </div>

                <h2 className="weather-condition">
                    {/* The weather data is stored as an array with index[0] as the location we need to access the weather description */}
                    {reading.weather[0].description}
                </h2>

                <div className="icon-temperature">
                    <div className="weather-icon">
                        <img src={`http://openweathermap.org/img/w/${reading.weather[0].icon}.png`} alt="weather icon" />
                    </div>
                    <div className="temperature">
                        {Math.round(reading.main.temp)} oC
                    </div>
                </div>

                <h2 className="location">
                    {forecastLocation}
                </h2>
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
