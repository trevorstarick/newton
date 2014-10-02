angular.module('starter', ['ionic', 'starter.controllers', 'google.places'])

.run(function($ionicPlatform, $rootScope) {

  $rootScope.$on('$locationChangeSuccess', function(scope, next, current) {
    // Per page
    scope.title = '<img src="img/nav_logo@2x.png">';
  });

  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
    if(analytics) {
      analytics.startTrackerWithId('UA-47163504-2');
      analytics.trackView('search');
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/",
    views: {
      'menuContent': {
        templateUrl: "templates/index.html",
      }
    }
  })

  .state('app.list', {
    url: "/listView",
    views: {
      'menuContent': {
        templateUrl: "templates/list.html",
        controller: 'listCtrl'
      }
    }
  })

  .state('app.single', {
    url: "/listView/:itemId",
    views: {
      'menuContent': {
        templateUrl: "templates/single.html",
        controller: 'singleCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/');
});