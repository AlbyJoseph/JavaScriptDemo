function forEach(arr,fun){
	for(var i=0;i<arr.length;i++){
		fun(arr[i]);
	}
}
forEach([1,2,4],function(element){
	console.log(element);
});