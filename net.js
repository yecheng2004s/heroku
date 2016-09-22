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
    .listen(port,function(){
        console.log('服务已启动，被监听的地址信息：%j', this.address());

        var http = require('http');

        http.createServer((req, res) => {
            if (req.url !== '/favicon.ico') {
                res.write("port:" + port);
                res.end();
            }
        }).listen(port)
    });
