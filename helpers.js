var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2]) || 8080,
});

server.route({
    path: "/",
    method: "GET",
    handler: function (request, reply) {
        reply.view('index2.html', request.query);
    },
});

server.views({
    engines: {
        "html": require('handlebars')
    },
    relativeTo: __dirname,
    path: 'templates',
    helpersPath: "helpers",
});

server.start();
