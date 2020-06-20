import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../src/routes';
import Topbar from '../src/components/Topbar/Topbar';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index'

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Topbar />
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
