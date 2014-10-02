var analytics = analytics || {
  trackView: function(){return true;},
  addCustomDimension: function(){return true;}
};

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {
  $scope.title = '<img src="img/nav_logo@2x.png">';
})

.controller('searchCtrl', function($scope, $rootScope, $location) {
  $scope.location = '';

  $scope.search = function(object) {
    $rootScope.location = object;
    $location.path('/app/listView', false);
  };
})

.controller('listCtrl', function($scope, $rootScope, $http) {
  console.log($scope.location);
  $scope.coords = [$scope.location.geometry.location.k,$scope.location.geometry.location.B];
  analytics.trackView('list');
  analytics.addCustomDimension('list-coords', $scope.coords.join(','));
  $http({
    url:'http://api.zilyo.com/places?lat='+$scope.coords[0]+'&lng='+$scope.coords[1],
    method: 'GET',
    cache: true
  }).then(function(res) {
      
      res.data.items.forEach(function(e) {
        window.localStorage[e.pid] = JSON.stringify(e);
      });

      $scope.items = res.data;
    });
})

.controller('singleCtrl', function($scope, $stateParams, $http) {
  analytics.trackView('single');
  $scope.item = JSON.parse(window.localStorage[$stateParams.itemId]);
  console.log($scope.item);
});