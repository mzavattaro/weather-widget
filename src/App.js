import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './components/card';

import './app.css';

function App() {
    return (
        <div className="app">
            <div className="app-container">
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
            </div>
        </div>
    );
}

export default App;
