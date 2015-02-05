angular.module('pizzaApp').controller('LogoutCtrl',function($scope,registerService,$location){
	registerService.unsetLoginStatus();
	$location.path('/homeCtr');


});