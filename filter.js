function filter(arr,fun){
	var newArray=[],j=0;
	for(var i=0;i<arr.length;i++){
		var b=fun(arr[i]);
		if(b==true)
		{
			newArray[j] = arr[i];
			console.log(newArray[j]);
			j++;
		}
	}
	console.log(newArray);
	return newArray;
}
var even=filter([2,5,6],function(element){
	return element%2==0;
});