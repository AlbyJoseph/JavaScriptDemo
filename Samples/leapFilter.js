var years=[2000,2016,1500,2003];
var leapYears=years.filter(function(element){
	return (((element % 4 == 0) && (element % 100 !=0)) || (element % 400 == 0 ));
});
console.log(leapYears);