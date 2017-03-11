angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
  })

  .controller('LoginCtrl', function ($scope, $ionicModal, $timeout, $state) {
    $scope.loginData = {}

    $ionicModal.fromTemplateUrl('templates/login/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal
    })

    $scope.closeLogin = function () {
      $state.go('menu.dashboard.home')
    }

    $scope.login = function () {
      $scope.modal.show()
    }

    $scope.doLogin = function () {
      $timeout(function () {
        $scope.closeLogin()
      }, 1000)
    }
  })
