import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '../card';
import ApiConfig from '../../utilities/apiKeys';
import print from '../../utilities/print';

class WeekContainer extends Component {

    componentDidMount() {
        this.getPosition()
            .then((position) => {
                this.getWeather(position.coords.latitude, position.coords.longitude);
            })
            .catch((err) => print(err.message));
    }

    getPosition = () => new Promise(((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }))

    getWeather = async (latitude, longitude) => {
        const api_call = await
        fetch(`http//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiConfig}&units=metric`);
        const data = await api_call.json();

        console.log('Data: ', data);
    }

    render() {

        return (
            <div className="widget-list">
                <Grid fluid>
                    <Row between="xs">
                        <Col xs={4}>
                            <Card />
                        </Col>
                        <Col xs={4}>
                            <Card />
                        </Col>
                        <Col xs={4}>
                            <Card />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default WeekContainer;
