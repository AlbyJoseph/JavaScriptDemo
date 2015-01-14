var countryApp = angular.module('countryApp', ['ngRoute' , 'countryControllers','countriesFactory',
  'countryDirective']);

      countryApp.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'country-list-custom.html',
            controller: 'CountryListCtrl'
          }).
          when('/:countryId', {
            templateUrl: 'country-link-list.html',
            controller: 'CountryDetailCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      });
