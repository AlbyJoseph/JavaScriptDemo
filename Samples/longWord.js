	function longWord(string){
		
		var len=0;
		var splitLength=0;
		var maxLength=0;
		var longWord;
		var splittedString=string.split(" ");
	for(var i=0;i<splittedString.length;i++){
		splitLength=splittedString[i].length;
		if(splitLength>maxLength){
			maxLength=splitLength;
			longWord=splittedString[i];
		}

	}
	console.log("longest word is:"+longWord+" with length:"+maxLength);
	}
	longWord("How are you doing today?");