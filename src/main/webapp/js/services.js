var appServices = angular.module('app.services', []);

appServices.value('appContext', {
	appId : 'xpensesTracker',
	appVersion : '0.1'
});

appServices.factory('appServiceFacade', function($rootScope, $log,
		alertService, authService, accessControlService, timeZonesService,
		countriesService, currencyRatesService) {

	$rootScope.$on("accessControlService.logInSuccess", function(event, data) {
		alertService.addSuccess(data.alertMessage, true);
	});
	$rootScope.$on("accessControlService.logOutSuccess", function(event, data) {
		alertService.addSuccess(data.alertMessage, true);
	});

	var appServiceFacade = {
		alertService : alertService,
		authService : authService,
		accessControlService : accessControlService,
		timeZonesService : timeZonesService,
		countriesService : countriesService,
		currencyRatesService : currencyRatesService
	}

	return appServiceFacade;
});

appServices.factory('authService', function() {
	var authService = {};

	return authService;
});

appServices.factory('accessControlService', function() {
	var accessControlService = {};

	return accessControlService;
});

appServices.factory('timeZonesService', function($log, $http, $q) {
	var timeZonesService = {};

	timeZonesService.list = function() {
		var deferred = $q.defer();
		$http.get('json/timeZones.json').success(function(data) {
			deferred.resolve(data);
			$log.info('timezones fetching success...');
		}).error(function() {
			deferred.reject("Unable to fetch data...");
			$log.info('timezones fetching fails...');
		});
		return deferred.promise;
	};

	return timeZonesService;
});

appServices.factory('countriesService', function($log, $http, $q) {
	var timeZonesService = {};

	timeZonesService.list = function() {
		var deferred = $q.defer();
		$http.get('json/countries.json').success(function(data) {
			deferred.resolve(data);
			$log.info('countries fetching success...');
		}).error(function() {
			deferred.reject("Unable to fetch data...");
			$log.info('countries fetching fails...');
		});
		return deferred.promise;
	};

	return timeZonesService;
});

appServices.factory('currencyRatesService', function($log, $http, $q) {
	var timeZonesService = {};

	timeZonesService.list = function() {
		var deferred = $q.defer();
		$http.get('json/currencyRates.json').success(function(data) {
			deferred.resolve(data);
			$log.info('currency rates fetching success...');
		}).error(function() {
			deferred.reject("Unable to fetch data...");
			$log.info('currency rates fetching fails...');
		});
		return deferred.promise;
	};

	return timeZonesService;
});
