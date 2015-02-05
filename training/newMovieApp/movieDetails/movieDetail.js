angular.module('newMovieApp').controller('MoviedetailCtrl',function($scope,$routeParams,movies){
movies.find($routeParams.movieDetails, function(movie) {
          $scope.movie = movie;
        });

});