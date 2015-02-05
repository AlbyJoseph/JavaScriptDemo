angular.module('employee', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('employee').config(function($routeProvider) {

    $routeProvider.when('/display',{templateUrl: 'display/display.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('employee').run(function($rootScope) {

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
