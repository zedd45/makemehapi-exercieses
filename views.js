var Hapi = require('hapi');
var path = require('path');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2]) || 8080,
});

server.route({
    path: "/",
    method: "GET",
    // The provided answer doesn't actually work here
    // `handler: { view: 'index.html' }`
    // perhaps older version(s) of Hapi did inject the query params as global context,
    // but this didn't provide a context to Handlebars
    handler: function (request, reply) {
        reply.view('index.html', { name: request.query.name});
    }
});

server.views({
    engines: {
        "html": require('handlebars')
    },
    path: path.join(__dirname, 'templates')
});

server.start();
