var countryApp = angular.module('countryApp', ['ngRoute' , 'countryControllers']);

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

      countryApp.factory('countries', function($http){
        return {
          list: function (callback){
            $http({
              method: 'GET',
              url: '../data/countriesNew.json',
              cache: true
            }).success(callback);
          },
          find: function(id, callback){
            $http({
              method: 'GET',
              url: '../data/country_' + id + '.json',
              cache: true
            }).success(callback);
          }
        };
      });
      countryApp.directive('country', function(){
        return {
          scope: {
            country: '='
          },
          restrict: 'A',
          templateUrl: 'flag-custom.html',
          controller: function($scope, countries){
            countries.find($scope.country.id, function(country) {
              $scope.flagURL = country.flagURL;
            });
          }
        };
      });

