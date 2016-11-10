angular.module('app', ['ionic', 'app.controllers', 'app.services', 'ngLodash', 'ionicLazyLoad', 'jett.ionic.filter.bar'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    })
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/sidebar.html",
        controller: 'AppCtrl'
      })


      .state('app.comics', {
        url: "/comics",
        views: {
          'menuContent': {
            templateUrl: "templates/comics.html",
            controller: 'DiscoverCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/app/comics');
  });
