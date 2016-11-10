/**
 * Created by joseangelmr on 10/11/16.
 */
angular.module('app.controllers', [])

  .controller('AppCtrl', function ($scope) {
  })

  .controller('DiscoverCtrl', function ($scope, API, $filter, $ionicFilterBar) {

    $scope.comics = [];

    var promise = API.getComics();
    promise.then(function (comics) {
      $scope.comics = [];

      for (var i=0; i< comics.length; i++) {
        var comic = comics[i];
        comic.year = $filter('date')(comics[i].dates[0].date, "yyyy")
        $scope.comics.push(comic);
      }
    }, function (reason) {
      // error
    });

    $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.comics,
        update: function (filteredItems, filterText) {
          $scope.comics = filteredItems;
        },
      });
    };
  })

  .controller('DetailsCtrl', function ($scope, $stateParams, API) {
    $scope.comic = API.getComic($stateParams.comicId);
  })



