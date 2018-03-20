import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import HomeContainer from '../../Containers/Home/';
import NotFound from '../NotFound/';
import FilmListContainer from '../../Containers/FilmListContainer/';

const AppComponent = (props)=> {
    console.log('APP',props);
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={HomeContainer}/>
                <Route exact path='/filmList' component={FilmListContainer}/>
                <Route  component={NotFound}/>
            </Switch>
        </div>
    );

};

export default AppComponent;
