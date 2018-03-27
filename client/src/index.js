import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import store from './Store/';
import AppComponent from './Components/App/';

injectTapEventPlugin();

const history = createHistory();

const theme = createMuiTheme();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MuiThemeProvider theme={theme}>
                <AppComponent />
            </MuiThemeProvider>
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
