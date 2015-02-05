angular.module('myGitApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('searchController/searchController.html',
    "<div class=col-md-12 ng-controller=SearchcontrollerCtrl><div id=search>Search :<input ng-model=query placeholder=search ng-keyup=\"$event.keyCode == 13 && executeSearch()\" type=text><br><br><div class=repo ng-repeat=\"repo in repos\" ng-click=openRepo(repo.full_name)><table border=1 width=1000><tr><td width=20%><strong>{{ repo.full_name }}</strong></td><td width=70%>{{ repo.description }}</td><td width=10%><input type=submit ng-submit=\"\" value=\"Star\"></td></tr></table></div></div></div>"
  );

}]);
