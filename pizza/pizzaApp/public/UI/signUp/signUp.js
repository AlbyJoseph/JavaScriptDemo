angular.module('pizzaApp').controller('SignupCtrl',function($scope,registerService,$location){

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

	$scope.submit = function submit(user){
	console.log($scope.user);
               registerService.get($scope.user,function(status){
                       $scope.status=status;
               });
               $location.path('/login');

       };
       
});
