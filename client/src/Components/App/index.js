import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import HomeContainer from '../../Containers/Home/';
import NotFound from '../NotFound/';
import FilmListPage from '../FilmListPage/';

const AppComponent = (props)=> {
    return (
        <div className="App">
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeContainer}/>
                <Route exact path={`${process.env.PUBLIC_URL}/filmList`} component={FilmListPage}/>
                <Route  component={NotFound}/>
            </Switch>
        </div>
    );

};

export default AppComponent;
