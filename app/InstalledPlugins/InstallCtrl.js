'use strict';

angular.module('GUI-Demo.InstallCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Apps', {
    templateUrl: 'InstalledPlugins/InstalledPlugins.html',
    controller: 'InstallCtrl'
  });
}])

.controller('InstallCtrl', ['$scope', 'PluginService', function($scope, PluginService) {
    $scope.ResetApp = function () {
        $scope.App = {};
        $scope.App.state = {};
    };

    $scope.ResetApp();

    $scope.App.state.info = false;

    $scope.plugins = PluginService.plugins;

    $scope.remove = function (plugin) {
        !plugin.enabled && PluginService.remove(plugin);
    };

    $scope.enable = function (plugin) {
        PluginService.state.enable(plugin);
    };

    $scope.disable = function (plugin) {
        PluginService.state.disable(plugin);
    };

    $scope.showInfo = function (plugin) {
        $scope.App.state.info = true;
        $scope.App.name = plugin.name;
        $scope.App.description = plugin.description;
        $scope.App.version = plugin.version;
        $scope.App.installed = plugin.installed;
    };

    $scope.closeInfo = function () {
        $scope.App.state.info = false;
        $scope.ResetApp();
    };
}]);