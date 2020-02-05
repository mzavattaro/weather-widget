import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import WeekContainer from './components/weekContainer';

import './app.css';

function App() {
    return (
        <div className="app">
            <Grid fluid className="app-container">
                <Row>
                    <Col xs={12} md={12}>
                        <WeekContainer />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default App;
