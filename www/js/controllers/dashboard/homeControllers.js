// Controllers related to homepage goes here.

angular.module('homeControllers', [])
  .controller('HomeTabCtrl', function ($scope, $ionicModal, $timeout) {
    // TODO: Revove after fetching real data
    // Site List
    $scope.sites = [
      {
        siteId: 123,
        name: 'Event Site 1',
        type: 'School Playground',
        img: 'img/no-image2.png',
        address: 'Phoenix'
      },
      {
        siteId: 345,
        name: 'Event Site 2',
        type: 'Sports Arena',
        img: 'img/no-image1.png',
        address: 'Scotsdale'
      },
      {
        siteId: 987,
        name: 'Event Site 3',
        type: 'Community Hall',
        address: 'Chandler'
      }
    ]
  })
