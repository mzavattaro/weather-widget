import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({ userWeather }) => (

    <div className="card-container">
        <div className="wrapper">
            <div className="header">
                <div className="day">
                    {/* {data.day} */}
                </div>
                <div className="date">
                    {/* {data.date} */}
                </div>
            </div>
            <div className="weather-condition">
                {/* {data.condition} */}
            </div>
            <div className="icon-temperature">
                <div className="weather-icon">
                    {/* {icon} */}
                </div>
                <div className="temperature">
                    {userWeather.temperatureC} oC
                </div>
            </div>
            <div className="location" userWeather={userWeather}>
                {/* {city} */}
            </div>
        </div>
    </div>
);

export default Card;

Card.propTypes = {
    userWeather: PropTypes.arrayOf.isRequired,
    temperatureC: PropTypes.string.isRequired,
};
