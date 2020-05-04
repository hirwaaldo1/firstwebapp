import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import store from './action/chat_action'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise'
import Reducer from '../src/reducer/index';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore);
ReactDOM.render(
<Provider
        store={createStoreWithMiddleware(
            Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    ><App/></Provider>
,document.getElementById('root'));

serviceWorker.unregister();
