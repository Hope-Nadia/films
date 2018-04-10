const mysql = require('mysql');
//
// let config = {
//     host: 'us-cdbr-iron-east-05.cleardb.net',
//     user: 'bf1d8e55932c6d',
//     password: 'c72ebe3f',
//     database: 'heroku_1b3ae45f7f1923d',
// };

let config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'filmcatalog',
};

let Connection = mysql.createConnection(config);
//
// let  handleDisconnect = function() {
//
//     let connection = mysql.createConnection(config); // Recreate the connection, since// the old one cannot be reused.
//     connection.connect(function(err) {              // The server is either down
//         if(err) {                                     // or restarting (takes a while sometimes).
//             console.log('error when connecting to db:', err);
//             setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//         }                                     // to avoid a hot loop, and to allow our node script to
//     });                                     // process asynchronous requests in the meantime.
//                                             // If you're also serving http, display a 503 error.
//     connection.on('error', function(err) {
//         console.log('db error');
//         if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//             handleDisconnect();                         // lost due to either server restart, or a
//         } else {                                      // connnection idle timeout (the wait_timeout
//             throw err;                                  // server variable configures this)
//         }
//     });
//     return connection;
// };

module.exports.connection = Connection;
// module.exports.handleDisconnect = handleDisconnect;