import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Route from './routes/Router';
import registerServiceWorker from './registerServiceWorker';

const render = () => ReactDOM.render(<Route />, document.getElementById('root'));
render()

registerServiceWorker();
