import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import reducers from '../reducers';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import promiseMiddleware from '../api/promiseMiddleware';
import { routerMiddleware } from 'react-router-redux'


const universalMiddleware = [thunk, promiseMiddleware];

export default function configureStore(history, initialState) {
    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(routerMiddleware(history), ...universalMiddleware)
        )
    );

    if(module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}