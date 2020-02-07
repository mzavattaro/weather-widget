import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.css';
import * as serviceWorker from './utilities/serviceWorker';

const app = <App />;
const root = document.getElementById('root');
render(app, root);

serviceWorker.unregister();
