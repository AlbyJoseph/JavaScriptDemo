angular.module('newMovieApp').factory('movies',function($http) {

	return {
          list: function (callback){
            $http({
              method: 'GET',
              url: '/service/movies/movieNames.json',
              cache: true
            }).success(callback);
          },
          find: function(id, callback){
            $http({
              method: 'GET',
              url: '/service/movies/movie_' + id + '.json',
              cache: true
            }).success(callback);
          }
        };
});