// Controllers related to sites goes here.

angular.module('sitesControllers', [])
  .controller('SitesCtrl', function ($scope, $ionicModal, $timeout) {
  })
  .controller('SiteDetailsCtrl', function ($scope, $ionicModal, $stateParams, $timeout) {
    // TODO: remove after fetching real data
    $scope.siteId = $stateParams.siteid
    $scope.siteName = $stateParams.sitename
    // Event List
    $scope.sites = [
      {
        eventId: 123,
        name: 'Event 1',
        type: 'Public',
        date: '17 March 2017',
        time: '07:30 AM'
      },
      {
        eventId: 345,
        name: 'Event 2',
        type: 'Public',
        date: '20 April 2017',
        time: '10:00 PM'
      },
      {
        eventId: 987,
        name: 'Event 3',
        type: 'Private',
        date: '01 April 2017',
        time: '05:30 AM'
      },
      {
        eventId: 983,
        name: 'Event 4',
        type: 'Public',
        date: '25 March 2017',
        time: '02:40 PM'
      }
    ]
  })

