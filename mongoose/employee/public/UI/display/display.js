angular.module('employee').controller('DisplayCtrl',function($scope,service){
service.get( function(data){
	$scope.empData = data;
	//console.log($scope.empData);
});
});