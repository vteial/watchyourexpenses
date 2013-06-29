'use strict';

var appServices = angular.module('app.services', []);

appServices.value('appContext', {
	appId : 'xpensesTracker',
	appVersion : '0.1'
});

appServices.factory('appServiceFacade', function($rootScope, $log,
		alertService, authService, accessControlService) {

	$rootScope.$on("accessControlService.logInSuccess", function(event, data) {
		alertService.addSuccess(data.alertMessage, true);
	});
	$rootScope.$on("accessControlService.logOutSuccess", function(event, data) {
		alertService.addSuccess(data.alertMessage, true);
	});

	var appServiceFacade = {
		alertService : alertService,
		authService : authService,
		accessControlService : accessControlService
	};

	return appServiceFacade;
});

appServices.factory('authService', function() {
	var authService = {};

	authService.version = 0.1;

	return authService;
});

appServices.factory('accessControlService', function() {
	var accessControlService = {};

	accessControlService.version = 0.1;

	return accessControlService;
});
