import React, { useState, useEffect } from 'react';
import Card from '../card';
import getPosition from '../../utilities/getPosition';
import ApiConfig from '../../utilities/apiKeys';
import print from '../../utilities/print';
import './weekContainer.css';

// WeekContainer is a classless component utilising Hooks as a means to setState
const WeekContainer = () => {
    // useState returns dailyForecast and forecastLocation arrays with the current value of each state and a function to update that function
    // The dailyForecast state is given a default value of an empty array
    // The forecastLocation state is given a default value of an empty string
    const [dailyForecast, setDailyForecast] = useState([]);
    const [forecastLocation, setForecastLocation] = useState('');
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');

    // Utilising an async function to fetch forecast data from openweathermap api based upon latitude and longitude that are passed as arguments
    // Async function guarantees that it's going to return a Promise. Also provides the await keyword that forces the function to wait and complete before it provides data
    async function requestWeather(latitude, longitude) {
        // requestWeather method takes two arguments latitude and longitude then makes an API call using latitude, longitude and the API key (ApiConfig)
        const weather = await (await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${ApiConfig}&units=metric`)).json();
        // Forecast api provides an object with a list of 40 entries. I'm accessing this list from the api using a filter method to...
        // ...target each individual list reading with a timestamp of 18:00:00. This reduces the list of 40 entries to 5 consecutive days and stores it in dailyData variable
        const dailyData = weather.list.filter(reading => reading.dt_txt.includes('18:00:00'));
        // The problem with this filter method, is that it strips the location data from the weather variable as it's not included within each individual list entry. To resolve this...
        // ...I accessed the full api data set stored in the weather variable and targeted city name
        // This gets stored in its own varible which gets passed into the setForecastLocation state to update the users location based on city name
        // This also "transforms" unusuable longitude and latitude data into a readable city name
        const userPosition = weather.city.name;
        const userSunrise = weather.city.sunrise;
        const userSunset = weather.city.sunset;

        // The two setStates below are taking the data stored in dailyData and userPosition varibles and updating the dailyForecast and forecastLocation states
        setDailyForecast(dailyData);
        setForecastLocation(userPosition);
        setSunrise(userSunrise);
        setSunset(userSunset);
        print('data: ', weather);
    }

    // useEffect replaces the need to use componentDidMount lifecycle method
    useEffect(() => {
        getPosition().then((position) => {
            // Destructured below for readability
            const { latitude, longitude } = position.coords;
            requestWeather(latitude, longitude);
        }).catch((err) => print(err.message));
        // useEffect takes two parameters. The second param is a dependency array. The empty array forces useEffect to fire once and are no dependencies
    }, []);

    // Here we're mapping over the dailyForecast state to take each individual reading (and index) and display it as the formatDayCards function...
    // ...this will then insert a Card component for each reading. The Card component is passed reading, index and forecastLocation as props
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
