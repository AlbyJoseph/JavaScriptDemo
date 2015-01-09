function sortString(string){
	var stringArray=[];
		var temp;
	for(var i=0;i<string.length;i++){
		stringArray[i]=string.charAt(i);
		}
	console.log(stringArray);
	for(var i=0;i< stringArray.length;i++){
		for(var j=0;j<stringArray.length-1;j++){
			if(stringArray[j]>stringArray[j+1]){
				temp=stringArray[j];
				stringArray[j]=stringArray[j+1];
				stringArray[j+1]=temp;
			}

	}
		}
		
       console.log(stringArray.join(""));
}

sortString("alby");