angular.module('myNewApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('myNewApp').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl: 'partial/home/home.html'});
    $routeProvider.when('login',{templateUrl: '/login/page2.html'});
    $routeProvider.when('/login',{templateUrl: 'login/login.html'});
    $routeProvider.when('/movieapp',{templateUrl: 'movieapp/movieapp.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('myNewApp').run(function($rootScope) {

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
