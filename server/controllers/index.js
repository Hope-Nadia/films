const bd = require('../BDconfig/');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

let salt = bcrypt.genSaltSync(10);

function getFilms(req, res) {
    let query = 'select idFilm, filmName, shortDescription, poster from films';
    bd.handleDisconnect().query(query, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

function getFilmInfo(req, res) {
    let query = 'select url from films inner join images using(idFilm) where idFilm= ? ';
    let id = req.params.id;
    bd.handleDisconnect().query(query,[id], function (err, result1) {
        let images = result1 ?  result1.map(item => item.url) : [];
        let query = 'select idFilm, filmName, description from films where idFilm= ? ';
        bd.handleDisconnect().query(query,[id], function (err, result2) {
            res.send({
                'id': result2[0].idFilm,
                'nameFilm': result2[0].filmName,
                'description': result2[0].description,
                'images': images});
        });

    });

};

function getFilmGallery(req, res) {
    let query = 'select url from films inner join images using(idFilm) where idFilm= ? ';
    let id = req.params.id;
    bd.handleDisconnect().query(query,[id], function (err, result1) {
        let images = result1 ?  result1.map(item => item.url) : [];
            res.send({'images': images});
    });
};

function getFilmComments(req, res) {
    let query = 'select text, email from  comments left join users using(idUser) where idFilm= ? ';
    let id = req.params.id;
    bd.handleDisconnect().query(query,[id], function (err, result) {
        let comments = result  ?  result .map(item => item) : [];
            res.send({'comments': comments});
    });
};

function  logIn (req, res){
    let userData = req.params.data.split('&');
    let query = 'select * from users where email = ?';
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

function sendComment(req,res) {
    let query = 'insert into comments (idFilm, idUser,text) values(? ,? ,?)';
    bd.handleDisconnect().query(query,[req.body.idFilm,req.body.idUser, req.body.text], (err,result)=> {
        console.log(result);
        res.send({'comment': 'send'});
    });
};

module.exports = {
    getFilms,
    logIn,
    signUp,
    getFilmInfo,
    getFilmComments,
    sendComment,
    getFilmGallery
};