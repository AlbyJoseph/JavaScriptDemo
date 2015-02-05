angular.module('newMovieApp').directive('movie', function() {
	return {
		restrict: 'A',
		replace: true,
		scope: {
					movie: '='
		},
		templateUrl: 'directive/movie/movie.html',
		controller: function($scope, movies){
            movies.find($scope.movie.id, function(movie) {
              $scope.Poster = movie.Poster;
            });
          }
	};
});
