angular.module('myGitApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('myGitApp').config(function($routeProvider) {

    $routeProvider.when('/searchController',{templateUrl: 'searchController/searchController.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/searchController'});

});

angular.module('myGitApp').run(function($rootScope) {

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
