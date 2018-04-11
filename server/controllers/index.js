const bd = require('../BDconfig/');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

let salt = bcrypt.genSaltSync(10);

function getFilms(req, res) {
    let query = 'select idFilm, filmName, shortDescription, poster as poster, averageMark  from films';
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
    let query = 'select url as url from films inner join images using(idFilm) where idFilm= ? ';
    let id = req.params.id;
    bd.connection.query(query,[id], function (err, result) {
        let images = result ?  result.map(item => item.url) : [];
            res.send({'images': images});
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

function  existedUser(req, res){
    let userData = req.params.data.split('&');
    let query = 'select idUser from users where idUser = ? and email = ?';
    bd.connection.query(query,[userData[0], userData[1]] ,(err, result)=> {
    res.send({'user': result});
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

function getFilmComments(req, res) {
    let query = 'select text, email from  comments join users using(idUser) where idFilm= ? ';
    let id = req.params.id;
    bd.connection.query(query,[id], function (err, result) {
        let comments = result  ?  result .map(item => item) : [];
        res.send({'comments': comments});
    });
};

function sendComment(req,res) {
    let query = 'insert into comments (idFilm, idUser,text) values(? ,? ,?)';
    bd.connection.query(query,[req.body.idFilm,req.body.idUser, req.body.text], (err,result)=> {
        if(result )  res.send({'comment': 'send'});
        else  res.send({'comment': 'error'});
    });
};

function getFilmMark(req, res) {
    let query = 'SELECT  averageMark FROM films where idFilm = ? ';
    let id = req.params.id;
    bd.connection.query(query,[id], function (err, result) {
        let mark = result[0] ? parseFloat(result[0].averageMark.toFixed(1)) : 'not';
        res.send({'mark': mark});
    });
};

function sendMark(req,res) {
    let query = 'insert into marks (idUser,idFilm,mark) values(? , ? , ?)';
    bd.connection.query(query,[req.body.idUser,req.body.idFilm, req.body.mark], (err,result)=> {
        if(!result)res.send({'mark': 'not'});
        else res.send({'mark': 'send'});
    });
};

function deleteFilm(req,res) {
    let query = 'delete from films where idFilm = ?';
    bd.connection.query(query,[req.body.id], (err,result)=> {
        res.send({'delete': true});
    });
}

function addFilm(req,res) {
    let query = 'call addFilm(? , ? , ? , ? , ?, ?);';
    console.log(req.body);
    bd.connection.query(query,[req.body.name, req.body.description, req.body.shortDescription, req.body.poster,req.body.poster, req.body.images], (err,result)=> {
        console.log(result[0][0].film);
        if(result==undefined) res.send({'add': false});
        else res.send({'add': result[0][0].film});
    });

}


module.exports = {
    sendComment,
    getFilmGallery,
    getFilmMark,
    sendMark,
    deleteFilm,
    addFilm,
    getFilms,
    logIn,
    signUp,
    getFilmInfo,
    getFilmComments,
    existedUser,
};