import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import getWeather from '../../utilities/getWeather';
import ApiConfig from '../../utilities/apiKeys';
// import getPosition from '../../utilities/getPosition';
import Card from '../card';
import print from '../../utilities/print';

const WeekContainer = () => {
    const [userWeather, setUserWeather] = useState([]);

    const getPosition = () => new Promise(((latitude, longitude) => {
        navigator.geolocation.getCurrentPosition(latitude, longitude);
    }));

    async function requestWeather(latitude, longitude) {
        const weatherData = await (await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiConfig}&units=metric`)).json();

        setUserWeather({
            lat: weatherData.coord.lat,
            lon: weatherData.coord.lon,
            city: weatherData.name,
            temperatureC: Math.round(weatherData.main.temp),
            icon: weatherData.weather[0].icon,
        });

        print('Weather data: ', weatherData);
    }

    useEffect(() => {
        getPosition().then((position) => {
            requestWeather(position.coords.latitude, position.coords.longitude);
        }).catch((err) => print(err.message));
    }, []);

    return (
        <div className="widget-container">
            <Grid fluid>
                <Row between="xs">
                    <Col xs={4}>
                        <div className="widget-list">
                            <Card userWeather={userWeather} />
                        </div>

                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default WeekContainer;
