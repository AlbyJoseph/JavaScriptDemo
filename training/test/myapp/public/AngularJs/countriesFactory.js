angular.module('countriesFactory', [])
.factory('countries', function($http){
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