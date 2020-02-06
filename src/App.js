import React from 'react';
import WeekContainer from './components/weekContainer';

import './app.css';

// The WeekContainer component is being inserted into the App() fuction
function App() {
    return (

        <div className="lt-grid-container">
            <div className="lt-header">
                <h1>
                    Weather Widget
                </h1>
            </div>
            <div className="lt-widget-container">
                <WeekContainer />
            </div>
            <div className="lt-footer">
                <span>Made with ❤️ for Koala 🐨</span>
            </div>
            <div className="lt-left-border" />
            <div className="lt-right-border" />
        </div>
    );
}

export default App;
