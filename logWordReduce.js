var sentence="Javascript good parts";
var longWord=sentence.split(" ").reduce(function (prev,current){
	if(prev.length>current.length)
		return prev;
	else
		return current;
},' ');
console.log("Longest word is: "+longWord);