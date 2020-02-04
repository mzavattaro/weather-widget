import React from 'react';
import { ReactComponent as SunnyIcon } from './sunny.svg';
import './card.css';

import print from '../../utilities/print';

const data = {
    day: 'Friday',
    date: '22 Nov 2019 8:30pm',
    condition: 'Scattered Thunderstorms',
    temperature: '28oC',
    location: 'Sydney NSW',
};

const Card = () => (
    <div className="container">
        <div className="wrapper">
            <div className="header">
                <div className="day">
                    {data.day}
                </div>
                <div className="date">
                    {data.date}
                </div>
            </div>
            <div className="weather-condition">
                {data.condition}
            </div>
            <div className="icon-temperature">
                <div className="weather-icon">
                    <SunnyIcon />
                </div>
                <div className="temperature">
                    {data.temperature}
                </div>
            </div>
            <div className="location">
                {data.location}
            </div>
        </div>
    </div>
);

export default Card;
