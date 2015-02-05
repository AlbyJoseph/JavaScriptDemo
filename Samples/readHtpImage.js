var http=require('http');
var fs=require('fs');
console.log("Staring server");
http.createServer(function(request,response){
	response.writeHead(200,{"Content-type":"image/jpg"});
	fs.readFile('download.jpg',function (err, data) {
    if (err) throw err;
        response.write(data);
        response.end();
    });
	
}).listen(8888);
