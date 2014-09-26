angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {
  console.log($location);
  $scope.title = '<img src="img/nav_logo@2x.png">';
})

.controller('listView', function($scope, $http) {
  analytics.trackView('listView');
  $http.get('http://api.zilyo.com/places?lat=45.5086699&lng=-73.55399249999999&lean=true')
    .then(function(res) {
      console.log('res',res);
      $scope.items = res.data;
    });
})

.controller('itemView', function($scope, $stateParams, $http) {
  analytics.trackView('itemView');
  $http.get('http://api.outpost.travel/wishlist?places=' + $stateParams.itemId)
    .then(function(res) {
      console.log($stateParams.itemId, res.data.places[0]);
      $scope.item = res.data.places[0];
    });
});
