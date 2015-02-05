angular.module('myGitApp').factory('searchService',function($http) {

       var searchService = {
               searchRepos: function searchRepos(query, callback) {
               $http.get('https://api.github.com/search/repositories', { params: { q: query } })
               .success(function (data) {
                   callback(null, data);
               })
               .error(function (e) {
                   callback(e);
               });
               },
               authentication:function(callback){
          $http({method : 'GET',
          url :'https://api.github.com',
          headers:{ 'Authorization':'token 7010d5804d04a89342ec7866d0e5567145540172' }})
          .success(function(data){
            callback(data);
          });
               },
               checkstar : function(fullname,callback){
                        $http({method : 'GET',
             url :'https://api.github.com/user/starred/'+fullname+'',
             headers:{ 'Authorization':'token 7010d5804d04a89342ec7866d0e5567145540172' }})
          .success(function(data){
            callback(data);
          });
               }
       };

       return searchService;
});