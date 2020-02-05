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
                    <div className="day">
                        {moment(newDate).format('dddd')}
                    </div>
                    <div className="date">
                        {moment(newDate).format('Do MMM h:mm a')}
                    </div>
                </div>
                <div className="weather-condition">
                    {reading.weather[0].description}
                </div>
                <div className="icon-temperature">
                    <div className="weather-icon">
                        {/* <img src={`http://openweathermap.org/img/w/${dailyForecast.icon}.png`} alt="weather icon" /> */}
                    </div>
                    <div className="temperature">
                        {Math.round(reading.main.temp)}
                    </div>
                </div>
                <div className="location">
                    {forecastLocation}
                </div>
            </div>
        </div>
    );
};

export default Card;

// Card.propTypes = {
//     dailyForecast: PropTypes.arrayOf.isRequired,
//     temperatureC: PropTypes.string.isRequired,
// };
