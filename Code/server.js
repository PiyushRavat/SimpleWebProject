var express = require('express');
var app = express();

var port = 8090;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server started localhost at' +port);
