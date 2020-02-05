import React from 'react';
import Card from './components/card';

import './app.css';

function App() {
    return (
        <div className="app">
            <div className="app-container">
                <div className="widget-list">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
