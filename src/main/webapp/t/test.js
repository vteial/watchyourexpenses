var appControllers = angular.module('app.controllers', []);
appControllers.controller('testController', function($scope, $log, $http) {

});

var dependents = [ 'ui.utils', 'ui.compat', 'ui.bootstrap' ];
// dependents.push('');
dependents.push('app.controllers');
var app = angular.module('app', dependents);
