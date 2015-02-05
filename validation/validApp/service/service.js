angular.module('validApp').factory('service',function() {

	var service = {
		userData:{},
		set:function(user){
			service.userData = user;
		},
		get:function(callback){
			callback(service.userData);

		}
		   
};

	return service;
});