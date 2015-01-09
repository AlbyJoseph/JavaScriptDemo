var http=require('http');
var fs=require('fs');
console.log("Staring server");
http.createServer(function(request,response){
	response.writeHead(200,{"Content-type":"text/html"});
	fs.readFile('cssEg.html', 'utf-8',function (err, data) {
    if (err) throw err;
        response.write(data);
        console.log(request.body.username);
        response.end();
    });
	
}).listen(8885);
