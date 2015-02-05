angular.module('pizzaApp').controller('DeliverydetailsCtrl',function($scope,registerService,$location){
// $scope.checkAddress = function checkAddress(c){
// if($scope.c.check === false){
// 	$scope.c.baddress1 = $scope.c.address1;
// 	$scope.c.baddress2 = $scope.c.address2;
// 	$scope.c.bcity = $scope.c.city;
// 	$scope.c.bstate = $scope.c.state;
// 	$scope.c.bpincode = $scope.c.pincode;
	
// }
// else{
// 	$scope.c.baddress1 = $scope.c.baddress1;
// 	$scope.c.baddress2 = $scope.c.baddress2;
// 	$scope.c.bcity = $scope.c.bcity;
// 	$scope.c.bstate = $scope.c.bstate;
// 	$scope.c.bpincode = $scope.c.bpincode;	
// }
// };
	
registerService.getLoginStatus(function(data){
			$scope.logStatus	=	data;
			console.log("log",$scope.logStatus);
			if($scope.logStatus.length	===	0){
				$scope.logstatus = "Login";
				$scope.loglink =	"#/login";
			}
			else{
				$scope.logstatus = "Logout";
				$scope.loglink =	"#/logout";
			}
		});
$scope.submit = function submit(address){
	registerService.setDeliveryAddress(address);
	$location.path("/deliveryDisplay");
	};
});