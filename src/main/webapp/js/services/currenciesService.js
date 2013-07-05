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
