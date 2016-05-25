'use strict';

angular.module('GUI-Demo.PluginService', []).

service('PluginService', [function () {
    this.plugins = {
        test1: {
            name: 'test1',
            version: '0.1',
            description: 'Good for health',
            installed: false,
            enabled: false,
            id: 1
        },
        test2: {
            name: 'test2',
            version: '0.1',
            description: 'Bad for sleep',
            installed: false,
            enabled: false,
            id: 2
        }
    };

    this.state = {};

    this.install = function (selectedIDs) {
        for (var index in this.plugins) {
            if( selectedIDs.indexOf(this.plugins[index].id) !== -1) this.plugins[index].installed = true;
        };
    };

    this.remove = function (plugin) {
        if ( plugin.installed ) plugin.installed = false;
    };

    this.state.enable = function (plugin) {
        if ( !plugin.enabled ) plugin.enabled = true;
    };

    this.state.disable = function (plugin) {
        if ( plugin.enabled )  plugin.enabled = false;
    };

}]);
