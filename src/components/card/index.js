import React from 'react';
import moment from 'moment';
// import PropTypes from 'prop-types';
import './card.css';

const Card = ({ reading, forecastLocation }) => {

    const newDate = new Date();
    const weekday = reading.dt * 1000;
    newDate.setTime(weekday);

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

// Card.propTypes = {
//     dailyForecast: PropTypes.arrayOf.isRequired,
//     temperatureC: PropTypes.string.isRequired,
// };
