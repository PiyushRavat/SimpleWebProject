var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
  //res.writehead(200,{'content-type : text/html'})
 if(req.url =='/'){
   fs.readFile('/index.html',utf-8,function(err,html){
     res.writeHead(200,{'content-type :text/html'});
     res.end(html);
   });
 }
})



var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000,()=> {
  console.log("server started at 3000");
});
