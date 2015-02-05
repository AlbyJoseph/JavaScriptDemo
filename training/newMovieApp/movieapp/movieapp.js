angular.module('newMovieApp').controller('MovieappCtrl',function($scope,movies){
	 movies.list(function(movies) {
          $scope.movies = movies;
        });

});