angular.module('myGitApp').controller('SearchcontrollerCtrl',function($scope,searchService){
       $scope.executeSearch = function executeSearch() {
        searchService.authentication(function(data){
               $scope.userDetails = data;
               console.log($scope.userDetails);
               searchService.searchRepos($scope.query, function (error, data) {
               if (!error) {
                   $scope.repos = data.items;
               }

           });
              
           searchService.checkstar('AlbyJoseph/JavaScriptDemo',function (error, data) {
               if (!error) {
                   console.log(data);
                   $scope.status = data.status;
                   console.log($scope.status);
               }
               });
               
       });


       };        
});


//$scope.status = data.status;
                   //console.log($scope.status);