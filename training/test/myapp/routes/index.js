var express = require('express');
var router = express.Router();

/* GET home page.*/ 
router.get('/', function(req, res) {
	
	 res.render('index', { title: 'hello' });

});
router.post('/h', function(req, res) {
 var read = function(req,res){
		var fs = require('fs');
        var arr = [];
		var userPwd = [];
		var username = req.body.username;
		var pwd = req.body.password;
		var flag=0;
        fs.readFile(__dirname + '/userDb.txt','utf-8',function (err, data) { 
        	console.log(err);
        	arr = data.toString().split("\n");

        	for(var i in arr){
        		userPwd = arr[i].split(":");
        		if((username === userPwd[0]) && (pwd === userPwd[1])){
        			 res.redirect("/html/cssEg.html");
                         res.end(); 
                         flag=1;
        		}
             }
        		if(flag == 0){
        		res.write("Incorrect username  or password");
        			     res.end();	
        			 }
        });
	};
    read(req,res)

});


module.exports = router;