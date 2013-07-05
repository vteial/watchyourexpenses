appServices.factory('countriesService', function($log, $http, $q) {
	var timeZonesService = {};

	timeZonesService.list = function() {
		var deferred = $q.defer();
		$http.get('json/countries.json').success(function(data) {
			deferred.resolve(data);
			$log.info('countries fetching success...');
		}).error(function() {
			deferred.reject("Unable to fetch countries data...");
			$log.info('countries fetching fails...');
		});
		return deferred.promise;
	};

	return timeZonesService;
});
