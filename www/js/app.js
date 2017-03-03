/* Shared Use App
 * Maricopa County Department of Public Health
 *
 * Developed by:  Code For Phoenix
 * Email:         codeforphx@gmail.com
 */

var sharedUseApp = {};
sharedUseApp.baseURL = "http://localhost";
sharedUseApp.appVersion = "0.1";

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers/login/loginControllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'homeControllers', 'eventsControllers', 'spacesControllers', 'hostsControllers', 'nearbyControllers', 'activityControllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.login', {
        url: '/login',
        templateUrl: 'templates/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('app.events', {
        url: '/events',
        views: {
          'menuContent': {
            templateUrl: 'templates/events.html',
            controller: 'EventsCtrl'
          }
        }
      })
      .state('app.spaces', {
        url: '/spaces',
        views: {
          'menuContent': {
            templateUrl: 'templates/spaces.html',
            controller: 'SpacesCtrl'
          }
        }
      })
      .state('app.hosts', {
        url: '/hosts',
        views: {
          'menuContent': {
            templateUrl: 'templates/hosts.html',
            controller: 'HostsCtrl'
          }
        }
      })
      .state('app.nearby', {
        url: '/nearby',
        views: {
          'menuContent': {
            templateUrl: 'templates/nearby.html',
            controller: 'NearbyCtrl'
          }
        }
      })
      .state('app.activity', {
        url: '/activity',
        views: {
          'menuContent': {
            templateUrl: 'templates/activity.html',
            controller: 'ActivityCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
  });
