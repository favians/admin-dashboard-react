import counterReducer from 'reduxjs/reducers/counterReducer';
import requestReducer from 'reduxjs/reducers/requestReducer';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const loggingMiddleware = (store) => (next) => (action) => {
  // we will catch every action here, regardless of the type
 
  // log the current action
  console.log('dispatching', action)
  // continue execution of the action
  next(action)
}

const rootReducer = combineReducers({
  counter: counterReducer,
  request: requestReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, loggingMiddleware));

export default store;
