var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8080);
console.log('go to http://localhost:8080/filmstrip.html')
