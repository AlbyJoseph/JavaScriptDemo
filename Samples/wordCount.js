var sentences=["India is my country","India is the 5th largest country","India is a largest country in the world"];
var previousValue=sentences.join(" ").split(" ").reduce(function(previousValue,currentValue){
	previousValue[currentValue]=(previousValue[currentValue]||0)+1;
	return previousValue;
},{});
console.log(previousValue);