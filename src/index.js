import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logDispatch from './middlewares/loggingDispatchs';

import App from './components/App';
import reducers from './reducers';


const middlewares = [thunk, logDispatch];

const store = createStore(reducers, applyMiddleware(...middlewares));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
