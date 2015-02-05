angular.module('validApp').controller('DisplayCtrl',function($scope,service){
service.get( function(data){
	$scope.userData = data;
});
});