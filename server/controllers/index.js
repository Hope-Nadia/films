const bd = require('../BDconfig/');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

let salt = bcrypt.genSaltSync(10);

function getFilms(req, res) {
    let query = 'select idFilm, filmName, shortDescription, hposter as poster, avg(mark) as averageMark  from films join  marks using(idFilm) group by idFilm';
    bd.
      connection
        .query(query, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

function getFilmInfo(req, res) {
        let query = 'select idFilm, filmName, description from films where idFilm= ? ';
        let id = req.params.id;
        bd.connection.query(query,[id], function (err, result) {
            if(!result[0]) res.send({
                'id': 0,
                'nameFilm': 'Can\'t find this film',
                'description': ''
            });
            else res.send({
                'id': result[0].idFilm,
                'nameFilm': result[0].filmName,
                'description': result[0].description
            });
        });
};

function getFilmGallery(req, res) {
    let query = 'select hurl as url from films inner join images using(idFilm) where idFilm= ? ';
    let id = req.params.id;
    bd.connection.query(query,[id], function (err, result) {
        let images = result ?  result.map(item => item.url) : [];
            res.send({'images': images});
    });
};

function getFilmMark(req, res) {
    let query = 'SELECT avg(mark) as averageMark FROM marks where idFilm = ? ';
    let id = req.params.id;
    bd.connection.query(query,[id], function (err, result) {
        let mark = result[0] ? result[0].averageMark : 'not';
        res.send({'mark': mark});
    });
};

function getFilmComments(req, res) {
    let query = 'select text, email from  comments left join users using(idUser) where idFilm= ? ';
    let id = req.params.id;
    bd.connection.query(query,[id], function (err, result) {
        let comments = result  ?  result .map(item => item) : [];
            res.send({'comments': comments});
    });
};

function  logIn (req, res){
    let userData = req.params.data.split('&');
    let query = 'select * from users where email = ?';
    bd.connection.query(query,[userData[0]] ,(err, result)=> {
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
    bd.connection.query(query,[req.body.email, password], (err,result)=> {
        if(err) throw err;
        if(result[0][0].existedUser) res.send({'error':'User with this email exists'});
        else res.send(result[0][0]);
    });
};

function sendComment(req,res) {
    let query = 'insert into comments (idFilm, idUser,text) values(? ,? ,?)';
    bd.connection.query(query,[req.body.idFilm,req.body.idUser, req.body.text], (err,result)=> {
        if(result )  res.send({'comment': 'send'});
        else  res.send({'comment': 'error'});
    });
};

function sendMark(req,res) {
    let query = 'insert into marks (email,idFilm,mark) values(? , ? , ?)';
    bd.connection.query(query,[req.body.email,req.body.idFilm, req.body.mark], (err,result)=> {
        if(!result)res.send({'mark': 'not'});
        else res.send({'mark': 'send'});
    });
};

module.exports = {
    getFilms,
    logIn,
    signUp,
    getFilmInfo,
    getFilmComments,
    sendComment,
    getFilmGallery,
    getFilmMark,
    sendMark
};