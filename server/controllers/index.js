const bd = require('../BDconfig/');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

let salt = bcrypt.genSaltSync(10);

function getFilms(req, res) {
    bd.handleDisconnect().query('select idFilm,filmName,shortDescription,poster from films', function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const logIn = (req, res)=> {
    let userData = req.params.data.split('&');
    let password = bcrypt.hashSync( userData[1],salt);
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
    signUp
};