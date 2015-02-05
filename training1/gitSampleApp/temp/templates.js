angular.module('gitSampleApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('search/search.html',
    "<div class=col-md-12 ng-controller=SearchCtrl><div id=search><input ng-model=query placeholder=search ng-keyup=\"$event.keyCode == 13 && executeSearch()\" type=text><div class=repo ng-repeat=\"repo in repos\" ng-click=openRepo(repo.full_name)><strong>{{ repo.full_name }}</strong><p>{{ repo.description }}</p></div></div><div id=repo ng-show=activeRepo><strong>{{ activeRepo.full_name }}</strong> <em>Watched by {{ activeRepo.watchers_count }} people.</em><pre>{{ activeRepo.readme }}</pre></div></div>"
  );

}]);
