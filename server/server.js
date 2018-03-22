const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3001;

const mysql = require('mysql');

let config = {
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b4f011be68d73d',
    password: 'cba5db19',
    database: 'heroku_1ec22b50f6da2b8'
};

// connection.connect();
let connection;

function handleDisconnect() {

    connection = mysql.createConnection(config); // Recreate the connection, since// the old one cannot be reused.

    connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
        console.log('db error');
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//
// const staticFiles = express.static( '../../client/build/');
// app.use(staticFiles);

app.get('/getAllFilms', (req, res) => {
    connection.query('select idFilm,filmName,shortDescription,poster from films',function(err,result){
        if(err) throw err;
        res.send(result);
    });
});

// app.use('/*', staticFiles);

// app.get('/images/intesterall.jpg', (req, res) => {
//         res.sendFile('C:\\Users\\nadzeya.ivanouskaya\\PhpstormProjects\\films\\images\\intesterall.jpg');
// });
// app.get('/images/pulp.jpg', (req, res) => {
//     res.sendFile('C:\\Users\\nadzeya.ivanouskaya\\PhpstormProjects\\films\\images\\pulp.jpg');
// });
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