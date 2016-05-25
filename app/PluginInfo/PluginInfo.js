'use strict';

angular.module('GUI-Demo.PluginInfo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Info', {
    templateUrl: 'PluginInfo/PluginInfo.html',
    controller: 'PluginInfo'
  });
}])

.controller('PluginInfo', ['$scope', 'PluginService', function($scope, PluginService) {

}]);