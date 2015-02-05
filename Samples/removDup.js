(function(){
var array = [12,67,12,45,67];
var newArray = [];
var dup = array.reduce(function(dup,current){
	dup[current] = (dup[current] || 0) + 1;
	return dup;
	},{});
console.log(dup);
for(var i in dup){
	if(dup[i] > 1)
		 delete dup[i];
	if(dup[i] == 1)
		newArray.push(i);    
	}
console.log("New array");	
console.log(newArray);
}());