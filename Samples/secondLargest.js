function secondLargestSmallest(arr){
	var first_Small=arr[0];
	var second_Small=arr[0];
	var first_Large=arr[0];
	var second_Large=arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]<first_Small){
			second_Small=first_Small;
			first_Small=arr[i];
		}
        if (arr[i] < second_Small && arr[i] != first_Small)
           second_Small = arr[i];
        

	}
	console.log("Second Smallest element: "+second_Small);
//Second Largest
	for(var i=1;i<arr.length;i++){
		if(arr[i]>first_Large){
			second_Large=first_Large;
			first_Large=arr[i];
		}
        if (arr[i] > second_Large && arr[i] != first_Large)
           second_Large = arr[i];
        

	}
	console.log("Second Largest element: "+second_Large);
}
var array=[10];
secondLargestSmallest(array);