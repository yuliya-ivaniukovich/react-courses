import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import './index.css';
import App from './components/App.container';
import api from './redux/middleware/api';
import rates from './redux/modules/rates';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(rates, applyMiddleware(thunk, api, promise));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
