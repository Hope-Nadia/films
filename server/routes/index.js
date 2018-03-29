const express = require('express');
const path = require('path');
const routes = express.Router();
const controllers = require('../controllers/');

routes.get('/images/:img', (req, res) => {
    res.sendFile(path.join( __dirname,`../images/${req.params.img}`));
});

routes.get('/films', controllers.getFilms);

routes.get('/login/:data' , controllers.logIn);
routes.post('/signup', controllers.signUp);

module.exports = routes;
