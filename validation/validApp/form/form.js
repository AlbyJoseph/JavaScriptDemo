angular.module('validApp').controller('FormCtrl',function($scope,service,$location){
$scope.checkAddress = function checkAddress(user){
if($scope.user.check === false){
	$scope.user.baddress1 = $scope.user.address1;
	$scope.user.baddress2 = $scope.user.address2;
	$scope.user.bcity = $scope.user.city;
	$scope.user.bstate = $scope.user.state;
	$scope.user.bpincode = $scope.user.pincode;
	//console.log($scope.user.baddress1);
}
else{
	$scope.user.baddress1 = $scope.user.baddress1;
	$scope.user.baddress2 = $scope.user.baddress2;
	$scope.user.bcity = $scope.user.bcity;
	$scope.user.bstate = $scope.user.bstate;
	$scope.user.bpincode = $scope.user.bpincode;	
}
};
	$scope.submit = function submit(user){
	service.set($scope.user);
	$location.path("/display");
	};
});
