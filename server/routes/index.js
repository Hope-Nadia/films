const express = require('express');
const path = require('path');
const routes = express.Router();
const controllers = require('../controllers/');

routes.get('/films', controllers.getFilms);

routes.get('/login/:data' , controllers.logIn);
routes.post('/signup', controllers.signUp);
routes.get('/filmInfo/:id', controllers.getFilmInfo);
routes.get('/filmComments/:id', controllers.getFilmComments);

module.exports = routes;
