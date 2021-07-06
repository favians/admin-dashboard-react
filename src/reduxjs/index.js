import counterReducer from 'reduxjs/reducers/counterReducer';
import requestReducer from 'reduxjs/reducers/requestReducer';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter: counterReducer,
  request: requestReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
