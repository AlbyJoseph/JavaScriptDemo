var array = [12,67,12,45,67];
var dup = array.reduce(function(dup,current){
	dup[current] = (dup[current] || 0) + 1;
	return dup;
	},{});
console.log(dup);
for(var i in dup){
	if(dup[i] > 1)
		console.log(i);
}

