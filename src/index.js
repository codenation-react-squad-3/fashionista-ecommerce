import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../src/routes';
import Topbar from '../src/components/Topbar/Topbar';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <BrowserRouter>
        <Topbar />
        <Routes />
        </BrowserRouter>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
