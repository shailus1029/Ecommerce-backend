const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('./config/db');

// using http server to bind the socket io
const http = require('http');

//call the database connectivity function
db();

//importing routes
const user = require('./routes/user.route');

//initilizing our express app
const app = express();

//adding body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/user' ,user);

//defining the port to run the server
const port = 8000;

var server = http.createServer(app);

//listening to the port 8000
server.listen(port, () => {
    console.log("server is running on  port : ", port)
});
