var Hapi = require('hapi');
var path = require('path');

var server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: path.join(__dirname, 'static')
            }
        }
    }
});

server.connection({
    host: 'localhost',
    port: Number(process.argv[2]) || 8080,
});

server.route({
    path: "/",
    method: "GET",
    handler: {
        file: "index.html",
    }
});

server.start();
