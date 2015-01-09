function insertDash(number){
	var string=number.toString();
	var dashString='';
	for(var i=0;i<string.length;i++){
		if((string[i] % 2 === 0) && (string[i+1] % 2 === 0)){
				dashString[i]+= string[i]+"-";
				
			}
		else{
				dashString[i]+=string[i];
		}	
					
		}
		console.log(dashString);
}
insertDash(2468);