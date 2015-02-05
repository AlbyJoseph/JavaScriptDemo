angular.module('pizzaApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('pizzaApp').config(function($routeProvider) {

    $routeProvider.when('/homeCtr',{templateUrl: 'homeCtr/homeCtr.html'});
    $routeProvider.when('/signUp',{templateUrl: 'signUp/signUp.html'});
    $routeProvider.when('/login',{templateUrl: 'login/login.html'});
    $routeProvider.when('/addItem',{templateUrl: 'addItem/addItem.html'});
    $routeProvider.when('/adminHome',{templateUrl: 'adminHome/adminHome.html'});
    $routeProvider.when('/menu',{templateUrl: 'menu/menu.html'});
    $routeProvider.when('/deliveryDetails',{templateUrl: 'deliveryDetails/deliveryDetails.html'});
    $routeProvider.when('/deliveryDisplay',{templateUrl: 'deliveryDisplay/deliveryDisplay.html'});
        $routeProvider.when('/deliveryMessage',{templateUrl: 'deliveryMessage/deliveryMessage.html'});
        $routeProvider.when('/viewCart',{templateUrl: 'viewCart/viewCart.html'});
        $routeProvider.when('/cartDisplay',{templateUrl: 'cartDisplay/cartDisplay.html'});
        
        $routeProvider.when('/viewOrders',{templateUrl: 'viewOrders/viewOrders.html'});
        $routeProvider.when('/logout',{templateUrl: 'logout/logout.html'});
        /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('pizzaApp').run(function($rootScope) {

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
