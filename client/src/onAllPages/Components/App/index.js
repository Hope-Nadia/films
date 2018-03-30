import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomeContainer from '../../../AuthPage/Containers/Home';
import NotFound from '../../../NotFoundPage/index';
import FilmListPage from '../../../FilmListPage/Components/FilmListMain/index';
import Navigate from '../../Containers/navigation';
import Success from '../../../SuccessPage/';
import FilmMainBox from '../../../FilmInfoPage/Containers/filmMainBox';

const AppComponent = ()=> {
    return (
        <div className="App">
            <Navigate/>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeContainer}/>
                <Route exact path={`${process.env.PUBLIC_URL}/filmList`} component={FilmListPage}/>
                <Route exact path={`${process.env.PUBLIC_URL}/success`} component={Success}/>
                <Route path={`${process.env.PUBLIC_URL}/filmList/film/:name/:id`} component={FilmMainBox}/>
                <Route  component={NotFound}/>
            </Switch>
        </div>
    );

};

export default AppComponent;
