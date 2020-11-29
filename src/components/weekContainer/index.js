import React, { useState, useEffect } from 'react';
import Card from '../card';
import getPosition from '../../utilities/getPosition';
import ApiConfig from '../../utilities/apiKeys';
import print from '../../utilities/print';
import './weekContainer.css';

const WeekContainer = () => {

    const [dailyForecast, setDailyForecast] = useState([]);
    const [forecastLocation, setForecastLocation] = useState('');
    const [sunrise, setSunrise] = useState(0);
    const [sunset, setSunset] = useState(0);

    async function requestWeather(latitude, longitude) {

        const weather = await (await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${ApiConfig}&units=metric`)).json();
        const dailyData = weather.list.filter((reading, index) => index % 8 === 0);
        const userPosition = weather.city.name;
        const userSunrise = weather.city.sunrise;
        const userSunset = weather.city.sunset;

        setDailyForecast(dailyData);
        setForecastLocation(userPosition);
        setSunrise(userSunrise);
        setSunset(userSunset);
    }

    useEffect(() => {
        getPosition().then((position) => {
            const { latitude, longitude } = position.coords;
            requestWeather(latitude, longitude);
        }).catch((err) => print(err.message));
    }, []);

    const formatDayCards = () => dailyForecast.map((reading, index) => <Card reading={reading} key={index} forecastLocation={forecastLocation} sunset={sunset} sunrise={sunrise} />);

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
