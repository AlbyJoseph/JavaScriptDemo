function insertDash(number){
	var arr=number.toString();
	var string=[];
	for(var i=0;i<arr.length;i++){
		string[i]=arr.charAt(i);
	}
	for(var i=0;i<string.length;i++){
		if((string[i]%2 === 0) && (string[i+1]%2 === 0)){
			for(var j=string.length;j>i+1;j--){
				string[j]=string[j-1];
				
			}
			string[i+1]="-";
		}
			
		}
		console.log(string.join(''));
}
insertDash(2468);