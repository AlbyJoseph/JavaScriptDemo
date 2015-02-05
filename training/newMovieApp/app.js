angular.module('newMovieApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('newMovieApp').config(function($routeProvider) {

    $routeProvider.when('/movieapp',{templateUrl: 'movieapp/movieapp.html'});
    $routeProvider.when('/:movieDetails',{templateUrl: 'movieDetails/movieDetail.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('newMovieApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
