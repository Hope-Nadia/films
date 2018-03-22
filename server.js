const express = require('express');
const bodyParser = require('body-parser');

;const app = express();



const port = process.env.PORT || 3001;

const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'filmcatalog'
});
connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/getAllFilms', (req, res) => {
    connection.query('select idFilm,filmName,shortDescription,poster from film',function(err,result){
        if(err) throw err;
        res.send(result);
    });
});

app.get('/images/intesterall.jpg', (req, res) => {
        res.sendFile('C:\\Users\\nadzeya.ivanouskaya\\PhpstormProjects\\films\\images\\intesterall.jpg');
});
app.get('/images/pulp.jpg', (req, res) => {
    res.sendFile('C:\\Users\\nadzeya.ivanouskaya\\PhpstormProjects\\films\\images\\pulp.jpg');
});
// app.post('/addFilm', (req, res) => {
//     let val = [ req.body.nameFilm, req.body.description];
//     console.log(val);
//     connection.query('INSERT INTO film (filmName, description) VALUES(?)',[val],function(err){
//         if(err) throw err;
//         // res.send(val);
//     });
//
// });

app.listen(port, () => console.log(`Listening on port ${port}`));