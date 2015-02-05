angular.module('gitSampleApp').controller('SearchCtrl',function($scope,gitHub){
$scope.executeSearch = function executeSearch() {
    gitHub.searchRepos($scope.query, function (error, data) {
        if (!error) {
            $scope.repos = data.items;
        }
    });
};
$scope.openRepo = function openRepo(name) {
    gitHub.getRepo(name, function (error, data) {
        if (!error) {
            $scope.activeRepo = data;
 
            gitHub.getReadme(name, function (error, data) {
                if (!error) {
                    $scope.activeRepo.readme = data;
                } else {
                    $scope.activeRepo.readme = 'No README found!';
                }
            });
        }
    });
};
});