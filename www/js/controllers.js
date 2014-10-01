var analytics = analytics || {
  trackView: function(){return true;},
  addCustomDimension: function(){return true;}
};

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {
  $scope.title = '<img src="img/nav_logo@2x.png">';
})

.controller('listCtrl', function($scope, $http) {
  analytics.trackView('list');
  analytics.addCustomDimension('list-coords', '45.5086699,-73.55399249999999');

  $http({
    url:'http://api.zilyo.com/places?lat=45.5086699&lng=-73.55399249999999',
    method: 'GET',
    cache: true
  }).then(function(res) {
      console.log('list', res);
      
      res.data.items.forEach(function(e) {
        console.log(e.pid);
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