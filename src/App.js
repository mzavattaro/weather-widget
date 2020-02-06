import React from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import WeekContainer from './components/weekContainer';

import './app.css';

function App() {
    return (
        <div className="app">
            <div className="app-container">
                <WeekContainer />
            </div>
        </div>
        //     <div className="app">
        //     <Grid fluid className="app-container">
        //         <Row center="lg">
        //             <Col lg={8} className="app-wrapper">
        //                 <WeekContainer />
        //             </Col>
        //         </Row>
        //     </Grid>
        // </div>
    );
}

export default App;
