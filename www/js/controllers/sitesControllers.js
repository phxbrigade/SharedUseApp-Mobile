// Controllers related to sites goes here.

angular.module('sitesControllers', [])
  .controller('SitesCtrl', function ($scope, $ionicModal, $timeout) {
  })
  .controller('SiteDetailsCtrl', function ($scope, $ionicModal, $stateParams, $timeout) {
    $scope.siteid = $stateParams.siteid
  })
