'use strict';

// Declare app level module which depends on views, and components
angular.module('GUI-Demo', [
  'ngMaterial',
  'ngRoute',
  'GUI-Demo.InstallCtrl',
  'GUI-Demo.Avail',
  'GUI-Demo.version',
  'GUI-Demo.PluginService'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/Apps'});
}]);
