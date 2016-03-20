import 'babel-polyfill';
import '../public/scss/main.scss'
import React from 'react';
import { render } from 'react-dom';
import App from '../common/containers/App';
import configureStore from '../common/store/configureStore';
import { Provider } from 'react-redux';
import createRoutes from '../common/routes/routes';
import { browserHistory, Router } from 'react-router';
import DevTools from '../common/containers/DevTools';
import { syncHistoryWithStore } from 'react-router-redux';
import makeRouteHooksSafe from '../common/api/makeRouteHooksSafe';
import immutifyState        from '../common/api/immutifyState';

const initialState = window.__INITIAL_STATE__;
const root = document.getElementById('app');
const store = configureStore(browserHistory, initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router children={createRoutes} history={history} />
    </Provider>,
    root);

