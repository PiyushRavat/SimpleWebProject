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
