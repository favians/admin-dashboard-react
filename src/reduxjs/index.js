import counterReducer from 'reduxjs/reducers/counterReducer';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer
});

const store = createStore(rootReducer);

export default store;
