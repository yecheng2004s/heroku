var port = Number(process.env.PORT || 3000);

var net = require('net')
var server = net.createServer();
server
    .on('connection', function(client) {
        client.setEncoding('utf8');
        client.name = client.remoteAddress + ':' + client.remotePort;
        client.on('data', function(data) {
                client.write("hello socket");
            })
    })
    .listen(port);
