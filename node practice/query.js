    
    var http = require('http');
    var url = require('url');
    // var df = require('./myfirstmodule')
    var fs = require('fs'); // file server

    http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'text/plain'});
        var q = url.parse(req.url, true).query;
        var txt= q.year + " " + q.month;
        res.end(txt);
    }).listen(8080);    