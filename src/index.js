import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import App from './components/App/App';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );

  return createStore(reducer, initialState, enhancer);
}
const store = configureStore({});

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
