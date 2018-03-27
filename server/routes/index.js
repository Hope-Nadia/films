const express = require('express');
const path = require('path');
const routes = express.Router();
const bd = require('../BDconfig/');

routes.get('/images/:img', (req, res) => {
    res.sendFile(path.join( __dirname,`../images/${req.params.img}`));
});

routes.get('/getAllFilms', (req, res) => {
    bd.handleDisconnect().query('select idFilm,filmName,shortDescription,poster from films',function(err,result){
        if(err) throw err;
        res.send(result);
    });
});

module.exports = routes;