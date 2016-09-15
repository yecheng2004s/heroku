var http = require('http');
var port = Number(process.env.PORT || 3000);

http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
        res.write("hello everyone");
        res.end();
    }
}).listen(port);