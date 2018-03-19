const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'filmcatalog'
});
connection.connect();

app.get('/hi', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.get('/film', (req, res) => {
    connection.query('select filmName from film where idFilm=1',function(err,result){
        if(err) throw err;
        res.send({film: result });
    });
});

app.post('/addFilm', (req, res) => {
    console.log('ADD_FILM', req);
    connection.query('insert into film (filmName) values(?)',req.body,function(err,result){
        if(err) throw err;
        res.send({ result });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));