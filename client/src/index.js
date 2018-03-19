import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import {combineReducers, createStore} from "redux";
import {routerReducer} from "react-router-redux";

import App from './Containers/App/index';
import reducer from '../src/Reducers/';

injectTapEventPlugin();

const history = createHistory();
const store = createStore(combineReducers ({
        reducer,
        routing: routerReducer
    })
);
const theme = createMuiTheme();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
