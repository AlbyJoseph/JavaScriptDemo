
function reduce(arr,fun,prev){
	for(var i=0;i<arr.length;i++){
		prev=fun(prev,arr[i]);
	}
	console.log(prev);
	return prev;
}
var sum=reduce([10,14,20],function(prev,current){
	return prev+current;
	
},0);
