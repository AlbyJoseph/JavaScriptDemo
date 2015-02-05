angular.module('employee').factory('service',function($http) {

	var service = {
		get: function get(callback) {
               $http.get('http://localhost:3000/employees')
               .success(function (data) {
                   callback(data);
               })
               .error(function (e) {
                   callback(e);
               });
               }};

	return service;
});