import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root';
import { pingEpic } from './epics/index';



const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(pingEpic);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));