import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './components/card';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    return (
        <div className="app">
            <div className="app-container">
                <Container>
                    <Row>
                        <div className="widget-list">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
