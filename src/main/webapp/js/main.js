var dependents = [ 'ui.utils', 'ui.compat', 'ui.bootstrap' ];

// dependents.push('');

// dependents.push('angular-underscore');
// dependents.push('angular-underscore/utils');
// dependents.push('angular-underscore/filters');

dependents.push('wydAngular.filters');
dependents.push('wydAngular.services');
dependents.push('wydAngular.directives');

dependents.push('app.filters');
dependents.push('app.services');
dependents.push('app.directives');
dependents.push('app.controllers');

var app = angular.module('app', dependents);

app.config(configs);

app.run([
		'$rootScope',
		'$state',
		'$stateParams',
		'$log',
		function($rootScope, $state, $stateParams, $log) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			$rootScope.$on("accessControlService.logInSuccess", function(event,
					data) {
				$log.info(data.alertMessage);
			});
			$rootScope.$on("accessControlService.logOutSuccess", function(
					event, data) {
				$log.info(data.alertMessage);
			});
		} ]);

