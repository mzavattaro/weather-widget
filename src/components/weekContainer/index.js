import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '../card';
import ApiConfig from '../../utilities/apiKeys';
import print from '../../utilities/print';

const WeekContainer = () => {
    const [dailyForecast, setDailyForecast] = useState([]);
    const [forecastLocation, setForecastLocation] = useState('');

    const getPosition = () => new Promise(((latitude, longitude) => {
        navigator.geolocation.getCurrentPosition(latitude, longitude);
    }));

    async function requestWeather(latitude, longitude) {
        const weather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${ApiConfig}&units=metric`);
        const data = await weather.json();
        const dailyData = data.list.filter(reading => reading.dt_txt.includes('18:00:00'));
        const userPosition = data.city.name;
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
        <div className="widget-container">
            <Grid fluid>
                <Row between="lg">
                    <Col lg={12}>
                        <div className="widget-list">
                            {formatDayCards()}
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default WeekContainer;
