angular.module('pizzaApp').controller('LoginCtrl',function($scope,registerService,$location){
	$scope.verify = function verify(email,password){
	console.log(email);
	$scope.userData	=	{
							email:email,
							password:password
							
			};
				//console.log($scope.userData);
               registerService.getLogin($scope.userData,function(data){
                       $scope.data=data;
                       console.log($scope.data);
                       console.log($scope.data[0].email);
                       if($scope.data.length === 0){
						$scope.msg="Invalid Username or password";
							$location.path('/login');
						}
						else{

								if(($scope.userData.email === "admin@gmail.com") && ($scope.userData.password === "admin")){
									$scope.msg="";							
									$location.path('/adminHome');
								}
								else{
									registerService.setLoginStatus($scope.data[0]);
									$scope.msg="";
									$location.path('/homeCtr');
								}
							
							
						}

               });

       };
});