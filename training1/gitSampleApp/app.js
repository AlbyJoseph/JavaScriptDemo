angular.module('gitSampleApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('gitSampleApp').config(function($routeProvider) {

    $routeProvider.when('/search',{templateUrl: 'search/search.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/search'});

});

angular.module('gitSampleApp').run(function($rootScope) {

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
