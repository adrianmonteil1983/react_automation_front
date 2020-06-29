import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { mqttConnection, memory, graph } from '../reducer/reducers';

const rootReducer = combineReducers({mqttConnection, memory, graph});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;