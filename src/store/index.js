import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from '../models';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, applyMiddleware(...middleware));

// const enhancer = applyMiddleware([logger, ReduxThunk]);
// const store = createStore(enhancer);
export default store;