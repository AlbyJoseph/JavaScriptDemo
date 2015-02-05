angular.module('pizzaApp').controller('AdditemCtrl',function($scope,registerService,$location){
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

$scope.submit = function submit(item){
	console.log($scope.item);
			var file=document.getElementById('img').files[0];
			$scope.item.image=file.name;
               registerService.insertItem($scope.item,function(status){
                       $scope.status=status;
               });
               $location.path('/adminHome');

       };

});