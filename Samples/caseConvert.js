
function convert(arr){
	var string;
	var convertedString=[];
	for(var i=0;i<arr.length;i++){
		string=arr.charAt(i);
		if(string>='A' && string<='Z')
		   convertedString[i]=string.toLowerCase();
		else if(string>='a' && string<='z')
			convertedString[i]=string.toUpperCase();
		else
			convertedString[i]=string;
	}
		
	console.log(convertedString.join(""));
}	
convert("alBY Joseph");