const bd = require('../BDconfig/');
const mysql = require('mysql');
function getFilms(req, res) {
    bd.handleDisconnect().query('select idFilm,filmName,shortDescription,poster from films', function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const logIn= async(req, res)=> {

    let userData = req.params.data.split('&');
    let query = 'call login(? , ?)';
    bd.handleDisconnect().query(query,[userData[0], userData[1]] ,(err, result)=> {
        console.log('RESULT',result);
        if (err) throw err;
        if (!result[0]) {
            return res.send({'error': 'Cant find user with this email'});
        } else {
            console.log(result[0].hasOwnProperty('email'));
            if (result[0].hasOwnProperty('email')) {
                return res.send(result[0]);
            } else {
                return res.send({'error': 'Not right email or password'});
            }
        }
    });

};


module.exports = {
    getFilms,
    logIn
};