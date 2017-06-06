'use strict';

const app = require('./app')
const port = process.env.port || 3000

app.listen(port, function (err) {
    if (err) {
        throw err
    }
    console.log('server listening on port: ' + port)
})

//var http = require('http');
//var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
