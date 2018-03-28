const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const routes = require('./routes/');
const bd = require('./BDconfig/');


const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
bd.handleDisconnect();

const staticFiles = express.static(path.join(__dirname, '../client/build'));
app.use(staticFiles);

app.use(routes);

// app.get('*', (req, res) => {
//     res.sendFile(path.join( __dirname,'../client/build/', 'index.html'));
// });

app.listen(port, () => console.log(`Listening on port ${port}`));

