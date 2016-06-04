'use strict';

angular.module('GUI-Demo.Avail', ['ngRoute', 'checklist-model'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/avail', {
    templateUrl: 'available/available.html',
    controller: 'AvailCtrl'
  });
}])

.controller('AvailCtrl', ['$scope','PluginService', function($scope, PluginService) {
    $scope.ResetApp = function () {
        $scope.App = {};
        $scope.App.state = {};
    };

    $scope.ResetApp();

    $scope.App.state.info = false;

    $scope.ResetInstallQueue = function () {
        $scope.installQueue = [];
    };

    $scope.ResetInstallQueue();

    $scope.plugins = PluginService.plugins;

    $scope.preInstall = function (plugin) {
        $scope.installQueue.indexOf(plugin) == -1 && $scope.installQueue.push(plugin);
    };

    $scope.delPreInstall = function (plugin) {
        $scope.installQueue.splice($scope.installQueue.indexOf(plugin), 1);
    };

    $scope.UncheckAllInstallQueue = function () {
        $scope.installQueue = [];
    };

    $scope.install = function () {
        var selectedIDs = $scope.installQueue.map(function (plugin) {
            return plugin.id;
        });

        selectedIDs.length > 0 && PluginService.install(selectedIDs);

        $scope.ResetInstallQueue();
    };

    $scope.showInfo = function (plugin) {
        $scope.installQueue = [];
    
        $scope.App.state.info = true;
        $scope.App.name = plugin.name;
        $scope.App.description = plugin.description;
        $scope.App.version = plugin.version;
    };

    $scope.closeInfo = function () {
        $scope.App.state.info = false;
        $scope.ResetApp();
    };
}]);