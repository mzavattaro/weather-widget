import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '../card';
import ApiConfig from '../../utilities/apiKeys';

class WeekContainer extends Component {

    render() {

        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${ApiConfig.weatherKey}`;

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
