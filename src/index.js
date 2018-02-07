import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Route from './routes/Router';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'

// 注入redux
// import Counter from './page/counter'
import counter from './store/counterStore'
const store = createStore(counter)

const render = () => ReactDOM.render(<Route />, document.getElementById('root'));
render()

store.subscribe(render)
registerServiceWorker();
