angular.module('pizzaApp').controller('ViewcartCtrl',function($scope,registerService,$location){
registerService.getCartNo(function(data){
		console.log("menu:",data);
		$scope.cartNo = data;
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
registerService.getCartItem(function(data){
		$scope.cartData = data;
		for(var i=0;i<$scope.cartData.length;i++){
		$scope.cartData[i].quantity = 1;
		}
		console.log("cartItem");
		console.log($scope.cartData);
	});
	$scope.submit =	function(){
		registerService.getLoginStatus(function(data){
			$scope.logStatus	=	data;
			console.log("log",$scope.logStatus);
			if($scope.logStatus.length	===	0){
				$location.path('/login');
			}
			else{
				$location.path('/cartDisplay');
			}
		});
	};

});