appServices.factory('appServiceFacade', function($rootScope, $log,
		alertService, accessControlService, timeZonesService, countriesService,
		currencyRatesService) {

	// $rootScope.$on("accessControlService.logInSuccess", function(event, data)
	// {
	// alertService.addSuccess(data.alertMessage, true);
	// });
	// $rootScope.$on("accessControlService.logOutSuccess", function(event,
	// data) {
	// alertService.addSuccess(data.alertMessage, true);
	// });

	var appServiceFacade = {
		alertService : alertService,
		accessControlService : accessControlService,
		timeZonesService : timeZonesService,
		countriesService : countriesService,
		currencyRatesService : currencyRatesService
	}

	return appServiceFacade;
});

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

function appInit($rootScope, $state, $stateParams, $log) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}
app.run([ '$rootScope', '$state', '$stateParams', '$log', appInit ]);
