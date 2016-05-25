'use strict';

angular.module('GUI-Demo.version', [
  'GUI-Demo.version.interpolate-filter',
  'GUI-Demo.version.version-directive'
])

.value('version', '0.1');
