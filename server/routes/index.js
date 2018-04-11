const express = require('express');
const path = require('path');
const routes = express.Router();
const controllers = require('../controllers/');

routes.get('/films', controllers.getFilms);
routes.get('/login/:data' , controllers.logIn);
routes.get('/filmInfo/:id', controllers.getFilmInfo);
routes.get('/filmMark/:id', controllers.getFilmMark);
routes.get('/existedUser/:data' , controllers.existedUser);
routes.get('/filmGallery/:id', controllers.getFilmGallery);
routes.get('/filmComments/:id', controllers.getFilmComments);

routes.post('/signup', controllers.signUp);
routes.post('/comment', controllers.sendComment);
routes.post('/mark', controllers.sendMark);

routes.put('/newFilm', controllers.addFilm);

routes.delete('/film', controllers.deleteFilm);
module.exports = routes;
