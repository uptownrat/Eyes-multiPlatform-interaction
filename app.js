const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const LISTEN_PORT = 8080;
const ABS_STATIC_PATH = __dirname + '/public';

app.get('/', function(req,res) {
    res.sendFile('index.html', {root:ABS_STATIC_PATH});
});

app.use(express.static(ABS_STATIC_PATH));
server.listen(LISTEN_PORT);
console.log("Listening on port: " + LISTEN_PORT);