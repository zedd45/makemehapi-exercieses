var Hapi = require('hapi');
var fs = require('fs');
var rot13 = require("rot13-transform");

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2]) || 8080,
});


server.route({
    path: "/",
    method: "GET",
    handler: function (request, reply) {
        var file = __dirname + '/static/stream.txt';
        return reply(fs.createReadStream(file).pipe(rot13()));
    },
});

server.start();
