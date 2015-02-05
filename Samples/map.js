function map(arr,fun){
	var newArray=[];
	for(var i=0;i<arr.length;i++){
		newArray[i]=fun(arr[i]);
		console.log(newArray[i]);
		}
		return newArray;
}
var square=map([1,2,3],function(element){
	return element * element;
	
});