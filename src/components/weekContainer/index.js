import React, { useState, useEffect } from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '../card';
import getPosition from '../../utilities/getPosition';
import ApiConfig from '../../utilities/apiKeys';
import print from '../../utilities/print';
import './weekContainer.css';

const WeekContainer = () => {
    const [dailyForecast, setDailyForecast] = useState([]);
    const [forecastLocation, setForecastLocation] = useState('');

    async function requestWeather(latitude, longitude) {
        const weather = await (await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${ApiConfig}&units=metric`)).json();
        const dailyData = weather.list.filter(reading => reading.dt_txt.includes('18:00:00'));
        const userPosition = weather.city.name;

        setDailyForecast(dailyData);
        setForecastLocation(userPosition);
    }

    useEffect(() => {
        getPosition().then((position) => {
            const { latitude, longitude } = position.coords;
            requestWeather(latitude, longitude);
        }).catch((err) => print(err.message));
    }, []);

    const formatDayCards = () => dailyForecast.map((reading, index) => <Card reading={reading} key={index} forecastLocation={forecastLocation} />);

    return (
        <div className="card-list-container">
            <div className="card-list-wrapper">
                <div className="card-list">
                    {formatDayCards()}
                </div>
            </div>
        </div>
    );
};

export default WeekContainer;
