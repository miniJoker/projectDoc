'use strict';
var http = require('http');
var fs = require("fs");
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile("./index.html", "utf-8", function (error, data) {

        if (error) {

            res.statusCode = 404;
            res.end("Ресурс не найден!");
        }
        else {
            res.end(data);
        }
        return;
    })
}).listen(port);
