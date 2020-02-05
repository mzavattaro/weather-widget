import React from 'react';
// import PropTypes from 'prop-types';
// import { ReactComponent as SunnyIcon } from './sunny.svg';
import './card.css';

// import print from '../../utilities/print';

// const data = {
//     day: 'Friday',
//     date: '22 Nov 2019 8:30pm',
//     condition: 'Scattered Thunderstorms',
//     temperature: '28oC',
//     location: 'Sydney NSW',
// };

const Card = ({ userWeather }) => {

    return (
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
                <div className="location">
                    {/* {city} */}
                </div>
            </div>
        </div>
    );
};

export default Card;

// Card.propTypes = {
//     city: PropTypes.string.isRequired,
//     temperatureC: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
// };
