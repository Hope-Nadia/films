import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../../../Pages/Home/Components/Main';
import NotFound from '../../../Pages/NotFound/Components/NotFoundText/index';
import FilmListPage from '../../../Pages/FilmList/Components/FilmListMain/index';
import Navigate from '../../Containers/navigation';
import Success from '../../../Pages/Success/Components/SuccessText/';
import FilmMainBox from '../../../Pages/FilmInfo/Containers/filmMainBox';
import LogInContainer from '../../../Pages/LogIn/Containers/LogInContainer';
import SignUpForm from '../../../Pages/SignUp/Containers/SignUpContainer';
import AddFilmForm from '../../../Admin/Containers/addFilmForm';
import EditFilmForm from '../../../Admin/Containers/editFilmForm';

const AppComponent = ()=> {
    return (
        <div className="App">
            <Navigate/>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
                <Route exact path={`${process.env.PUBLIC_URL}/filmList`} component={FilmListPage}/>
                <Route exact path={`${process.env.PUBLIC_URL}/logIn`} component={LogInContainer}/>
                <Route exact path={`${process.env.PUBLIC_URL}/signUp`} component={SignUpForm}/>
                <Route exact path={`${process.env.PUBLIC_URL}/success`} component={Success}/>
                <Route exact path={`${process.env.PUBLIC_URL}/addFilmForm`} component={AddFilmForm}/>
                <Route exact path={`${process.env.PUBLIC_URL}/filmList/film/:id`} component={EditFilmForm}/>
                <Route path={`${process.env.PUBLIC_URL}/filmList/film/:name/:id`} component={FilmMainBox}/>
                <Route  component={NotFound}/>
            </Switch>
        </div>
    );

};

export default AppComponent;
