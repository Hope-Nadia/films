const bd = require('../BDconfig/');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

let salt = bcrypt.genSaltSync(10);

function getFilms(req, res) {
    let query = 'select idFilm,filmName,description,shortDescription,hposter from films';
    bd.handleDisconnect().query(query, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

function getFilmGallery(req, res) {
    let query = 'select url from films inner join images using(idFilm) where idFilm= ? ';
    let id = req.params.id;
    bd.handleDisconnect().query(query,[id], function (err, result) {
        console.log('result',result);
        let images = result ?  result.map(item => item.url) : [];
        res.send({'images': images});
    });
    // return res.send({'filmGallery': 'none'});
};

function  logIn (req, res){
    let userData = req.params.data.split('&');
    let query = 'select * from heroku_1b3ae45f7f1923d.users where email = ?';
    bd.handleDisconnect().query(query,[userData[0]] ,(err, result)=> {
        if (err) throw err;
        let user = result[0] ? result[0] : null;
        if (!user) {
            return res.send({'error': 'Cant find user with this email'});
        } else if(bcrypt.compareSync(userData[1],user.password)){
            res.send(user);
        } else {
            return res.send({'error': 'Not right email or password'});
        }
    });
};

function signUp(req,res) {
    let query = 'call signup(? , ?)';
    let password = bcrypt.hashSync(req.body.password,salt);
    bd.handleDisconnect().query(query,[req.body.email, password], (err,result)=> {
        if(err) throw err;
        if(result[0][0].existedUser) res.send({'error':'User with this email exists'});
        else res.send(result[0][0]);
    });
};

module.exports = {
    getFilms,
    logIn,
    signUp,
    getFilmGallery
};