var http=require('http');
console.log("Staring server");
http.createServer(function(request,response){
	response.writeHead(200,{"Content-type":"text/html"});
	//response.write("<h1>Hello world</h1>");
	//console.log(request);
	//console.log(response);
	response.end();
}).listen(8888);