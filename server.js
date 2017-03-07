var http = require('http');
var port = Number(process.env.PORT || 3000);

var server = http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
        res.write("port:" + port);
        res.end("aa");
    }
});
server.listen(port,function(){
    var str = this;
})
