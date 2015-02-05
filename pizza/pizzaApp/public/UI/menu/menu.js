angular.module('pizzaApp').controller('MenuCtrl',function($scope,registerService,$location){
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
	registerService.getMenu(function(data){
		$scope.itemData = data;
		console.log($scope.itemData);
	});
	$scope.order = function order(item){
		console.log(item);
        registerService.setItem(item);
        $location.path('/deliveryDetails');
    };
	$scope.addToCart = function(item){
		registerService.setCartNo();
		registerService.setCartItem(item);
		registerService.getCartNo(function(data){
		console.log("menu:",data);
		$scope.cartNo = data;
	});
        //$location.path('/deliveryDetails');
    };
    $scope.viewCart = function(item){
		$location.path('/viewCart');
    };
	
});