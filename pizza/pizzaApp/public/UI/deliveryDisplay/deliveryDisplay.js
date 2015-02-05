angular.module('pizzaApp').controller('DeliverydisplayCtrl',function($scope,registerService,$location){
	
		registerService.getItem( function(data){
		$scope.itemData = data;
		console.log($scope.itemData);
});
registerService.getDeliveryAddress( function(data){
		$scope.userData = data;
		console.log($scope.userData);
});
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
$scope.itemData.quantity=1;
$scope.order={};
$scope.submit = function submit(itemData){
	
		$scope.order.user = $scope.userData;
		$scope.order.items = [itemData];
		$scope.order.amount = itemData.quantity*itemData.price;
		$scope.order.date = new Date();
		console.log("##",$scope.order);
		registerService.insertOrder($scope.order,function(data){
                       $scope.data=data;
	});
		$location.path('/deliveryMessage');
};
});