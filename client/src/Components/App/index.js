import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomeContainer from '../../HomePage/Containers/Home';
import NotFound from '../../NotFoundPage/NotFound/index';
import FilmListPage from '../../FilmListPage/Components/FilmListMain/';

const AppComponent = ()=> {
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
