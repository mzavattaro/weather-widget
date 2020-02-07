import React from 'react';
import WeekContainer from './components/weekContainer';

import './app.css';

// The WeekContainer component is being inserted into the App() fuction
function App() {
    return (

        <div className="container">
            <div className="cell cell-1">
                <h1>
                    Weather Widget
                </h1>
            </div>
            <div className="cell cell-2" />
            <div className="cell cell-3">
                <WeekContainer />
            </div>
            <div className="cell cell-4" />
            <div className="cell cell-5">
                Made by Michael Zavattaro for the Koala Technical Test
            </div>
        </div>

    );
}

export default App;
