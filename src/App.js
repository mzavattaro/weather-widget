import React from 'react';
import WeekContainer from './components/weekContainer';

import './app.css';

// The WeekContainer component is being inserted into the App() fuction
function App() {
    return (
        <div className="app">
            <div className="app-container">
                <WeekContainer />
            </div>
        </div>
    );
}

export default App;
