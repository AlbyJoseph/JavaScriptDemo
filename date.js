
setInterval(function(){ 
	var date=new Date();
	var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours > 12) 
        hours = hours-12;
		console.log(hours+":"+minutes+":"+seconds);
}, 1000);
