angular.module('pizzaApp').controller('CartdisplayCtrl',function($scope,registerService,$location){

registerService.getCartNo(function(data){
		console.log("menu:",data);
		$scope.cartNo = data;
	});
registerService.getLoginStatus(function(data){
			$scope.logData	=	data;
			console.log("cartDisplay",$scope.logData);
			
		});

registerService.getCartItem(function(data){
			$scope.cartData	=	data;
			$scope.cartData.total = 0;
			console.log("cartDisplay",$scope.cartData);
				for(var i=0;i<$scope.cartData.length;i++){
		$scope.cartData.total = $scope.cartData.total + $scope.cartData[i].quantity * $scope.cartData[i].price;
		console.log($scope.cartData[i].quantity);
		}	
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

$scope.submit = function(){
	$scope.order={};
	$scope.order.user = $scope.logData;
	$scope.order.items = $scope.cartData;
	$scope.order.amount = $scope.cartData.total;
	$scope.order.date = new Date();
	console.log("##",$scope.order);
	registerService.insertOrder($scope.order,function(data){
    $scope.data=data;

});
	$location.path('/deliveryMessage');
};

		});
	
