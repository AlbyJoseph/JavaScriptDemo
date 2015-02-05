angular.module('pizzaApp').controller('ViewordersCtrl',function($scope,registerService){

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
registerService.getOrders(function(data){
		$scope.orderData = data;
		console.log("order",$scope.orderData);

	});
$scope.view = "false";
$scope.show = function(orderData){
	$scope.view = "true";
	$scope.order =	orderData.items;
};
});