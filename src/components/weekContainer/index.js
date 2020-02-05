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
        const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiConfig}&units=metric`);
        const data = await weather.json();
        setUserWeather({
            lat: data.coord.lat,
            lon: data.coord.lon,
            city: data.name,
            temperatureC: Math.round(data.main.temp),
            icon: data.weather[0].icon,
        });

        print('API Data: ', data);
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

// class WeekContainer extends Component {

// componentDidMount() {
//     const { getPosition } = this;
//     getPosition()
//         .then((position) => {
//             const { getWeather } = this;
//             const { latitude, longitude } = position.coords;
//             getWeather(latitude, longitude);
//         })
//         .catch((err) => print(err.message));
// }

// getPosition = () => new Promise(((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
// }))

// getWeather = async (latitude, longitude) => {
//     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiConfig}&units=metric`);
//     const data = await api_call.json();
//     print('Data: ', data);
// }

//     render() {

//         return (
//             <div className="widget-list">
//                 <Grid fluid>
//                     <Row between="xs">
//                         <Col xs={4}>
//                             <Card />
//                         </Col>
//                         <Col xs={4}>
//                              <Card city={city} lat={lat} lon={lon} temperatureC={temperatureC} icon={icon} />
//                         </Col>
//                         <Col xs={4}>
//                             <Card />
//                         </Col>
//                     </Row>
//                 </Grid>
//             </div>
//         );
//     }
// }
